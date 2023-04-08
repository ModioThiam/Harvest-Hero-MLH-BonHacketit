const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://new_user_fa:abcd1234@foodwasteappcluster.agzjn6e.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// The database to use
const dbName = "participating_locations";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "{insert name of the collection here}"
        const col = db.collection("Farms");

        // Construct a document                                                                                                                                                              
        let document = {
            "name": "Wendy's",
            "address": "1234 Main St",
            "city": "New York",
            "state": "NY",
            "zip": "10001",
            "phone": "212-555-1212",
            "contact": {"name": "John Smith", "phone": "212-555-1212"}        
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(document);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}

run().catch(console.dir);
