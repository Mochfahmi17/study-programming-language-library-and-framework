import mongoose from "mongoose";

// Membuat Schema
export const contact = mongoose.model("Contact", {
  nama: {
    type: String,
    required: true,
  },
  nohp: {
    type: String,
    required: true,
  },
  email: { type: String },
});
