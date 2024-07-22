/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4maad40suz8ujba")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yilh2pur",
    "name": "metadata",
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
  const collection = dao.findCollectionByNameOrId("4maad40suz8ujba")

  // remove
  collection.schema.removeField("yilh2pur")

  return dao.saveCollection(collection)
})
