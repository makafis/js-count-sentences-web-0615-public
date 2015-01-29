---
languages: javascript
tags: strings, functions
---

# Count Sentences

## Description 

Write a function and set the function equal to the variable `countSentences`. The function should accpet a string such as "JavaScript has many testing frameworks. Some popular ones are Mocha and Jasmine." and returns the number of sentences. In this case it would be `2`.

## Examples

Your code should account for sentences ended by periods:

```javascript
countSentences("Lorem ipsum dolor sit amet. Id varius risus magna at dui.")
// => 2
```

Your code should account for question marks:

```javascript
countSentences("Morbi gravida purus diam? Non lacinia velit scelerisque at? Tempus libero sed?")
// => 3
```

Your code should account for exclamation points:

```javascript
countSentences("Praesent varius purus ex! Suspendisse potenti!")
// => 2
```

You code should account for combinations:

```javascript
countSentences("Mauris auctor lacus! Sed pulvinar enim ac velit cursus cursus? Class aptent taciti.")
// => 3
```

It should return 0 when given an empty string:

```javascript
countSentences("")
// => 0
```

## Resources

* [MDN](https://developer.mozilla.org/) - [JavaScript Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
