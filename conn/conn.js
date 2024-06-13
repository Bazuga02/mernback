const { response } = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); 
const conn = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    if (response) {
      console.log("Connected to DB");
    }
  } catch (err) {
    console.log(err);
  }
};

conn();
