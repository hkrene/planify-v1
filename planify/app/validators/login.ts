// import vine from '@vinejs/vine'
import vine from '@vinejs/vine'

/**
 * Validates the user's creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email().maxLength(50),
    password: vine.string().trim().minLength(8).maxLength(20),
  })
)

