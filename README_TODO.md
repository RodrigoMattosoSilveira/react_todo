# Application structure
When we are done, it will be:

```
react_todo
├─node_modules
├─public
│ ├─favicon.ico
│ ├─index.html
│ ├─manifest.json
│ └─robots.txt
├─src
│ ├─components
│ │ ├─todo-form.tsx
│ │ ├─todo-item.tsx
│ │ └─todo-list.tsx
│ ├─styles
│ │ └─styles.css
│ ├─index.tsx
│ ├─interfaces.ts
│ └─react-app-env.d.ts
├─ package.json
└─ tsconfig.json
```

# Step 1 - Add Interfaces
The application file structure, whe
The first thing to do is create interfaces for your todo list app. You will use them to define the shape of component props and the todo object, or to type them.

You will need to create four interfaces.
- todo (todo object): IT has three properties
  - id
  - text
  - isCompleted
- todo form - its props contain
  - array of todo objects
  - handleTodoCreate method
- todo list - its props will contain
  - handleTodoUpdate
  - handleTodoRemove
  - handleTodoComplete
  - handleTodoBlur methods
  - array of todo objects
- todo item - its props contain
  - handleTodoUpdate
  - handleTodoRemove
  - handleTodoComplete
  - handleTodoBlur
  - single todo object.


  react-hooks-todo-list-app-ts/
├─node_modules
├─public
│ ├─favicon.ico
│ ├─index.html
│ ├─manifest.json
│ └─robots.txt
├─src
│ ├─components
│ │ ├─todo-form.tsx
│ │ ├─todo-item.tsx
│ │ └─todo-list.tsx
│ ├─styles
│ │ └─styles.css
│ ├─index.tsx
│ ├─interfaces.ts
│ └─react-app-env.d.ts
├─ package.json
└─ tsconfig.json
