const { createClient } = require("@astrajs/rest");

exports.handler = async function(name, email) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: "hello"})
    }
    /*
    // create an Astra DB client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });


    const emailCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("emails");

    // create a new user (specifying documentId)

    try {
        const user = await emailCollection.create("test@email.com", {
            name: "cliff",
        });
        return {
            statusCode: 200,
            body: JSON.stringify(user)
        }
    } catch (e) {
        console.log(e);
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        }
    }*/
    
}