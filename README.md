# Objectify

![GitHub Actions](https://img.shields.io/github/actions/workflow/status/nwashangai/objectify/ci.yml?branch=develop)
![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-blue.svg)
[![codecov](https://codecov.io/github/nwashangai/objectify/graph/badge.svg?token=DNTHIYPB2S)](https://codecov.io/github/nwashangai/objectify)
![Pivotal Tracker](https://img.shields.io/badge/Pivotal%20Tracker-Project-blue)
![npm](https://img.shields.io/npm/v/objectify)
![License](https://img.shields.io/npm/l/objectify)

## Overview

Objectify is an npm package that provides a collection of utility functions to work with objects in JavaScript. It includes functions for deep cloning, merging, extracting differences, and more. This package aims to simplify common object manipulations and enhance productivity.

## Installation

You can install Objectify via npm:

```sh
npm install objectify
```

Or via yarn:

```sh
yarn add objectify
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
import { deepClone } from 'objectify';

const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);

console.log(clone); // { a: 1, b: { c: 2 } }
```

#### Merge

```javascript
import { merge } from 'objectify';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { d: 3 } };

merge(obj1, obj2);
console.log(obj1); // { a: 1, b: { c: 2, d: 3 } }
```

#### Extract Differences

```javascript
import { extractDifferences } from 'objectify';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { d: 3 } };

const differences = extractDifferences(obj1, obj2, -1);
console.log(differences); // { b: { d: 3 } }
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

### Contributing

We welcome contributions! Please read our Contributing Guide to learn how you can help.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements

- TypeScript
- Jest
- Pivotal Tracker
- GitHub Actions
