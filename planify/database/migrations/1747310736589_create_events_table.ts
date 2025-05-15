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
INSERT INTO events (
    id,
    user_id,
    category,
    image,
    title,
    begin_time,
    end_time,
    begin_date,
    end_date,
    location,
    description,
    created_at,
    updated_at
  )
VALUES (
    id:integer,
    user_id:integer,
    'category:character varying',
    'image:character varying',
    'title:character varying',
    'begin_time:character varying',
    'end_time:character varying',
    'begin_date:date',
    'end_date:date',
    'location:character varying',
    'description:character varying',
    'created_at:timestamp with time zone',
    'updated_at:timestamp with time zone'
  );
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}