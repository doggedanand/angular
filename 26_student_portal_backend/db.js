// Create MongoDB server
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/meanDB";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
});

async function connectDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Database.");
  } catch (err) {
    console.error("Error connecting to", err);
  }
}
connectDatabase();
// Export the client
module.exports = client;