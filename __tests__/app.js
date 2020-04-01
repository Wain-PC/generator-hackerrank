"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const {readFile} = require('fs').promises;

describe("generator-hackerrank:app", () => {
  const opts = {
    topic: 'Sample Topic',
    task: "Sample Task",
    inputVarName: "n",
    unitTestsNumber: 1,
    exampleInput1: "testInput",
    exampleOutput1: "testOutput"
  };

  const taskFilePath = `${opts.topic}/${opts.task}.js`;
  const testFilePath = `${opts.topic}/${opts.task}.test.js`;

  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts(opts);
  });

  it("creates files", () => {
    assert.file(taskFilePath);
    assert.file(testFilePath);
  });

  it("task file content is correct", async () => {
    const contents = await readFile(taskFilePath, {encoding: "utf8"});
    expect(contents).toMatchSnapshot();
  });

  it("test file content is correct", async () => {
    const contents = await readFile(testFilePath, {encoding: "utf8"});
    expect(contents).toMatchSnapshot();
  });
});
