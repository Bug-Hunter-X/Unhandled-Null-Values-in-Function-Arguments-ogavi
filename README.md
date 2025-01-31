# Unhandled Null Values in Function Arguments

This repository demonstrates a common yet subtle bug in JavaScript: unexpected behavior when null values are passed as function arguments. The `foo` function in `bug.js` silently exits when a null value is encountered, which might be unexpected and lead to hard-to-debug issues.

The `bugSolution.js` file provides a solution by explicitly checking for null values and throwing an error or handling them appropriately.