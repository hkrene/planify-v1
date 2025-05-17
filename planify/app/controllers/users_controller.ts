import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator } from '#validators/user'

export default class UsersController {

  public async showSignup({ view }: HpttpContext) {
    return view.render('security/signup')
  }

  public async showLogin({ view }: HttpContext) {
    return view.render('pages/createEvent')
  }

  public async create({ view, request, response, auth }: HttpContext) {

    const data = await request.validateUsing(createUserValidator)

    const user = await User.create({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    })
    console.log(data);
    console.log(user);
    
    return view.render('security/login')
  }


}
