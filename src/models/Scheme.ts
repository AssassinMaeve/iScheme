import mongoose, { Schema, model, models } from "mongoose";

const SchemeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  features: {
    education_level: { type: String },
    age_group: { type: String },
    occupation: { type: String },
    state: { type: String },
    income_level: { type: String },
    caste_category: { type: String },
  },
}, { timestamps: true });

const Scheme = models.Scheme || model("Scheme", SchemeSchema, "Scheme_store");

export default Scheme;
