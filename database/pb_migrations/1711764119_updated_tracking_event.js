/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4maad40suz8ujba")

  collection.createRule = "@request.auth.courier != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4maad40suz8ujba")

  collection.createRule = null

  return dao.saveCollection(collection)
})
