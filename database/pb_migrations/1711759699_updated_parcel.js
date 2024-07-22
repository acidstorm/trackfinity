/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  collection.updateRule = "(@request.auth.courier.id = courier.id) || (@request.auth.courier.id !=\"\" && status = \"AWAITING_PICKUP\")"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
