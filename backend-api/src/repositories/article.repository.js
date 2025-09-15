const { seedArticles } = require("../seed/articles.seed");
const crypto = require("crypto");

class ArticleRepository {
  constructor() {
    this.items = [...seedArticles];
  }

  async findAll() {
    return this.items;
  }

  async findById(id) {
    return this.items.find(a => a.id === id);
  }

  async create(data) {
    const now = new Date().toISOString();
    const item = { id: crypto.randomUUID(), createdAt: now, updatedAt: now, ...data };
    this.items.unshift(item);
    return item;
  }

  async update(id, patch) {
    const idx = this.items.findIndex(a => a.id === id);
    if (idx === -1) return undefined;
    const updated = { ...this.items[idx], ...patch, updatedAt: new Date().toISOString() };
    this.items[idx] = updated;
    return updated;
  }

  async delete(id) {
    const prev = this.items.length;
    this.items = this.items.filter(a => a.id !== id);
    return this.items.length < prev;
  }
}

module.exports = { ArticleRepository };
