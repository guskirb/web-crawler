export function sortPages(pages: any) {
  const pagesArray = Object.entries(pages);
  return pagesArray.sort((a: any, b: any) => b[1] - a[1]);
}
