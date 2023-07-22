# Jacob Programming Language (AKA jacob.js)
Jacob is a (kind-of) programming language that is built with JavaScript and allows you to perform basic operations and execute scripts.

### ⛔ Warning
Currently, Jacob is still under development and I don't know when it will be done. Currently, the version *may not* work as expected, and there could be errors and bugs. Please report them through the issues tab if you found any.

## Installation

You can install the Jacob stable version through NPM:

```shell
npm install -g jacob.js
```
Or install it through the development github branch (not stable):

```shell
npm install -g "https://github.com/itsrn/jacob.js.git#development"
```

## Getting started
To run a Jacob script file, use the jacob command followed by the path to the script file:

```shell
jacob path/to/script.jacob
```

### Syntax
In Jacob, there are two types of things:
- Functions, which looks like this: `#function[arguments]`
- And variables, which looks like this: `$variable()` (no arguments)

Instead of using a function for something that only returns a value and doesn't do anything (like getting the current hour number) we use variables.

### Log statement
The log statement is used to display messages on the console:
```jacob
#log[Hello World!]
```
Which by running the jacob code will give us the output:
```
Hello World!
```
The arguments for this function are the following:
- First argument: 
  - The string that will be logged to the console.
- Second argument:
  - "uppercase" or "lowercase". Sends the message to the console as that option.
- Third argument:
  - One of the following colors: "blue", "red", "yellow". Sends the message as that color.

### Time
The time statements are used to get the current time parameters:

- `$hour()`: Gets the current hour.
- `$minutes()`: Gets the current minutes (without 0 at the start).
- `$seconds()`: Gets the current seconds.

## Examples
The examples are available in the [examples folder](/examples/).

## Contributing
Contributions are welcome! If you find any issues or want to add new features, please submit a pull request.

## License
This project is licensed under the [MIT License](/LICENSE).