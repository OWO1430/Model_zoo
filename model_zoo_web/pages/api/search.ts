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

async function create() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const modelCollection = db.collection('model');
        const cursor = modelCollection.find();
        const data: Model[] = await cursor.toArray();
        return data;
        
    } catch (error){
        console.log(error)
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
