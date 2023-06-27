migrate((db) => {
  const collection = new Collection({
    "id": "a5ajb3liog9bzcm",
    "created": "2023-06-23 10:30:21.835Z",
    "updated": "2023-06-23 10:30:21.835Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "txdafoh4",
        "name": "Tittle",
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
        "name": "Text",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a5ajb3liog9bzcm");

  return dao.deleteCollection(collection);
})
