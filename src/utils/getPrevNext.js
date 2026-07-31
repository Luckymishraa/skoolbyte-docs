import { flattenNavigation } from "./flattenNavigation.js";
import { navigation } from "../content/navigation.js";

export function getPrevNext(currentSlug) {
  const flat = flattenNavigation(navigation);
  const index = flat.findIndex((item) => item.slug === currentSlug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? flat[index - 1] : null,
    next: index < flat.length - 1 ? flat[index + 1] : null,
  };
}
