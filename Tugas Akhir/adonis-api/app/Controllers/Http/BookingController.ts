import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import BookingModel from '../../Models/BookingModel';
import Database from '@ioc:Adonis/Lucid/Database'

// enum fieldType {"futsal", "voli", "basket", "minisoccer", "soccer"};

export default class BookingController {

/**
 * @swagger
 *  path:
 *      /bookings:
 *          get:
 *              tags:
 *                  -   Test
 *              summary: Get all bookings
 *              responses:
 *                  200:
 *                      description: Send data of bookings
 *                      example:
 *                          data: bookingDatas
 *      /bookings/:id:
 *          get:
 *              tags:
 *                  - Test
 *              summary: Get booking by id
 *              parameters:
 *                  -   id: id
 *                      desciption: id of user
 *                      in: query
 *                      required: true
 *                      type: string
 *              responses:
 *                  200:
 *                      description: Send data booking
 *                      example:
 *                          data: bookingData
 *      /booking/:id/join:
 *          put:
 *              tags:
 *                  - Test
 *              summary: Set user to join in booking
 *              parameters:
 *                  -   user_id: user_id
 *                      desciption: id of user
 *                      in: query
 *                      required: true
 *                      type: number
 *                  -   field_id: field_id
 *                      description: id of field
 *                      in: query
 *                      required: true
 *                      type: number
 *                  -   play_date_start: play_date_start
 *                      description: play_date_start of booking
 *                      in: query
 *                      required: true
 *                      type: dateTime
 *                  -   play_date_end: play_date_end
 *                      description: play_date_end of booking
 *                      in: query
 *                      required: true
 *                      type: dateTime
 *              responses:
 *                  200:
 *                      description: Show edited data venue
 *                      example:
 *                          data: venueData
 *      /booking/:id/unjoin:
 *          put:
 *              tags:
 *                  - Test
 *              summary: Set user to unjoin booking
 *              parameters:
 *                  -   id: id
 *                      desciption: id of user
 *                      in: query
 *                      required: true
 *                      type: number
 *              responses:
 *                  200:
 *                      description: Show edited data venue
 *                      example:
 *                          data: venueData
 *      /schedules:
 *          schedules:
 *              tags:
 *                  - Test
 *              summary: Show all schedules of booking
 *              parameters:
 *                  -   id: id
 *                      desciption: id of schedules
 *                      in: query
 *                      required: true
 *                      type: number
 *              responses:
 *                  200:
 *                      description: Show message success
 *                      example:
 *                          message: Venue success deleted
 */
    
    async index({ response, auth }: HttpContextContract) {
        let { role } = auth.user

        if (role == "user") {
            const bookings = await BookingModel.all()
            return response.status(200).json({
                data: bookings
            })
        }
        else {
            return response.status(401).json({
                message: 'Unauthorized access'
            })
        }
    }

    async schedules({ response }: HttpContextContract) {
        let { role } = auth.user
        if (role == "user") {
            let bookings = await BookingModel.query().preload('bookings')
            return response.status(200).json({
                data: bookings
            })
        }
    }

    async store({ request, response, auth }: HttpContextContract) {
        let { role } = auth.user

        if (role == "user") {
            let validate = schema.create({
                user_id: schema.number(),
                field_id: schema.number(),
                play_date_start: schema.date({
                    format: 'yyyy-MM-dd HH:mm:ss',
                }),
                play_date_end: schema.date({
                    format: 'yyyy-MM-dd HH:mm:ss',
                })
            })
            let validated = await request.validate({
                schema: validate
            })

            let cariField = await Database.from('fields').select("*").where('id', validated.field_id);

            if (cariField) {
                const booking = await BookingModel.create(validated)
                return response.status(200).json({
                    data: booking
                })
            }
            else {
                return response.status(404).json({
                    message: "Field not found"
                })
            }
        }
        else {
            return response.status(401).json({
                message: 'Unauthorized access'
            })
        }
    }

    async show({ response, params, auth }: HttpContextContract) {
        let { role } = auth.user
        if (role == "user") {
            const bookings = await BookingModel.query().preload('bookings', (query) => {
                query.where("id", params.id)
            })
            // const booking = await BookingModel.find(params.id);
            return response.status(200).json({
                data: bookings
            })
        }
        else {
            return response.status(401).json({
                message: 'Unauthorized access'
            })
        }
    }

    async update({ request, response, params, auth } : HttpContextContract) {
        let { role } = auth.user

        if (role == "user") {
            let validate = schema.create({
                user_id: schema.number(),
                field_id: schema.number(),
                play_date_start: schema.date(),
                play_date_end: schema.date()
            })
            let validated = await request.validate({
                schema: validate
            })
            let validatedResult = {
                user_id: validated.user_id,
                field_id: validated.field_id,
                play_date_start: validated.play_date_start,
                play_date_end: validated.play_date_end
            }
            await BookingModel.query().where("id", params.id).update(validatedResult)
            return response.status(200).json({
                message: "OK",
                data: validatedResult
            })
        }
        else {
            return response.status(401).json({
                message: 'Unauthorized access'
            })
        }
    }

    async destroy({ response, params, auth } : HttpContextContract) {
        let { role } = auth.user

        if (role == "user") {
            const booking = await BookingModel.findOrFail(params.id);
            await booking.delete();
            return response.status(200).json({
                message: "Delete success"
            })
        }
        else {
            return response.status(401).json({
                message: 'Unauthorized access'
            })
        }
    }
}
