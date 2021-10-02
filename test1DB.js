const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dbUser:PASSWORD@cluster0.f8ujp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(collection)
  client.close();
});
