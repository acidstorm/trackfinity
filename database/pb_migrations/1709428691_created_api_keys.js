/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wngwj026ak8699t",
    "created": "2024-03-03 01:18:11.054Z",
    "updated": "2024-03-03 01:18:11.054Z",
    "name": "api_keys",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pvrlaln0",
        "name": "redacted_secret",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "70lk9f9v",
        "name": "agent",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "vr22wfnd8b85mgi",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "@request.auth.id != \"\" && @request.data.agent.id = @request.auth.agent.id",
    "createRule": "@request.auth.id != \"\" &&  @request.data.agent.id = @request.auth.agent.id",
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": false,
      "allowOAuth2Auth": false,
      "allowUsernameAuth": true,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": [],
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wngwj026ak8699t");

  return dao.deleteCollection(collection);
})
