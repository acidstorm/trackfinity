/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4maad40suz8ujba")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lqgjvkkz",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "PICK_UP",
        "CLEAR_WITH_CUSTOM",
        "MARK_STOP",
        "SCHEDULE_FOR_DELIVERY",
        "MARK_AS_DELIVERED",
        "MARK_ATTEMPTED_DELIVERY"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4maad40suz8ujba")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lqgjvkkz",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "PICKED_UP",
        "FAILED_TO_DELIVER",
        "DELIVERED",
        "TO_BE_RETURNED"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
