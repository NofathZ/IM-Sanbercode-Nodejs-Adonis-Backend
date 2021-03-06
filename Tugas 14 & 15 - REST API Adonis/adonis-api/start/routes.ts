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
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.get('/', 'VenuesController.index');
  Route.post('/', 'VenuesController.store');
  Route.get('/:id', 'VenuesController.show');
  Route.put('/:id', 'VenuesController.update');
  Route.delete('/:id', 'VenuesController.destroy');
}).prefix('/venue')

Route.resource('field', 'FieldsController').only(['index', 'store', 'show', 'update', 'destroy'])

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})
