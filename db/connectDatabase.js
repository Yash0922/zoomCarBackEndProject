const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.set("strictQuery", true);

async function connectDatabase() {
  try {
    await mongoose.connect("mongodb+srv://yashkumarpal987:Yash%4015182204@cluster0.ss532hp.mongodb.net/zoomcar",{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to Database");
  }
}

module.exports = connectDatabase;
