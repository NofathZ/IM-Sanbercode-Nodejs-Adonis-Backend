import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import FieldsModel from '../../Models/FieldsModel';

enum fieldType {"futsal", "voli", "basket", "minisoccer", "soccer"};

export default class FieldsController {
    async index({ response }: HttpContextContract) {
        const fields = await FieldsModel.query().preload('venues');
        return response.status(200).json({
            data: fields
        })
    }

    async store({ request, response }: HttpContextContract) {
        let validate = schema.create({
            name: schema.string(),
            type: schema.number(),
            venue_id: schema.number()
        })
        let validated = await request.validate({
            schema: validate
        })
        let validatedResult = {
            name: validated.name,
            type: fieldType[validated.type - 1],
            venue_id: validated.venue_id
        }

        const field = await FieldsModel.create(validatedResult)
        return response.status(200).json({
            data: field
        })
    }

    async show({ response, params }: HttpContextContract) {
        const field = await FieldsModel.find(params.id);
        return response.status(200).json({
            data: field
        })
    }

    async update({ request, response, params } : HttpContextContract) {
        let validate = schema.create({
            name: schema.string(),
            type: schema.number(),
            venue_id: schema.number()
        })
        let validated = await request.validate({
            schema: validate
        })
        let validatedResult = {
            name: validated.name,
            type: fieldType[validated.type - 1],
            venue_id: validated.venue_id
        }
        await FieldsModel.query().where("id", params.id).update(validatedResult)
        return response.status(200).json({
            message: "OK",
            data: validatedResult
        })
    }

    async destroy({ response, params } : HttpContextContract) {
        const field = await FieldsModel.findOrFail(params.id);
        await field.delete();
        return response.status(200).json({
            message: "Delete success"
        })
    }
}
