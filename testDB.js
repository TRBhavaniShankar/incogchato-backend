const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://dbUser:qMca3pI6E3y8rn8R@cluster0.f8ujp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function db() {
    try {
        await client.connect();
    
        await listDatabases(client);
        return "done"
    } catch (e) {
        return e
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

db()
.then(data => console.log(data))
.catch(err => console.log(err))
