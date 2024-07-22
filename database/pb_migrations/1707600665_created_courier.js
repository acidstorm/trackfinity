/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kg6sdanosgqqtth",
    "created": "2024-02-10 21:31:05.820Z",
    "updated": "2024-02-10 21:31:05.820Z",
    "name": "courier",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9ryseuuw",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("kg6sdanosgqqtth");

  return dao.deleteCollection(collection);
})
