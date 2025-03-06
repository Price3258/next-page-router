import { getMongoDBClient } from "@/lib/db";
import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(getMongoDBClient("newsletter"));
  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  await db.collection("emails").insertOne(document);
}

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    console.log(userEmail);

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Connecting to db failed!" });
    }
    try {
      await insertDocument(client, { email: userEmail });
      client.close();
    } catch (error) {
      console.llog(error);
      res.status(500).json({ message: "Inserting data failed!" });
    }
    res.status(201).json({ message: "Signed Up!" });
  }
}

export default handler;
