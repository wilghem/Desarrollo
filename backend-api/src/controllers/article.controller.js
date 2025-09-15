const { ArticleService } = require("../services/article.service");
const { ArticleCreateDto, ArticleUpdateDto } = require("../dtos/article.dto");

const service = new ArticleService();

const listArticles = async (_req, res) => {
  const data = await service.list();
  res.json(data);
};

const getArticle = async (req, res) => {
  const item = await service.get(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
};

const createArticle = async (req, res) => {
  const parsed = ArticleCreateDto.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ errors: parsed.error.format() });
  const created = await service.create(parsed.data);
  res.status(201).json(created);
};

const updateArticle = async (req, res) => {
  const parsed = ArticleUpdateDto.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ errors: parsed.error.format() });
  const updated = await service.update(req.params.id, parsed.data);
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

const deleteArticle = async (req, res) => {
  const ok = await service.remove(req.params.id);
  if (!ok) return res.status(404).json({ message: "Not found" });
  res.status(204).send();
};

module.exports = {
  listArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle
};
