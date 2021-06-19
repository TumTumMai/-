const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    lastname: String,
    email: String,
    password: String,
    birthday: Date,
    address: {
      phonenumber: String,
      buildingname: String,
      addressdetails: String,
      province: String,
      district: String,
      subdistrict: String,
      postalcode: String
    },
    provider: String,
    appId: String,
    name: String,
    id: String,
    idBooth: String,
    // Status: Boolean,
    // rolescomplete:{
    //   type:Boolean,
    //   default:true
    // },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;
