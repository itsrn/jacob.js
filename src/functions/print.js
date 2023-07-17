function print(message) {
  if (typeof message !== "string") {
    throw new Error(
      "Invalid usage of print function. Message should be a string."
    );
  }

  console.log(message);
}

module.exports = print;
