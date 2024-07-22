/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smjku1o5bvi0wzg")

  collection.options = {
    "query": "SELECT\n    parcel.id as id,\n    parcel.items,\n    parcel.trackingNumber,\n    parcel.status,\n    (JSON_GROUP_ARRAY(\n  JSON_OBJECT('event', tracking_event.status, 'metadata', JSON_EXTRACT(tracking_event.metadata, \"$\"), 'created', tracking_event.created)) filter (WHERE tracking_event.status IS NOT NULL)) as events\nFROM\n    parcel\n    LEFT JOIN\n        tracking_event\n            ON tracking_event.parcel = parcel.id\nGROUP BY\n    parcel.id"
  }

  // remove
  collection.schema.removeField("hno3zecm")

  // remove
  collection.schema.removeField("csbohhdw")

  // remove
  collection.schema.removeField("qlcyg2dm")

  // remove
  collection.schema.removeField("tbwcx9oa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "brkst0gi",
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
    "id": "mjt4dgpg",
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
    "id": "kuhxo0wr",
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
    "id": "aqz1td6o",
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
    "query": "SELECT\n    parcel.id as id,\n    parcel.items,\n    parcel.trackingNumber,\n    parcel.status,\n    JSON_GROUP_ARRAY(\n  JSON_OBJECT('event', tracking_event.status, 'metadata', JSON_EXTRACT(tracking_event.metadata, \"$\"), 'created', tracking_event.created)) as events\nFROM\n    parcel\n    INNER JOIN\n        tracking_event\n            ON tracking_event.parcel = parcel.id\nGROUP BY\n    parcel.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hno3zecm",
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
    "id": "csbohhdw",
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
    "id": "qlcyg2dm",
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
    "id": "tbwcx9oa",
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
  collection.schema.removeField("brkst0gi")

  // remove
  collection.schema.removeField("mjt4dgpg")

  // remove
  collection.schema.removeField("kuhxo0wr")

  // remove
  collection.schema.removeField("aqz1td6o")

  return dao.saveCollection(collection)
})
