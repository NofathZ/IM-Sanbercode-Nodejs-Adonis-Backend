import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import User from '../../Models/User'

export default class UserController {
/**
 * @swagger
 *  path:
 *      /login:
 *          post:
 *              tags:
 *                  -   Test
 *              summary: Sample API
 *              parameters:
 *                  -   email: email
 *                      description: email of user
 *                      in: query
 *                      required: true
 *                      type: string
 *                  -   password: password
 *                       description: password of user
 *                      in: query
 *                      required: true
 *                      type: string
 *              responses:
 *                  200:
 *                      description: Send token of user
 *                      example:
 *                          message: token.toJSON()
 *      /register:
 *          post:
 *              tags:
 *                  - Test
 *              summary: Register API
 *              parameters:
 *                  -   name: name
 *                      desciption: name of user
 *                      in: query
 *                      required: true
 *                      type: string
 *                  -   email: email
 *                      description: email of user
 *                      in: query
 *                      required: true
 *                      type: string
 *                  -   password: password
 *                      description: password of user
 *                      in: query
 *                      required: true
 *                      type: string
 *                  -   role: role
 *                      description: role of user
 *                      in: query
 *                      required: true
 *                      type: string
 *              responses:
 *                  200:
 *                      description: Send data user
 *                      example:
 *                          data: userData
 */


    public async index({ response }: HttpContextContract) {
        const users = await User.all()
        response.status(200).json({
            data: users
        })
    }

    public async login ({ response, request, auth }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
    
        const token = await auth.use('api').attempt(email, password)
        // return token.toJSON()
        return response.status(200).json({
            data: token.toJSON()
        })
    }

    public async register ({ request, response }: HttpContextContract) {
        let validate = schema.create({
            name: schema.string(),
            email: schema.string(),
            password: schema.string(),
            role: schema.string()
        })
        let validated = await request.validate({
            schema: validate
        })

        const user = await User.create(validated)

        // const field = await FieldsModel.create(validatedResult)
        return response.status(200).json({
            data: user
        })
    }
}