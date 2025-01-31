function foo(a, b) {
  if (a === null || b === null) {
    return;
  }
  // ...
}

foo(null, 1); // This won't throw an error, but might be unexpected behavior.
foo(1, null); // This also won't throw an error, but might be unexpected behavior.