import { MongoClient, ServerApiVersion } from "mongodb";


let db;

export const connectDB = async () => {
  if (db) return db;

  try {
    const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER_NAME}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@cluster0.lggjuua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    db = client.db('newsDB');
    return db;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw new Error("Database connection failed");
  }
};

