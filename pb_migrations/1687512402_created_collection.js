migrate((db) => {
  const collection = new Collection({
    "id": "y47st2bhx0j5sb2",
    "created": "2023-06-23 09:26:42.288Z",
    "updated": "2023-06-23 09:26:42.288Z",
    "name": "collection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "21zkvi9k",
        "name": "Title",
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
        "id": "brqhvgmx",
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
  const collection = dao.findCollectionByNameOrId("y47st2bhx0j5sb2");

  return dao.deleteCollection(collection);
})
