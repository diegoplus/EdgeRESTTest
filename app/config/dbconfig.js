/* Load modules */
let sqlite3 = require('sqlite3').verbose();


/* Create or load our sqlite database if it already exists  */
let db = new sqlite3.Database('./db/EdgeREST.db');

/* Tables and sample data initialization */
let init = function () {


    db.run("CREATE TABLE if not exists collaborators (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " firstName TEXT," +
        " lastName TEXT," +
        " phone TEXT," +
        " dateAdded TEXT," +
        " departmentId INT DEFAULT 1" +  //we'll add dept management in a [fictional] future update, let's add them all to a default dept for now.
        ")");

    db.run("CREATE TABLE if not exists departments (" + //dept table, as mentioned above, we'll use this in a [fictional] future update
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " name TEXT," +
        " dateAdded TEXT" +
        ")"); 

};

module.exports = {
    init: init,
    db: db
};