import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required : true},
  name:{ type : String, required: true },
  phone: { type: Number },
  photo: { type: String},
  ticketPrice:{type:Number},
  role:{
    type: String,
  },

  //doctors fields
  specialization: {type: string},
  qualification: {
    type: Array,
  },

  experiences: {
    type: Array,
  },

  bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots:{ type: Array},
  reviews:[{ type: mongoose.Types.ObjectId, ref: "Review"}],
  averageRating: {
    Type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default:0,
  },
  isApproved:{
    type: string,
    enum:["pending","approved", "cancelled"],
    default: "pending",
  },
  appointments: [{type: mongoose.Types.ObjectId, ref: "Appointments"}],
});
export default mongoose.model("Doctor", DoctorSchema);