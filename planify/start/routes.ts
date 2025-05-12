/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// import { get } from 'http'

router.on('/').render('pages/home')

router.get('/signup', 'UsersController.showSignupForm')
