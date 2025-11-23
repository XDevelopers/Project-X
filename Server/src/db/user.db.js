import mongoose from "mongoose";
// import db_name from "../../contrains";
import db_name from "../../contrains.js";

const connectedDb = async () => {
  try {
    const instance = await mongoose.connect(
      `${process.env.MONGO_URL}/${db_name}`
    );
    console.log(`mongodbconnect successfully ${instance.connection.host}`);
  } catch (error) {
    console.log(process.env.MONGO_URL);
    console.log("falied to connect to DB", error);
    process.exit(1);
  }
};

export default connectedDb;
