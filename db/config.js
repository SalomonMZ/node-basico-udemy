const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("DB ready!");
  } catch (error) {
    console.error(error);
    throw new Error("Error on the DB connection");
  }
};

module.exports = {
  dbConnection,
};
