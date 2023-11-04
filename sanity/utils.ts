interface PrepareQuery {
  id?: string;
  query?: string;
  type: string;
  tag?: string;
  category?: string;
  slug?: string;
}
export function prepareQuery({ query, category, id, tag, type, slug }: PrepareQuery) {
  const conditions = [`*[_type == "${type}"`];

  if (query) {
    conditions.push(`title match "${query}*"`);
  }

  if (slug) {
    conditions.push(`slug.current == "${slug}"`);
  }

  if (category && category !== "all") {
    conditions.push(`category == "${category}"`);
  }
  if (tag && tag !== "all") {
    conditions.push(`tags == "${tag}"`);
  }
  if (id) {
    conditions.push(`_id == "${id}"`);
  }

  if (conditions.length > 1) {
    return `${conditions[0]} && (${conditions.slice(1).join("&&")})]`;
  }
  return conditions[0] + "]";
}
