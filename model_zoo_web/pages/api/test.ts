import type { NextApiRequest, NextApiResponse } from 'next'
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGOURL
console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

 
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return {
            message: "OK"
        }

    } catch (error){
        console.log(error)
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const result = await run()
      res.status(200).send( result )
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }