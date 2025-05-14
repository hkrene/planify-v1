import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {

  public async showSignupForm({ view }: HttpContext) {
    return view.render('security/signup')
  }

  public async showLoginForm({ view }: HttpContext) {
    return view.render('security/login')
  }
}
