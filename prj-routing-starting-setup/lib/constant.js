export const BASE_URL = process.env.NEXT_PUBLIC_FIREBASE_SALES_URL;
export const MONGO_DB_ID = process.env.NEXT_PUBLIC_MONGODB_ID;
export const MONGO_DB_PASSWORD = process.env.NEXT_PUBLIC_MONGODB_PASSWORD;

export const MONGO_DB_CLIENT = `mongodb+srv://${MONGO_DB_ID}:${MONGO_DB_PASSWORD}@free-and-sample.k3x69.mongodb.net/newsletter?retryWrites=true&w=majority&appName=free-and-sample`;
