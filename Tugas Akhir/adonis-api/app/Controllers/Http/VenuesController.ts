import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import VenuesModel from '../../Models/VenuesModel';
import FieldsModel from '../../Models/FieldsModel';

// enum fieldType {"futsal", "voli", "basket", "minisoccer", "soccer"};

export default class VenuesController {
/**
 * @swagger
 *  path:
 *      /venues:
 *          get:
 *              tags:
 *                  -   Test
 *              summary: Get all venues
 *              responses:
 *                  200:
 *                      description: Send data of venues
 *                      example:
 *                          data: venuesData
 *      /venues:
 *          post:
 *              tags:
 *                  - Test
 *              summary: Add venue
 *              parameters:
 *                  -   name: name
 *                      desciption: name of user
 *                      in: query
 *                      required: true
 *                      type: string
 *                  -   address: address
 *                      description: address of user
 *                      in: query
 *                      required: true
 *                      type: string
 *                  -   phone: phone
 *                      description: phone of user
 *                      in: query
 *                      required: true
 *                      type: string
 *              responses:
 *                  200:
 *                      description: Send data user
 *                      example:
 *                          data: venueData
 *      /venues/:id:
 *          get:
 *              tags:
 *                  - Test
 *              summary: Get venue by id
 *              parameters:
 *                  -   id: id
 *                      desciption: id of user
 *                      in: query
 *                      required: true
 *                      type: string
 *              responses:
 *                  200:
 *                      description: Send data user
 *                      example:
 *                          data: venueData
 *      /venues/:id:
 *          put:
 *              tags:
 *                  - Test
 *              summary: Edit Venue
 *              parameters:
 *                  -   name: name
 *                      desciption: name of user
 *                      in: query
 *                      required: true
 *                      type: string
 *                  -   address: address
 *                      description: address of user
 *                      in: query
 *                      required: true
 *                      type: string
 *                  -   phone: phone
 *                      description: phone of user
 *                      in: query
 *                      required: true
 *                      type: string
 *              responses:
 *                  200:
 *                      description: Show edited data venue
 *                      example:
 *                          data: venueData
 *      /venues/:id:
 *          delete:
 *              tags:
 *                  - Test
 *              summary: Delete Venue
 *              parameters:
 *                  -   id: id
 *                      desciption: id of user
 *                      in: query
 *                      required: true
 *                      type: string
 *              responses:
 *                  200:
 *                      description: Show message success
 *                      example:
 *                          message: Venue success deleted
 */


    async index({ response, auth }: HttpContextContract) {
        let { role } = auth.user

        if (role == "owner") {
            const venues = await VenuesModel.query().preload('fields')
            return response.status(200).json({
                data: venues
            })
        }
        else {
            return response.status(401).json({
                message: 'Unauthorized access'
            })
        }
    }

    async store({ request, response, auth }: HttpContextContract) {
        let { role } = auth.user

        if (role == "owner") {
            let validate = schema.create({
                name: schema.string(),
                address: schema.string(),
                phone: schema.string({}, [
                    rules.mobile({ locales: ['id-ID'] })
                ])
            })
            let validated = await request.validate({
                schema: validate
            })
    
            const venue = await VenuesModel.create(validated);
    
            return response.status(200).json({
                data: venue
            })
        }
        else {
            return response.status(401).json({
                message: 'Unauthorized access'
            })
        }
    }

    async show({ response, params, auth }: HttpContextContract) {
        let { role } = auth.user
        const venue = await VenuesModel.find(params.id)
        return response.status(200).json({
            data: venue
        })
    }

    async update({ request, response, params, auth } : HttpContextContract) {
        let { role } = auth.user

        if (role == "owner") {
            let validate = schema.create({
                name: schema.string(),
                address: schema.string(),
                phone: schema.string({}, [
                    rules.mobile({ locales: ['id-ID'] })
                ])
            })
    
            let validated = await request.validate({
                schema: validate
            })
            
            await VenuesModel.query().where("id", params.id).update(validated)
    
            return response.status(200).json({
                message: "OK",
                data: validated
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

        if (role == "owner") {
            const venue = await VenuesModel.findOrFail(params.id);
            await venue.delete()
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
