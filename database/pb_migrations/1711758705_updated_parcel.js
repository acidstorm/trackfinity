/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vkecrkiv",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "AWAITING_PICKUP",
        "DESPATCHED",
        "ARRIVED_AT",
        "AWAITING_CUSTOMS_CLEARANCE",
        "CLEARED_CUSTOMS",
        "SCHEDULED_FOR_DELIVERY",
        "DELIVERED",
        "ATTEMPTED_DELIVERY"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vkecrkiv",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "DELIVERED",
        "DISPATCHED",
        "IN_TRANSIT"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
