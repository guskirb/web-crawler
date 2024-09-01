import { normaliseUrl, getUrlsFromHTML } from "../crawl";
import { test, expect } from "@jest/globals";

// normaliseUrl function tests
test("normaliseUrl strip protocol", () => {
  const input = "https://google.com";
  const actual = normaliseUrl(input);
  const expected = "google.com";
  expect(actual).toEqual(expected);
});

test("normaliseUrl strip last /", () => {
  const input = "https://google.com/hi/";
  const actual = normaliseUrl(input);
  const expected = "google.com/hi";
  expect(actual).toEqual(expected);
});

test("normaliseUrl capitals", () => {
  const input = "https://GOOGLE.com";
  const actual = normaliseUrl(input);
  const expected = "google.com";
  expect(actual).toEqual(expected);
});

test("normaliseUrl strip http", () => {
  const input = "http://google.com";
  const actual = normaliseUrl(input);
  const expected = "google.com";
  expect(actual).toEqual(expected);
});

// getUrlsFromHTML function tests
test("getUrlsFromHTML absolute", () => {
  const inputHTMLBody = `
  <html>
      <body>
          <a href="https://google.com/path">
              Google
          </a>
      </body>
  </html>
  `;
  const inputBaseUrl = "https://google.com/path";
  const actual = getUrlsFromHTML(inputHTMLBody, inputBaseUrl);
  const expected: any = ["https://google.com/path"];
  expect(actual).toEqual(expected);
});

test("getUrlsFromHTML relative", () => {
  const inputHTMLBody = `
  <html>
      <body>
          <a href="/path">
              Google
          </a>
      </body>
  </html>
  `;
  const inputBaseUrl = "https://google.com";
  const actual = getUrlsFromHTML(inputHTMLBody, inputBaseUrl);
  const expected: any = ["https://google.com/path"];
  expect(actual).toEqual(expected);
});

test("getUrlsFromHTML multiple links", () => {
  const inputHTMLBody = `
  <html>
      <body>
          <a href="/path1">
              Google
          </a>
          <a href="https://google.com/path2">
              Google
          </a>
      </body>
  </html>
  `;
  const inputBaseUrl = "https://google.com";
  const actual = getUrlsFromHTML(inputHTMLBody, inputBaseUrl);
  const expected: any = [
    "https://google.com/path1",
    "https://google.com/path2",
  ];
  expect(actual).toEqual(expected);
});
