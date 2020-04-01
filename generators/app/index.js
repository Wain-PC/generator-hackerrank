"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument("task", { type: String, required: false });
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red("hackerrank")} generator!`)
    );

    const prompts = [
      {
        type: "input",
        name: "topic",
        message: "Topic name",
        validate: topic => topic.length > 0,
        default: this.options.topic
      },
      {
        type: "input",
        name: "task",
        message: "Task name",
        validate: topic => topic.length > 0,
        default: this.options.task
      },
      {
        type: "input",
        name: "inputVarName",
        message: "Input variable name",
        default: "input",
        validate: v => v.length !== 0
      },
      {
        type: "number",
        name: "unitTestsNumber",
        message: "Number of unit test examples?",
        default: 0
      }
    ];

    this.answers = await this.prompt(prompts);
    const unitTestPrompts = [];
    for (let i = 1; i <= this.answers.unitTestsNumber; i++) {
      unitTestPrompts.push({
        type: "input",
        name: "exampleInput" + i,
        message: `Enter example #${i} input`
      });

      unitTestPrompts.push({
        type: "input",
        name: "exampleOutput" + i,
        message: `Enter example #${i} output`
      });
    }

    const answers = await this.prompt(unitTestPrompts);
    const keys = Object.keys(answers);
    const pairs = [];
    for (let i = 0; i < keys.length; i += 2) {
      pairs.push({
        query: answers[keys[i]],
        answer: answers[keys[i + 1]]
      });
    }

    this.answers.unitTests = pairs;
  }

  writing() {
    const { topic, task } = this.answers;

    // JS template
    this.fs.copyTpl(
      this.templatePath("task.js.ejs"),
      this.destinationPath(`${topic}/${task}.js`),
      this.answers
    );

    // Unit tests
    this.fs.copyTpl(
      this.templatePath("test.js.ejs"),
      this.destinationPath(`${topic}/${task}.test.js`),
      this.answers
    );
  }

  end() {
    this.log(yosay("Bye!"));
  }
};
