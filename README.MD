# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stoofz/lotide`

**Require it:**

`const _ = require('@stoofz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array, array)`: Console logs pass or fail if two arrays are a match, uses eqArrays.
* `assertEqual(value, value)`: Console logs pass or fail if two values match.
* `assertObjectsEqual(object, object)`: Console logs pass or fail if two objects are a match, uses eqObjects.
* `countLetters(string)`: Input a string, returns the count of each letter in the string.
* `countOnly(allItems, itemsToCount)`: Input a collection of items, returns counts for a specificed group of items.
* `eqArrays(array, array)`: Compares two arrays for a complete match. Returns true or false.
* `eqObjects(object, object)`: Compares two objects for a complete match. Returns true or false.
* `findKey(object, callback)`: Returns first key found which callback returns true.
* `findKeyByValue(object, value)`: Returns a key of an object when it's value matches a inputted value.
* `flatten(array)`: Returns a flattened array from an array containing multiple nested arrays.
* `head(array)`: Retrieves the first element from an inputted array.
* `letterPositions(string)`: Input a string, returns indices of where each character is found.
* `map(array, callback)`: Returns new array based on results of callback.
* `middle(array)`: Returns middle most element(s) of array. If array odd returns single element. If even, double elements. If array single/empty returns empty.
* `tail(array)`: Retrieves all elements of an inputted array except the first element.
* `takeUntil(array, callback)`: Returns elements from array up until callback finds a value that returns true.
* `without(array, itemsToRemove)`: Returns a new array with elements in source array not contained in itemsToRemove array.



