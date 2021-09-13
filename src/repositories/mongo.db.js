//import mongodb from "mongodb";
import mongoose from "mongoose";

/*function getClient() {
  const uri = process.env.MONGODB_URL;
  return new mongodb.MongoClient(uri);
}*/

async function connect() {
  const uri = process.env.MONGODB_URL;
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

//export { getClient };
export { connect };
