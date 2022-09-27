import mongoose from "mongoose";
const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },

  //   body: String,
  //   comments: [{ body: String, date: Date }],
  //   date: { type: Date, default: Date.now },
  //   hidden: Boolean,
  //   meta: {
  //     votes: Number,
  //     favs: Number,
  //   },
});

export default mongoose.model("Pg", hotelSchema);
