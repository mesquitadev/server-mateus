'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArtigoSchema extends Schema {
  up () {
    this.create('artigos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('artigos')
  }
}

module.exports = ArtigoSchema
