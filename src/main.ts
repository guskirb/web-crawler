import { crawlPage } from "./crawl";

function main() {
  if (process.argv.length < 3) {
    console.log("Include a link");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("Too many arguements");
    process.exit(1);
  }
  const baseUrl = process.argv[2];
  console.log(`Starting crawl of ${baseUrl}`);

  crawlPage(baseUrl);
}

main();
