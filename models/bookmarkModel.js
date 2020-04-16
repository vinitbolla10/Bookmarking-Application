const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
  Link: {
    type: String,
    trim: true,
  },
  Title: {
    type: String,
    trim: true,
  },
  Time_created: {
    type: Date,
    default: Date.now,
  },
  Time_updated: Date,
  Publisher: {
    type: String,
    trim: true,
  },
  Tags: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "TagsSet",
    },
  ],
});

module.exports = mongoose.model("Bookmarks", BookmarkSchema);
