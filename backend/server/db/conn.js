const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        const dbName = "participating_locations";
        client.connect() ;
        console.log("Connected correctly to server");
        const db = client.db(dbName);
    },

    getDb: function () {
        return _db;
    },
};