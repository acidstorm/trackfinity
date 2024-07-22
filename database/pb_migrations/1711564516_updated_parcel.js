/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  collection.listRule = "@request.auth.courier.id = @collection.agent.courier.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x95pfscdtvfcfqh")

  collection.listRule = null

  return dao.saveCollection(collection)
})
