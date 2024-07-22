/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "smjku1o5bvi0wzg",
    "created": "2024-04-01 16:13:13.944Z",
    "updated": "2024-04-01 16:13:13.944Z",
    "name": "parcels_with_events",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y5di4vfj",
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
      },
      {
        "system": false,
        "id": "rh2feewv",
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
      },
      {
        "system": false,
        "id": "zg5tf0cn",
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
      },
      {
        "system": false,
        "id": "spgtxf9g",
        "name": "events",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\nparcel.id as id,  \nparcel.items,\nparcel.trackingNumber,\nparcel.status,\nJSON_GROUP_ARRAY(JSON_OBJECT('event', tracking_event.status)) as events\nFROM parcel LEFT JOIN tracking_event ON tracking_event.parcel = parcel.id GROUP BY parcel.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("smjku1o5bvi0wzg");

  return dao.deleteCollection(collection);
})
