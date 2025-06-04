
export async function slugifyUnique(text, maxLength = 50, isSlugExists) {
  if (!text) return "";

  let slug = text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // Remove special chars
    .replace(/\s+/g, '-')       // Replace spaces with hyphen
    .replace(/-+/g, '-')        // Collapse multiple hyphens
    .replace(/^-+|-+$/g, '');   // Trim hyphens

  if (slug.length > maxLength) {
    const cutIndex = slug.lastIndexOf('-', maxLength);
    slug = slug.slice(0, cutIndex > 0 ? cutIndex : maxLength);
  }

  let uniqueSlug = slug;
  let counter = 1;

  while (await isSlugExists(uniqueSlug)) {
    uniqueSlug = slug + '-' + counter++;

    if (uniqueSlug.length > maxLength) {
      const allowedLength = maxLength - (`-${counter - 1}`).length;
      const cutIndex = slug.lastIndexOf('-', allowedLength);
      slug = slug.slice(0, cutIndex > 0 ? cutIndex : allowedLength);
      uniqueSlug = slug + '-' + (counter - 1);
    }
  }

  return uniqueSlug;
}
