const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChrisBotUserSquema = new Schema(
  {
    firstName: String,
    lastName: String,
    facebookId: {
      type: String,
      unique: true,
    },
    profilePic: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("chrisBotUser", ChrisBotUserSquema);
