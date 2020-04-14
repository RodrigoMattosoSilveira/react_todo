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
The first thing to do is create interfaces for our todo list app. We will use them to define the shape of component props and the todo object, or to type them.

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

# Step 2 - Todo item components
We use the `todo item component` to model `todo items` in our `todo list`. It has three elements:
- An element to control whether the item is done; it consists of a div, with two spans, one for when it is not done and another when it is done; the div wrapper has an onClick handler to check/uncheck the todo, which is passed by a prop;
- An element to show the todo item text; it includes an input element to render the todo content, which is the simplest way to make it editable; the div wrapper has an onChange handler to update the todo; it also contains an onBlur handler; both handlers are passed as props;
- An element to remove the todo item; it will be also a div, now with “x” entity/icon; this div will have one onClick handler; as with all the previous data, and handler methods, this too will be passed thorough props.

Import the `TodoItemInterface` interface from `interfaces.ts` and to use it to type props of this component. After this, type the onChange handler on input element with React.ChangeEvent<HTMLInputElement> because we are attaching onChange handler to input element.
