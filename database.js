const { MongoClient } = require("mongodb");

const dummyData = {
  first_name: "sujju",
  last_name: "nayak",
  city: "udupi",
};

const password = "Kiran@98";
const encodedPassword = encodeURIComponent(password);

// Connection URL
const url = `mongodb+srv://kirandpatkar:${encodedPassword}@namste-nodejs.euh8lvj.mongodb.net/?appName=Namste-Nodejs`;
const client = new MongoClient(url);

// Database Name
const dbName = "namaste";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("users");

  const insertResult = await collection.insertMany([dummyData]);
  console.log("Inserted documents =>", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
