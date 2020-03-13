# tokenizer.js
> A tokenizer written for JavaScipt ML applications

## How to import
```javascript
const tokenizer = require('Tokenizer')
```
## How to declare
```javascript
// Declare a new object
let tokenizer = new Tokenizer(array_of_sentences)
// From JSON
let tokenizer = new Tokenizer()
tokenizer.fromJSON('./path/to/index.json')
```
## How to use
```javascript
// Returns index generated (e.g. { 'word1': 0, 'word2': 1, 'word3': 3 }).
tokenizer.index;
```
```javascript
// Creates new index and overwrites current index.
tokenizer.create(array_of_senteces);
```
```javascript
// Check if word exists in index.
tokenizer.exists('example');
```
```javascript
// Takes string or number as argument, if string, returns the corresponding number. If number, returns number.
tokenizer.find('word'); tokenizer.find(5);
```
```javascript
/* Adds word sttring to index and returns corresponding number. If word exists, returns false
Numbers are assigned incrementally unless any entries were previously removed, 
if so, it takes a number from the empty_slots buffer. 
The empty_slots buffer is stored in tokenizer.index.empty_slots */
tokenizer.add('word');
```
```javascript
// Removes word entry and stores its number in the empty_slots buffer.
tokenizer.remove('word');
```
```javascript
// Sorts index in ascending order by value, takes no arguments.
tokenizer.sort();
```
```javascript
// Returns the length of the index, takes no arguments.
tokenizer.indexLength();
```
```javascript
// Encodes a string sentence and returns an array of numbers.
tokenizer.encode("this is a sentence"); // -> [223, 554, 420, 73]
```
```javascript
// Decodes an array of numbers and returns a string sentence.
tokenizer.decode([223, 554, 420, 73]); // -> "this is a sentence"
```
```javascript
// Exports the index to a JSON (.json) file, takes path to file as argument (default: './index.json').
tokenizer.toJSON('./path/to/file.json');
```
```javascript
// Imports an index from a JSON (.json) file, takes path to file as argument (default: './index.json').
tokenizer.fromJSON('./path/to/index.json');
```
