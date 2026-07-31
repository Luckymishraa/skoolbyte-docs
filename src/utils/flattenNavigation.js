export function flattenNavigation(navigation) {
  const flat = [];
  navigation.forEach((group) => {
    group.items.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => flat.push(child));
      } else {
        flat.push(item);
      }
    });
  });
  return flat;
}
