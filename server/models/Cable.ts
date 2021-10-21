import { Schema, model } from "mongoose";

const cableSchema = new Schema({
	drum: {
		type: String,
		required: true,
		trim: true,
	},
	ref: {
		type: String,
		required: true,
		trim: true,
	},
  notes: {
    type: String,
    required: false,
    trim: true
  },
	laid: {
		type: Boolean,
		default: false,
	},
},
{
  versionKey: false,

});

export default model("Cable", cableSchema);
