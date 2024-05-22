# camelcaseify

A library to convert labels to camel case format.

## Installation

### Using npm

```bash
npm install camelcaseify
```

### Using jsr

```bash
npx jsr add @adg/camel-caseify
``` 

## Usage

Here is an example of how to use camelcaseify in your project:

```
import { camelCaseify } from 'camelcaseify';


console.log(camelCaseify('hello world')); // Output: helloWorld
console.log(camelCaseify('Hello World')); // Output: helloWorld
console.log(camelCaseify('hello_world')); // Output: helloWorld
console.log(camelCaseify('Hello-World')); // Output: helloWorld
console.log(camelCaseify('some label with spaces')); // Output: someLabelWithSpaces
console.log(camelCaseify('another_example-with-mixed_separators')); // Output: anotherExampleWithMixedSeparators
console.log(camelCaseify(' Leading spaces and symbols')); // Output: leadingSpacesAndSymbols
console.log(camelCaseify('-starting-with-dash')); // Output: startingWithDash
console.log(camelCaseify('123numbers at the start')); // Output: 123numbersAtTheStart
console.log(camelCaseify('ends with 123numbers')); // Output: endsWith123numbers
```
