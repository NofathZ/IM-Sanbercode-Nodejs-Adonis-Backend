/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import BookingController from 'App/Controllers/Http/BookingController';
// import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/register', 'UserController.register')
Route.post('/login', 'UserController.login')
Route.get('/users', "UserController.index")

Route.group(() => {
  Route.get('/', 'VenuesController.index');
  Route.post('/', 'VenuesController.store');
  Route.get('/:id', 'VenuesController.show');
  // Route.post('/:id/bookings', "FieldsController.store");
  Route.put('/:id', 'VenuesController.update');
  Route.delete('/:id', 'VenuesController.destroy');
}).prefix('/venues').middleware('auth')

Route.group(() => {
  Route.get('/', "BookingController.index");
  Route.get("/:id", "BookingController.show");
  Route.put("/:id/join", "BookingController.update");
  Route.put("/:id/unjoin", "BookingController.delete");
}).prefix('/bookings')
Route.get('/schedules', "BookingController.schedules");

// Route.get('/verify/:email', async ({ request }) => {
//   if (request.hasValidSignature()) {
//     return 'Marking email as verified'
//   }

//   return 'Url is not valid'
// }).as('verifyEmail')

// Route.get('/get_verification_link', async () => {
//   const signedUrl = Route.makeSignedUrl('verifyEmail', {
//     params: {
//       email: 'foo@bar.com',
//     }
//   })

//   return `<body>Click <a href="${signedUrl}">here</a> to verify email address</body>`
// })

// Route.get('health', async ({ response }) => {
//   const report = await HealthCheck.getReport()
//   return report.healthy
//     ? response.ok(report)
//     : response.badRequest(report)
// })