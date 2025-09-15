const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/article.controller");

router.get("/", ctrl.listArticles);
router.get("/:id", ctrl.getArticle);
router.post("/", ctrl.createArticle);
router.patch("/:id", ctrl.updateArticle);
router.delete("/:id", ctrl.deleteArticle);

module.exports = router;
