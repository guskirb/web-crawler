export function sortPages(pages: any) {
  const pagesArray = Object.entries(pages);
  pagesArray.sort((a: any, b: any) => b[1] - a[1]);

  return pagesArray;
}

export function printReport(pages: any) {
  console.log("===============");
  console.log("     REPORT    ");
  console.log("===============");

  const sortedPages = sortPages(pages);
  for (const page of sortedPages) {
    const url = page[0];
    const num = page[1];
    console.log(`Found ${num} links to page: ${url}`);
  }

  console.log("===============");
  console.log("   END REPORT  ");
  console.log("===============");
}
