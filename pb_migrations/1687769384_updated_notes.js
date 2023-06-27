migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a5ajb3liog9bzcm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jspb5ssu",
    "name": "name",
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

  // remove
  collection.schema.removeField("jspb5ssu")

  return dao.saveCollection(collection)
})
