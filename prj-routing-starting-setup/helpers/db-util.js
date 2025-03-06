import { MongoClient } from "mongodb";
import { MONGO_DB_ID, MONGO_DB_PASSWORD } from "../lib/constant";

export async function connectDatabase() {
  const address = `mongodb+srv://${MONGO_DB_ID}:${MONGO_DB_PASSWORD}@free-and-sample.k3x69.mongodb.net/events?retryWrites=true&w=majority&appName=free-and-sample`;
  const client = await MongoClient.connect(address);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
