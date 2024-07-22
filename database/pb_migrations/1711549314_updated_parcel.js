/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ubsr7mw8",
    "name": "items",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  // remove
  collection.schema.removeField("ubsr7mw8")

  return dao.saveCollection(collection)
})
