const mongoose = require("mongoose");
const uuid = require("uuid");

const courseSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: function genUUID() {
        return uuid.v4();
      },
      unique: true,
    },
    course_title: { type: String },
    status: { type: String, default: "draft" },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    logo: { type: String },
    published_date: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = courseSchema;
