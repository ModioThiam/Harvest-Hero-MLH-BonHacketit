const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://app_development_team:6146702183@foodwasteappcluster.agzjn6e.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// The database to use
const dbName = "participating_locations";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
 

        // Use the collection "{insert name of the collection here}"
        const restaurantCol = db.collection("restaurants");
        
        
            let restaurantDocuments = [
                {
                    "name": "Cap City Fine Diner and Bar",
                    "address": "1299 Olentangy River Rd",
                    "city": "Columbus",
                    "state": "OH",
                    "zip": "43212",
                    "phone": "(614) 291-3663",
                    "contact": {"name": "Darcy Smith", "phone": "614-555-1212"},     
                    "pickup_Hours": "2:00 PM - 5:00 PM", 
                    "days_for_pickup": "Mondays - Fridays"
                },
                {
                    "name": "Brassica",
                    "address": "680 N High St",
                    "city": "Columbus",
                    "state": "OH",
                    "zip": "43215",
                    "phone": "(614) 867-5885",
                    "contact": {"name": "Olivia Chambers", "phone": "614-555-3232"},     
                    "pickup_Hours": "2:00 PM - 5:00 PM", 
                    "days_for_pickup": "Mondays - Fridays"
                },
                {
                    "name": "Barcelona Restaurant",
                    "address": "263 E Whittier St",
                    "city": "Columbus",
                    "state": "OH",
                    "zip": "43206",
                    "phone": "(614) 443-3699",
                    "contact": {"name": "Jane Ramirez", "phone": "614-555-1212"},     
                    "pickup_Hours": "2:00 PM - 5:00 PM", 
                    "days_for_pickup": "Tuesdays - Sundays"
                }
            ];
        
        // Insert multiple documents
        const restaurantResult = await restaurantCol.insertMany(restaurantDocuments);
        console.log(`${restaurantResult.insertedCount} documents inserted into "restaurants" collection`);
        
        // Use the collection "farms"
        const farmCol = db.collection("farms");
        
            let farmDocuments = [
                {
                    "name": "Hilliard Farmer Market at the parking lot, Hilliard United Methodist Church",
                    "address": "5445 Scioto Darby Road",
                    "city": "Hilliard",
                    "state": "OH",
                    "zip": "43026",
                    "phone": "(614) 876-2403",
                    "contact": {"name": "Delane Jennnings", "phone": "614-555-3434"},     
                    "pickup_Hours": "5:00 PM - 7:00 PM", 
                    "days_for_pickup": "Tuesdays"
                },
                {
                    "name": "Harrison Farm",
                    "address": "5278 Berger Road",
                    "city": "Groveport",
                    "state": "OH",
                    "zip": "43125",
                    "phone": "(614) 271-0304",
                    "contact": {"name": "Delane Jennnings", "phone": "614-555-3434"},     
                    "pickup_Hours": "5:00 PM - 7:00 PM", 
                    "days_for_pickup": "Tuesdays"
                }
            ];
        
        
        // Insert multiple documents
        const farmResult = await farmCol.insertMany(farmDocuments);
        console.log(`${farmResult.insertedCount} documents inserted into "farm" collection`);   
 a
        const grocerystorecol = db.collection("grocery stores");

            let grocerystoreDocuments = [
                {
                    "name": "Kroger",
                    "address": "1350 N High St",
                    "city": "Columbus",
                    "state": "OH",
                    "zip": "43201",
                    "phone": "(614) 294-2545",
                    "contact": {"name": "General Management", "phone": "614-555-7766"},     
                    "pickup_Hours": "9:00 AM - 11:00AM ", 
                    "days_for_pickup": "Tuesday and Thursday mornings"
                },
                {
                    "name": "Whole Foods Market",
                    "address": "4100 Easton Gateway Dr",
                    "city": "Columbus",
                    "state": "OH",
                    "zip": "43219",
                    "phone": "(614) 536-0570",
                    "contact": {"name": "General Management", "phone": "614-555-8899"},     
                    "pickup_Hours": "9:00 AM - 11:00 AM", 
                    "days_for_pickup": "Monday and Wednesday mornings"
                }
            ];
                                      
        // Insert multiple documents
        const grocerystoreResult = await grocerystoreCol.insertMany(grocerystoreDocuments);
        console.log(`${grocerystoreResult.insertedCount} documents inserted into "grocery store" collection`); 

        // Insert a single document, wait for promise so we can read it back
        // const p = await col.insertOne(document);
        // Find one document
        // const myDoc = await col.findOne();
        // Print to the console
        // console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}
run().catch(console.dir);
