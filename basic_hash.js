function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(hash("cyan", 10));

// NOTE
// PROBLEMS: this only hashes strings and it's not constant time
