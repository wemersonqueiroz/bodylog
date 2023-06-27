migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a5ajb3liog9bzcm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hhgmayod",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a5ajb3liog9bzcm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hhgmayod",
    "name": "text",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
