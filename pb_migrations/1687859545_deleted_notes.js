migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a5ajb3liog9bzcm");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "a5ajb3liog9bzcm",
    "created": "2023-06-23 10:30:21.835Z",
    "updated": "2023-06-26 08:49:44.291Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "txdafoh4",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
