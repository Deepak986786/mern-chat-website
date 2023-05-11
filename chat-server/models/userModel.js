const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      // required:true,
      default: "https://img-url.com",
    },
  },
  {
    timestamps: true,
  }
);


// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

userSchema.method("matchPassword",async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
});

userSchema.pre("save", async function (next) {
//   if (!this.modified) {
//     next();
//   }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
