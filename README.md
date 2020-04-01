# generator-hackerrank [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generate a Javascript template &amp; unit tests for solving another one of those /r/hackerrank challenges

## Installation

First, install [Yeoman](http://yeoman.io) and generator-hackerrank using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-hackerrank
```

Then generate your new project:

```bash
yo hackerrank
```

This will ask for the task scope and name, along with some other options, and produce the following result:

_Main file_
```javascript
// {scope}/{task}.js

const solve = (n) => {
  // Put your solution here
  return n;
};

module.exports = { solve };

```

_Unit tests_
```javascript
// {scope}/{task}.test.js

const { solve } = require('./task');

describe('Sample Task', () => {
  const examples = [
    {
      query: [1, 2, 3],
      answer: 5,
    }
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});

```

## License

MIT © [Wain-PC]()


[npm-image]: https://badge.fury.io/js/generator-hackerrank.svg
[npm-url]: https://npmjs.org/package/generator-hackerrank
[travis-image]: https://travis-ci.com/Wain-PC/generator-hackerrank.svg?branch=master
[travis-url]: https://travis-ci.com/Wain-PC/generator-hackerrank
[daviddm-image]: https://david-dm.org/Wain-PC/generator-hackerrank.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Wain-PC/generator-hackerrank
