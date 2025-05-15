import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable
      table.string('category').notNullable
      table.string('image').notNullable
      table.string('title').notNullable
      table.string('begin_time').notNullable
      table.string('end_time').notNullable
      table.date('begin_date').notNullable
      table.date('end_date').notNullable
      table.string('location').notNullable
      table.string('description').notNullable

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}