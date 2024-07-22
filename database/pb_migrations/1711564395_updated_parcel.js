/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v7cq5nds",
    "name": "courier",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kg6sdanosgqqtth",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  // remove
  collection.schema.removeField("v7cq5nds")

  return dao.saveCollection(collection)
})
