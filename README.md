# sort-of

> Sort objects by the value of their key

[![Build Status](https://travis-ci.org/saxjst/sort-of.svg?branch=master)](https://travis-ci.org/saxjst/sort-of)
[![Coverage Status](https://coveralls.io/repos/github/saxjst/sort-of/badge.svg?branch=master)](https://coveralls.io/github/saxjst/sort-of?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/841af7743a474bb61775/maintainability)](https://codeclimate.com/github/saxjst/sort-of/maintainability)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/saxjst/sort-of.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/saxjst/sort-of/context:javascript)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)

## Install

```
$ npm install @saxjst/sort-of
```

## Usage

```js
const sortOf = require('@saxjst/sort-of);

const people = [
  {
    name: "alice",
    age: 15
  },
  {
    name: "bob",
    age: 9
  },
  {
    name: "aaron",
    age: 12
  },
]

sortOf(people, ['age'], 'asc');
// [
//   {
//     name: "bob",
//     age: 9
//   },
//   {
//     name: "aaron",
//     age: 12
//   },
//   {
//     name: "alice",
//     age: 15
//   }
// ]
```

## API

## sortOf(arr, [path], command) ⇒ `Number[]` \| `Object[]`
Sort objects by the value of their key

**Kind**: global function  
**Returns**: `Number[]` \| `Object[]` - the sorted array  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Number[]</code> OR `Object[]` |  | the array to retrieve the value from. |
| [path] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | the key to sort by |
| command | <code>String</code> |  | asc or desc |



## License

MIT © [saxjst](https://saxjst.com)
