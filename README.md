# TypeScript Array Mutation Bug

This repository demonstrates a subtle bug in TypeScript related to array mutation within a forEach loop. The issue arises when trying to modify the array being iterated over using methods like `push`, `pop`, `splice` etc.

The `bug.ts` file contains the buggy code.  The `bugSolution.ts` provides a corrected version.  The core problem is that TypeScript's type system can't accurately track changes made to an array in-place during iteration with forEach.  This is because forEach operates on a snapshot of the array at the start of the loop. Solutions involve using a for loop or alternative methods that explicitly handle such mutations.