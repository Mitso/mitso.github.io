const { MongoClient } = require("mongodb");

async function main() {
    const uri = "mongodb+srv://isixeko:JVnaSd4-*GQDhdd@isixeko-sam.sxbpx.mongodb.net/Isixeko-sam?retryWrites=true&w=majority";

    const client = new MongoClient(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}
