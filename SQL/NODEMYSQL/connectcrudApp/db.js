import { MongoClient } from 'mongodb'
// Connection URI
const uri = "mongodb://localhost:27017"; 

// Create a new MongoClient
export const client = new MongoClient(uri);
export async function run(dbName, collectionName) {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    
    const showDbs = await client.db("MongoTest2").collection("posts2").find({});

    const allData = await showDbs.toArray();
    console.log(allData);
    
  } catch (err) {
    console.log(err);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


