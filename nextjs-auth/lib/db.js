import { MongoClient } from "mongodb";

export async function connectToDatabase(url) {
  const client = await MongoClient.connect(url);

  return client;
}
