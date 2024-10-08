# Objectifyjs

![Static Badge](https://img.shields.io/badge/objectifyjs-dev-purple)
![GitHub Actions](https://img.shields.io/github/actions/workflow/status/nwashangai/objectify/ci.yml?branch=develop)
![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-blue.svg)
[![codecov](https://codecov.io/github/nwashangai/objectify/graph/badge.svg?token=DNTHIYPB2S)](https://codecov.io/github/nwashangai/objectifyjs)
![Pivotal Tracker](https://img.shields.io/badge/Pivotal%20Tracker-Project-blue)
![npm](https://img.shields.io/npm/v/objectifyjs)
![License](https://img.shields.io/npm/l/objectifyjs)

## Overview

Objectifyjs is an npm package that provides a collection of utility functions to work with objects in JavaScript. It includes functions for deep cloning, merging, extracting differences, and more. This package aims to simplify common object manipulations and enhance productivity.

## Installation

You can install Objectifyjs via npm:

```sh
npm install objectifyjs
```

Or via yarn:

```sh
yarn add objectifyjs
```

### Features

- Deep Clone: Create a deep copy of an object.
- Merge: Merge two objects, including nested objects.
- Extract Differences: Extract differences between two objects.
- TypeScript Support: Fully typed with TypeScript.
- Unit Tested: Thoroughly tested with Jest.

### Usage

#### Deep Clone

```javascript
import { deepClone } from 'objectifyjs';

const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);

console.log(clone); // { a: 1, b: { c: 2 } }
```

#### Merge

```javascript
import { merge } from 'objectifyjs';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { d: 3 } };

merge(obj1, obj2);
console.log(obj1); // { a: 1, b: { c: 2, d: 3 } }
```

#### Extract Differences

```javascript
import { getDifference } from 'objectifyjs';

const obj1 = { a: 1, b: 2, c: { d: 3 } };
const obj2 = { a: 1, b: 3, c: { d: 4 } };

// Extract differences from obj1 to obj2
const diff1 = getDifference(obj1, obj2, 1);
console.log(diff1); // { b: 2, c: { d: 3 } }

// Extract differences from obj2 to obj1
const diff2 = getDifference(obj2, obj1, -1);
console.log(diff2); // { b: 3, c: { d: 4 } }

// Extract combined differences
const diff3 = getDifference(obj1, obj2, 0);
console.log(diff3); // { b: 2, c: { d: 3 }, b: 3, c: { d: 4 } }
```

#### Check Object Equality

```javascript
import { areObjectsEqual } from 'objectifyjs';

// Strict Equality

const obj = { a: 1 };
console.log(areObjectsEqual(obj, obj)); // true

// Deep Equality
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(areObjectsEqual(obj1, obj2)); // true

// Different Structures
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 3 } };
console.log(areObjectsEqual(obj1, obj2)); // false

// Arrays
const arr1 = [1, 2, { a: 3 }];
const arr2 = [1, 2, { a: 3 }];
console.log(areObjectsEqual(arr1, arr2)); // true

const arr3 = [1, 2, 3];
const arr4 = [1, 2, 4];
console.log(areObjectsEqual(arr3, arr4)); // false
```

### API

#### deepClone<T>(obj: T): T

Creates a deep copy of the provided object.

Parameters:

- obj (T) - The object to clone.

Returns: A deep copy of the object.

#### merge<T>(target: T, source: Partial<T>): void

Merges the source object into the target object, including nested objects.

Parameters:

- target (T) - The target object to merge into.
- source (Partial<T>) - The source object to merge from.

#### extractDifferences<T>(obj1: T, obj2: T, flag: number): Partial<T>

Extracts differences between two objects based on the flag value.

Parameters:

- obj1 (T) - The first object to compare.
- obj2 (T) - The second object to compare.
- flag (number) - The flag to determine the direction of the difference extraction:
  - -1: Extract differences from obj2 to obj1.
  - 1: Extract differences from obj1 to obj2.
  - 0: Extract differences from both objects, excluding common properties with different values.

Returns: An object containing the differences.

#### areObjectsEqual(obj1: T1, obj2: T2): boolean

function to perform a deep comparison between two objects to determine if they are equal.

Parameters:

- obj1 (T1) - The first object to compare.
- obj2 (T2) - The second object to compare.

Returns: _boolean_ `true` if the objects are deeply equal, `false` otherwise.

### Contributing

We welcome contributions! Please read our Contributing Guide to learn how you can help.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements

- TypeScript
- Jest
- Pivotal Tracker
- GitHub Actions
