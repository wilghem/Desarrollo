const { ArticleRepository } = require("../repositories/article.repository");

class ArticleService {
  constructor() {
    this.repo = new ArticleRepository();
  }

  list() {
    return this.repo.findAll();
  }

  get(id) {
    return this.repo.findById(id);
  }

  create(input) {
    return this.repo.create(input);
  }

  update(id, input) {
    return this.repo.update(id, input);
  }

  remove(id) {
    return this.repo.delete(id);
  }
}

module.exports = { ArticleService };
