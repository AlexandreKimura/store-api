import mongodb from "mongodb";

function getClient() {
  const uri = process.env.MONGODB_URL;
  return new mongodb.MongoClient(uri);
}

export { getClient };
