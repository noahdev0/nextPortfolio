import { Mongoose } from "mongoose";

const { Schema } = Mongoose;

const contactSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },

  message: String,
});

export default Mongoose.model("Contact", contactSchema);
