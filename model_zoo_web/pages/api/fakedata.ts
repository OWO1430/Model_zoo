import type { NextApiRequest, NextApiResponse } from 'next'
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = process.env.MONGOURL
const dbName = 'ModelZoo';

type Model = {
    username: string;
    modelname: string
    model: string;
  };

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

function generateRandomString(length: number): string {
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result: string = '';

    for (let i: number = 0; i < length; i++) {
        const randomIndex: number = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

async function create() {
    try {
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        const db = client.db(dbName);
        const modelCollection = db.collection('model');
        
        const fakeData: any[] = [];

        for (let i = 0; i < 5; i++) {
            let name: string = generateRandomString(8);
            let data: Model = {
                username: name,
                modelname: name + 'model',
                model: "NA"
            }
            fakeData.push(data);
        }
        const result = await modelCollection.insertMany(fakeData);

        return {
            message: "OK"
        }

    } catch (error){
        console.log(error)
        return {
            error: "Internal server error."
        }
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const result = await create()
      res.status(200).send( result )
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }