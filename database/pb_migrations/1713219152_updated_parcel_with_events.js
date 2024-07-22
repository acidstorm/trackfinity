/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smjku1o5bvi0wzg")

  collection.options = {
    "query": "SELECT\n    parcel.id as id,\n    parcel.items,\n    parcel.trackingNumber,\n    parcel.status,\n    (JSON_GROUP_ARRAY(\n  JSON_OBJECT('event', tracking_event.status, 'metadata', JSON_EXTRACT(tracking_event.metadata, \"$\"), 'created', tracking_event.created) ORDER BY tracking_event.created DESC) filter (WHERE tracking_event.status IS NOT NULL)) as events\nFROM\n    parcel\n    LEFT JOIN\n        tracking_event\n            ON tracking_event.parcel = parcel.id\nGROUP BY\n    parcel.id"
  }

  // remove
  collection.schema.removeField("1a0yqk4q")

  // remove
  collection.schema.removeField("nq2z85qu")

  // remove
  collection.schema.removeField("d4bxwjbu")

  // remove
  collection.schema.removeField("lmjevyl7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gd6lcmwz",
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
    "id": "eccmepzg",
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
    "id": "si816xmg",
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
    "id": "6nylas0z",
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
    "query": "SELECT\n    parcel.id as id,\n    parcel.items,\n    parcel.trackingNumber,\n    parcel.status,\n    (JSON_GROUP_ARRAY(\n  JSON_OBJECT('event', tracking_event.status, 'metadata', JSON_EXTRACT(tracking_event.metadata, \"$\"), 'created', tracking_event.created)) filter (WHERE tracking_event.status IS NOT NULL)) as events\nFROM\n    parcel\n    LEFT JOIN\n        tracking_event\n            ON tracking_event.parcel = parcel.id\nGROUP BY\n    parcel.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1a0yqk4q",
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
    "id": "nq2z85qu",
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
    "id": "d4bxwjbu",
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
    "id": "lmjevyl7",
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
  collection.schema.removeField("gd6lcmwz")

  // remove
  collection.schema.removeField("eccmepzg")

  // remove
  collection.schema.removeField("si816xmg")

  // remove
  collection.schema.removeField("6nylas0z")

  return dao.saveCollection(collection)
})
