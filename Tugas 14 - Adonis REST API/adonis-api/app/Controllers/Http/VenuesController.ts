import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class VenuesController {
    async addVenue({ request, response } : HttpContextContract) {
        const venueValidate = schema.create({
            name: schema.string(),
            address: schema.string(),
            phone: schema.string({}, [
                rules.mobile({ locales: ['id-ID'] })
            ])
        })
        let validatedVenue = await request.validate({
            schema: venueValidate
        })
        
        return response.status(200).json({
            data: validatedVenue
        })
    }

    async bookingVenue({ request, response }: HttpContextContract) {
        const bookingValidate = schema.create({
            username: schema.string(),
            venuename: schema.string(),
            bookingdate: schema.date({ format: 'yyyy-MM-dd' }, [
                rules.after('today')
            ])
        })
        let validatedBooking = await request.validate({
            schema: bookingValidate
        })
        return response.status(200).json({
            data: validatedBooking
        })
    }
}
