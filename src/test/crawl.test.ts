import { normaliseUrl } from "../crawl";
import { test, expect } from "@jest/globals";

test("normaliseUrl strip protocol", () => {
  const input = "https://google.com";
  const output = normaliseUrl(input);
  const expected = "google.com";
  expect(output).toEqual(expected);
});

test("normaliseUrl strip last /", () => {
  const input = "https://google.com/hi/";
  const output = normaliseUrl(input);
  const expected = "google.com/hi";
  expect(output).toEqual(expected);
});

test("normaliseUrl capitals", () => {
  const input = "https://GOOGLE.com";
  const output = normaliseUrl(input);
  const expected = "google.com";
  expect(output).toEqual(expected);
});

test("normaliseUrl strip http", () => {
  const input = "http://google.com";
  const output = normaliseUrl(input);
  const expected = "google.com";
  expect(output).toEqual(expected);
});