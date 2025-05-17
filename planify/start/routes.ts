/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'




router.get('/login', '#controllers/users_controller.showLogin')
router.get('/signup', '#controllers/users_controller.showSignup')

router.post('/signin', '#controllers/users_controller.create')
router.get('/event','#controllers/events_controller.showEvent')
router.post('/login','#controllers/users_controller.login')

router.group(() => {

  router.on('/').render('pages/createEvent')
  // router.post('/eventHome','#controllers/users_controller.showEventHome')

}).use(middleware.auth())
