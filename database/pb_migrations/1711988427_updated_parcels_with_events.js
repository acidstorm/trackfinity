/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smjku1o5bvi0wzg")

  collection.options = {
    "query": "SELECT\n    parcel.id as id,\n    parcel.items,\n    parcel.trackingNumber,\n    parcel.status,\n    JSON_GROUP_ARRAY(\n  JSON_OBJECT('event', tracking_event.status, 'metadata', JSON_EXTRACT(tracking_event.metadata, \"$\"), 'created', tracking_event.created)) as events\nFROM\n    parcel\n    LEFT JOIN\n        tracking_event\n            ON tracking_event.parcel = parcel.id\nGROUP BY\n    parcel.id"
  }

  // remove
  collection.schema.removeField("klomoth8")

  // remove
  collection.schema.removeField("chcynfh3")

  // remove
  collection.schema.removeField("qqkkohz6")

  // remove
  collection.schema.removeField("qqqrmijs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nz4ffsc1",
    "name": "items",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ny3pqfc1ai9hlk8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i7pvij7x",
    "name": "trackingNumber",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2awybarb",
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
        "AWAITING_CUSTOMS_CLEARANCE",
        "CLEARED_CUSTOMS",
        "SCHEDULED_FOR_DELIVERY",
        "DELIVERED",
        "ATTEMPTED_DELIVERY",
        "IN_TRANSIT"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gduzqraz",
    "name": "events",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smjku1o5bvi0wzg")

  collection.options = {
    "query": "SELECT\nparcel.id as id,  \nparcel.items,\nparcel.trackingNumber,\nparcel.status,\nJSON_GROUP_ARRAY(JSON_OBJECT('event', tracking_event.status, 'metadata' ,JSON_EXTRACT(tracking_event.metadata, \"$\"))) as events\nFROM parcel LEFT JOIN tracking_event ON tracking_event.parcel = parcel.id\nGROUP BY parcel.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "klomoth8",
    "name": "items",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ny3pqfc1ai9hlk8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chcynfh3",
    "name": "trackingNumber",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqkkohz6",
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
        "AWAITING_CUSTOMS_CLEARANCE",
        "CLEARED_CUSTOMS",
        "SCHEDULED_FOR_DELIVERY",
        "DELIVERED",
        "ATTEMPTED_DELIVERY",
        "IN_TRANSIT"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqqrmijs",
    "name": "events",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("nz4ffsc1")

  // remove
  collection.schema.removeField("i7pvij7x")

  // remove
  collection.schema.removeField("2awybarb")

  // remove
  collection.schema.removeField("gduzqraz")

  return dao.saveCollection(collection)
})
