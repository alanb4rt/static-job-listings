export function getImageURL(path: string) {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
}
