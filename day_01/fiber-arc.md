## 4. Fiber Architecture

Starting with React 16, a complete rewrite of the core algorithm introduced the **Fiber architecture**. This system allows React to handle rendering more flexibly and efficiently.

### What is a Fiber?

A _Fiber_ is an internal data structure that holds information about a component, its state, props, and pointers to its child, parent, and sibling. The entire component tree is represented by a tree of Fiber objects.

### Asynchronous Rendering

Fiber breaks down the rendering work into smaller, interruptible chunks. This allows React to prioritize important updates, such as user input, while deferring less critical background tasks.

### Scheduling and Prioritizing

Fiber enables React to manage and schedule tasks based on their priority. This prevents long-running, synchronous updates from freezing the browser and ensures a smoother, more responsive user experience, especially with animations.
