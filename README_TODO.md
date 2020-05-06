# GitHub Pages
## To publish it
Run the following command:
````bash
rodrigomattososilveira@Rodrigos-MBP-2[~/projects/react_todo]
$ yarn deploy
````
## To view it
Navigate to: [GitHub pages](https://rodrigomattososilveira.github.io/react_todo/)

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

# Step 3 - Todo list component
It takes handler methods for the `TodoItem`, and array of todo objects through props. The component itself contains one `div` wrapper element:
- Inside this div will be a list, one ul element with a map() to iterate over the array of todo objects, and create one `li` element with one `TodoItem` component for each todo object, passing the individually `Todo` components to the `TodoItem` component, along with handler methods.

# Step 4 - Todo form component
We use useState and useRef React hooks:
- `useRef` - Captures a reference to the `input` element; used to reset the `input` element value after the enter key is pressed;
- `useState` - Captures the `input` element value when the user navigates outside the `input` element;

The input element has two handler methods
- onChange - Handles the event of navigating outside the `input` element; we want to preserve is value;
- onKeyPress - Handles a `keypress` event, looking for the `enter` key so that we can create a new element;

# Step 5 - Main (index) component
We are almost done. There is just one component you need to build, the `TodoListApp` component; it implements methods for creating, updating, removing and completing our todos using `handleTodoCreate`, `handleTodoUpdate`, `handleTodoRemove` and `handleTodoComplete` methods respectively.

We also use this component as our `todo store`, via the `useState` React hook. So, let’s build this component, step by step.

## Imports
First, as usually, we import the React dependencies, including the `render` method from `react-dom` so that we can render the `TodoListApp` component, our todo list app, in the DOM.

WE also import `TodoForm` and `TodoList` components so you can later return, and render, them. When WE import these components WE also import the main external CSS stylesheet, so WE can later style our `todo list` app.

## Creating todo list app state
The app state is an array of objects, with each object representing one `todo`, which is initialized to an empty array. Notice how we use the `useState` hook to help us with this.

## Creating new todos
We use the `handleTodoCreate` method, which takes one parameter, a `todo object`. We do not operate on the app state; instead we create a new app state, create a new todo item, add it to the new app state, and then reset the app state with the new app state.

## Update an existing todo
We use the `handleTodoUpdate` method, which takes one parameter the todo item `id`. Again, we create a working app state, operate on it, and then use it to set a new app state.

## Remove an existing todo
We use the `handleTodoRemove` method, which takes one parameter the todo item `id`. Again, we create a working app state, operate on it, and then use it to set a new app state.

## Completing an existing todo
We use the `handleTodoComplete` method, which takes one parameter the todo item `id`. Again, we create a working app state, operate on it, and then use it to set a new app state.

## Ensuring the todo item has a title
We use the `handleTodoBlur` method and add/remove CSS classes to provide a visual notification to the user;

## Returning all components
Our todo list app is almost finished. Now, we now need to take all the components you’ve built so far, and imported in component, and return them. Make sure to provide all components with necessary props. After that, we can use the render() method and render the TodoListApp in the DOM.
# styles
Just add a little markup
# The render
# Next Steps
## Add a header
A simple header at the top
## Add filters
The solution has the following elements:
- A VisibilityFilter Component, below the todo list, showing 3 options: all (default), open, done;
- A state property, `visibilityFilter`, implemented as a `React hook`, in `index.tsx` and used to capture the current `visibilityFilter`;
- A refactored `TodoListInterface` to pass the `visibilityFilter` prop to the `TodoList` Component;
- A function, `computeVisible`, in the `TodoList` component to compute a class name to (show / hide) a todo item based on its  state (open / done) and the visibility criteria;
- Two CSS classes, `show-todo-item` and `hide-todo-item`, added to `styles.css`, to show/hide todo list items, based on their state (open / done) and the visibility criteria;
