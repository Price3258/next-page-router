import { MongoClient } from "mongodb";
import { MONGODB_URL } from "./constant";

export async function connectToDatabase() {
  const client = await MongoClient(MONGODB_URL);

  return client;
}
