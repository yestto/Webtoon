const Webtoon = require('../models/webtoonModel');

// Get all webtoons
exports.getAllWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find();
    res.json(webtoons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new webtoon
exports.createWebtoon = async (req, res) => {
  const { title, description, characters } = req.body;
  try {
    const newWebtoon = new Webtoon({ title, description, characters });
    await newWebtoon.save();
    res.status(200).send(`Webtoon Created Successfully!`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a specific webtoon by ID
exports.getWebtoonById = async (req, res) => {
  try {
    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) return res.status(404).json({ message: 'Webtoon not found' });
    res.json(webtoon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a webtoon by ID
exports.deleteWebtoonById = async (req, res) => {
  try {
    const webtoon = await Webtoon.findByIdAndDelete(req.params.id);
    if (!webtoon) return res.status(404).json({ message: 'Webtoon not found' });
    res.json({ message: 'Webtoon deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
