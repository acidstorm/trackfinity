/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smjku1o5bvi0wzg")

  collection.options = {
    "query": "SELECT\nparcel.id as id,  \nparcel.items,\nparcel.trackingNumber,\nparcel.status,\nJSON_GROUP_ARRAY(JSON_OBJECT('event', tracking_event.status, 'metadata' ,tracking_event.metadata)) as events\nFROM parcel LEFT JOIN tracking_event ON tracking_event.parcel = parcel.id\nGROUP BY parcel.id"
  }

  // remove
  collection.schema.removeField("xcw7vyaa")

  // remove
  collection.schema.removeField("9bguxstv")

  // remove
  collection.schema.removeField("kmhje9ew")

  // remove
  collection.schema.removeField("ytturew5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6jm19gve",
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
    "id": "sszcuqa3",
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
    "id": "yguxmhla",
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
    "id": "grnbgbv6",
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
    "query": "SELECT\nparcel.id as id,  \nparcel.items,\nparcel.trackingNumber,\nparcel.status,\nJSON_GROUP_ARRAY(JSON_OBJECT('event', tracking_event.status)) as events\nFROM parcel LEFT JOIN tracking_event ON tracking_event.parcel = parcel.id\nGROUP BY parcel.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xcw7vyaa",
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
    "id": "9bguxstv",
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
    "id": "kmhje9ew",
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
    "id": "ytturew5",
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
  collection.schema.removeField("6jm19gve")

  // remove
  collection.schema.removeField("sszcuqa3")

  // remove
  collection.schema.removeField("yguxmhla")

  // remove
  collection.schema.removeField("grnbgbv6")

  return dao.saveCollection(collection)
})
