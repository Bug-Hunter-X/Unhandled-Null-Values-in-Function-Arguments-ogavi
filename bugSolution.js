function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  // ...
}

foo(1, 2); // Works as expected.
try {
  foo(null, 1);
} catch (error) {
  console.error(error.message); // Catches the error.
}
try {
  foo(1, null);
} catch (error) {
  console.error(error.message); // Catches the error.
} 