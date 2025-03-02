const handleMongooseError = require("../helpers/handleMongooseError");
const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "starter",
      required: [true, "User name"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    bithday: {
      type: String,
      default: "DD/MM/YYYY",
    },
    phone: {
      type: String,
      default: "38 (000) 000 00 00",
    },
    skype: {
      type: String,
      default: "Add skype number",
    },
    avatar: {
      type: String,
    },
    token: { type: String, default: null },
    avatarURL: { type: String },
    theme: {
      type: String,
      enum: ["dark", "light"],
      default: "dark",
    },
  },
  { versionKey: false, timestamps: true }
);
const User = model("user", userSchema);

userSchema.post("save", handleMongooseError);
module.exports = User;
