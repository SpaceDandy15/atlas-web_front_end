This is a short summary of what I learned and practiced for this project.
1: Lexical scoping means that the scope of a variable is determined by its position in the source code. A function has access to variables from its own scope and from the parent (enclosing) scopes.
2: A closure is a function that "remembers" the variables from its lexical scope even when it is executed outside that scope.
3: Closures are used in Javascript for Encapsulation, Data hiding, and creating factory functions. Also, one can chain multiple closures by returning functions from functions.
4: JavaScript does not have built-in private variables, but closures can be used to create them.
5: JavaScript uses a call stack to manage function execution.
Execution order:
1️⃣ first() is pushed onto the stack.
2️⃣ second() is called from first().
3️⃣ third() is called from second().
4️⃣ third() finishes execution and is popped off the stack.
5️⃣ second() finishes execution and is popped off.
6️⃣ first() finishes execution and is popped off.

Takeaway: JavaScript follows Last In, First Out (LIFO) execution.

6: A callback is a function passed as an argument to another function, to be executed later.