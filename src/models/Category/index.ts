import type {Category as ApiCategory} from 'api/openapi/requests';
import {OpenAPI} from 'api/openapi/requests';

export const normalizeCategory = (cat: ApiCategory) => ({
  id: cat.id,
  title: cat.title,
  bgColor: cat.color,
  icon: `${OpenAPI.BASE}${cat.image}`,
});

type Category = ReturnType<typeof normalizeCategory>;

export const normalizeCategories = (categories: ApiCategory[]) =>
  categories.map(normalizeCategory);

export default Category;
