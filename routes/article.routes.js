const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/article.controller");

router.get("/articles/", getArticles);
router.get("/articles/:id", getArticle);
router.post("/articles/", urlencodedParser, createArticle);
router.put("/articles/:id", urlencodedParser, updateArticle);
router.delete("/articles/:id", urlencodedParser, deleteArticle);

module.exports = router;
