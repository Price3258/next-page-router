import { MONGO_DB_ID, MONGO_DB_PASSWORD } from "./constant";

export const getMongoDBClient = (collection) => {
  return `mongodb+srv://${MONGO_DB_ID}:${MONGO_DB_PASSWORD}@free-and-sample.k3x69.mongodb.net/${collection}?retryWrites=true&w=majority&appName=free-and-sample`;
};
