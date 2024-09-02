import { sortPages } from "../report";
import { test, expect } from "@jest/globals";

// sortPages function tests
test("sortPages", () => {
  const input = {
    "https://google.com": 3,
    "https://google.com/path": 5,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://google.com/path", 5],
    ["https://google.com", 3],
  ];
  expect(actual).toEqual(expected);
});

test("sortPages 5 pages", () => {
  const input = {
    "https://google.com": 3,
    "https://google.com/path1": 5,
    "https://google.com/path2": 9,
    "https://google.com/path3": 1,
    "https://google.com/path4": 2,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://google.com/path2", 9],
    ["https://google.com/path1", 5],
    ["https://google.com", 3],
    ["https://google.com/path4", 2],
    ["https://google.com/path3", 1],
  ];
  expect(actual).toEqual(expected);
});
