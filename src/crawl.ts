import { JSDOM } from "jsdom";

export function normaliseUrl(url: string) {
  const urlObj = new URL(url);
  const hostPath = `${urlObj.hostname}${urlObj.pathname}`;

  if (hostPath.length > 0 && hostPath.slice(-1) === "/") {
    return hostPath.slice(0, -1);
  }
  return hostPath;
}

export function getUrlsFromHTML(HTMLBody: string, baseUrl: string) {
  const urls = new Array<string>();
  const dom = new JSDOM(HTMLBody);

  const linkElements = dom.window.document.querySelectorAll("a");
  for (const element of linkElements) {
    if (element.href.slice(0, 1) === "/") {
      // relative url
      try {
        const url = new URL(`${baseUrl}${element.href}`);
        urls.push(url.href);
      } catch (err) {
        console.log(`Error with relative url: ${err}`);
      }
    } else {
      // absolute url
      try {
        const url = new URL(element.href);
        urls.push(url.href);
      } catch (err) {
        console.log(`Error with absolute url: ${err}`);
      }
    }
  }
  return urls;
}

export async function crawlPage(currUrl: string) {
  console.log(`Crawling: ${currUrl}`);
  try {
    const resp = await fetch(currUrl);
    if (resp.status > 399) {
      console.log(
        `Error fetching with status: ${resp.status} on page: ${currUrl}`
      );
      return;
    }

    const contentType = resp.headers.get("content-type");
    if (!contentType?.includes("text/html")) {
      console.log(
        `Non html response, content type: ${contentType} on page: ${currUrl}`
      );
      return;
    }

    console.log(await resp.text());
  } catch (err) {
    console.log(`Error fetching page: ${err}`);
  }
}
