const articleModel = require("../models/articles.model");

const getArticles = async (req, res) => {
  try {
    const articles = await articleModel.find({});
    res.status(200).json({ articles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getArticle = async (req, res) => {
  try {
    const article = await articleModel.findById(req.params.id);
    res.status(200).json({ article });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createArticle = async (req, res) => {
  try {
    const article = await articleModel.create(req.body);
    res.status(201).json({ article });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const article = await articleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ article });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await articleModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ article });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
