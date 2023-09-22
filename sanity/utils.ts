interface PrepareQuery {
    id?: string,
    query?: string,
    type: string,
    tag?: string,
    category?: string
}
export function PrepareQuery({ query, category, id, tag, type }: PrepareQuery) {
    const conditions = [`*[_type == "${type}"`];

    if (query) {
        conditions.push(`title match "${query}*"`);
    }

    if (category && category !== "all") {
        conditions.push(`"${category}" in categories[]->title`);
    }
    if (tag && tag !== "all") {
        conditions.push(`"${tag}" in tags[]->title`);
    }
    if (id) {
        conditions.push(`_id == "${id}"`);
    }

    if (conditions.length > 1) {
        return `${conditions[0]} && (${conditions.slice(1).join("&&")})]`
    }
    return conditions[0] + "]";
}
