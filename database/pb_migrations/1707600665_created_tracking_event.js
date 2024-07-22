/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4maad40suz8ujba",
    "created": "2024-02-10 21:31:05.817Z",
    "updated": "2024-02-10 21:31:05.817Z",
    "name": "tracking_event",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "slwhp8nt",
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
      },
      {
        "system": false,
        "id": "kuv56x5e",
        "name": "parcel",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "x95pfscdtvfcfqh",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4maad40suz8ujba");

  return dao.deleteCollection(collection);
})
