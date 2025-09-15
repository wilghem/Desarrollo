const { z } = require("zod");

const ArticleCreateDto = z.object({
  title: z.string().min(3),
  summary: z.string().min(3),
  category: z.string().min(1),        
  imageUrl: z.string().url(),
  imageAlt: z.string().min(1),
  sourceSet: z.string().optional()
});

const ArticleUpdateDto = ArticleCreateDto.partial();

module.exports = {
  ArticleCreateDto,
  ArticleUpdateDto
};
