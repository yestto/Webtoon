const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  traits: { type: String }
});

const webtoonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  characters: [characterSchema]
});

module.exports = mongoose.model('Webtoon', webtoonSchema);
