
import vine from '@vinejs/vine'

/**
 * Validates login action
 */
export const createLoginValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email().maxLength(50),
    password: vine.string().trim().minLength(8).maxLength(20),
  })
)

