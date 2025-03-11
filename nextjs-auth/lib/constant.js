export const MONGODB_ID = process.env.NEXT_PUBLIC_MONGODB_ID;
export const MONGODB_PASSWORD = process.env.NEXT_PUBLIC_MONGODB_PASSWORD;
export const MONGODB_CLUSTER = process.env.NEXT_PUBLIC_MONGODB_CLUSTER;
export const MONGODB_DB_NAME = process.env.NEXT_PUBLIC_MONGODB_DB_NAME;

export const MONGODB_URL = `mongodb+srv://${MONGODB_ID}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.k3x69.mongodb.net/${MONGODB_DB_NAME}?retryWrites=true&w=majority&appName=${MONGODB_CLUSTER}`;
