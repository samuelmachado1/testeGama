import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Candidates extends BaseSchema {
  protected tableName = 'candidates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('cpf').unique().notNullable()
      table.string('name').notNullable()
      table.string('register').notNullable()
      table.string('intended_position')
      table.string('maritial_status')
      table.string('birthday')
      table.string('gender')
      table.string('cep')
      table.string('public_place').notNullable()
      table.integer('number')
      table.string('district')
      table.string('city').notNullable()
      table.string('state')
      table.string('landline_one')
      table.string('landline_two')
      table.string('cellphone')
      table.string('contact')
      table.string('email')
      table.string('occupation').notNullable()
      table.boolean('has_vehicle')
      table.boolean('has_license')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
