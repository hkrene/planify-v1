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




router.get('/login', '#controllers/users_controller.showLoginForm')
router.get('/signup', '#controllers/users_controller.showSignupForm')

router.post('/signUpUser', '#controllers/users_controller.create')
router.get('/event','#controllers/events_controller.showEvent')
router.group(() => {

  router.on('/').render('pages/home')
}).use(middleware.auth())
