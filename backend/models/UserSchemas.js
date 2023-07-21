import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email:{ type: string, required: true, unigue: true },
  password:{ type: String, required: true },
  name: { type: String, Required: true },
  phone: {  type: Number},
  photo: { type: string},
  role:{
    type: string,
    enum: ["patient", "admin"],
    default:"patient",
  }, 
  gender: { type: string, enum:["male", "female", "other"] },
  bloodType: { type: String },
  appointments:[{type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

export default mongoose.model("user", UserSchema);