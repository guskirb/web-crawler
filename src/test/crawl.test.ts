import { normaliseUrl } from "../crawl";
import { test, expect } from "@jest/globals";

test("normaliseUrl, stop protocol", () => {
  const input = "https://google.com";
  const output = normaliseUrl(input);
  const expected = "google.com/";
  expect(output).toEqual(expected);
});
