import { flattenNavigation } from "./flattenNavigation.js";

export function getPrevNext(currentSlug, navigation, basePath) {
  const flat = flattenNavigation(navigation);
  const index = flat.findIndex((item) => item.slug === currentSlug);
  if (index === -1) return { prev: null, next: null };

  // const withBasePath = (item) =>
  //   item
  //     ? { ...item, slug: `${basePath}/${item.slug}`.replace(basePath, "") }
  //     : null;
  // simplest correct version: just prefix slug for PrevNext's <Link to={`/${slug}`}>
  return {
    prev: index > 0 ? { ...flat[index - 1] } : null,
    next: index < flat.length - 1 ? { ...flat[index + 1] } : null,
  };
}
