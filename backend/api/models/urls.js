const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UrlSchema = new Schema({
 taskname: {
  type: String,
  trim: true,
 },
 taskdescription: {
  type: String,
  trim: true,
 },
 creator: {
  type: String,
  trim: true,
 },
 duration: {
  type: Number,
  trim: true,
 },
 createdAt: {
  type: Date,
  trim: true,
 }
});
module.exports = mongoose.model('Record', RecSchema)