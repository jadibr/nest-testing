import mongoose, { Document } from "mongoose"

export const SiteSchema = new mongoose.Schema({
  name: String,
  x: Number,
})

export interface ISite extends Document {
  name: string
  x: number
}
