# Coding Programs
Tier 1: Core Fundamentals (Entry-Level / Junior Roles)
These questions test your basic understanding of components, state, props, and rendering. You should be able to solve these quickly and cleanly.

## 1. Build a Counter Component
The Challenge: Create a component with a number displayed and two buttons: one to increment the number and one to decrement it.
What it Tests:
useState hook for managing state.
Event handling (onClick).
Basic component structure and JSX.
Why it's Asked: This is the "Hello World" of interactive React. It's a quick, simple check to see if you understand the absolute basics of state and user interaction.
Follow-up: Add a "Reset" button or an input field to set the count directly.
## 2. Create a Controlled Input Field
The Challenge: Build a component with an <input> field. As the user types, display the text they are typing somewhere else on the page in real-time.
What it Tests:
The concept of a "controlled component".
Using useState to hold the input's value.
The onChange event handler.
Why it's Asked: Handling form inputs is a fundamental part of almost every web application. This shows you understand how to sync a component's state with a DOM element's value.
## 3. Show/Hide an Element (Toggler)
The Challenge: Create a button that, when clicked, toggles the visibility of a paragraph or a <div> on the page.
What it Tests:
useState with a boolean value (true/false).
Conditional Rendering using the ternary operator (condition ? <A /> : <B />) or logical AND (condition && <A />).
Why it's Asked: UI is often dynamic. This tests your ability to render different content based on the component's state.
Tier 2: Intermediate Concepts (Mid-Level Roles)
These questions involve data, side effects, and more complex state structures. They test your ability to build more realistic application features.

## 4. Fetch and Display Data from an API
The Challenge: When a component mounts, fetch a list of items (e.g., posts, users) from a public API like https://jsonplaceholder.typicode.com/ and display them in a list.
What it Tests:
useEffect hook to perform a side effect.
Correctly using the dependency array [] to run the effect only once on mount.
Asynchronous JavaScript (async/await or .then()).
Handling loading and error states. A good solution will show a "Loading..." message while fetching and an "Error..." message if the fetch fails.
Why it's Asked: This is the single most common task in frontend development. It demonstrates your ability to interact with a backend and handle the entire lifecycle of a data request.
## 5. Build a To-Do List
The Challenge: Create a full To-Do list application. It should have:
An input field to add new tasks.
A list showing all tasks.
A way to mark tasks as complete (e.g., a checkbox that adds a strikethrough).
A way to delete tasks.
What it Tests:
Managing state as an array of objects.
Rendering lists using .map().
The importance of the key prop in lists.
State immutability: Correctly updating the state array without direct mutation (using spread syntax [...oldState, newItem] or methods like filter and map).
Passing functions as props down to child components (e.g., passing handleDelete to a <TodoItem> component).
Why it's Asked: This is the classic "CRUD" (Create, Read, Update, Delete) exercise in React. It combines state management, list rendering, and event handling into one cohesive feature. It's a great test of your overall competence.
## 6. Implement a Search Filter for a List
The Challenge: Given a list of items (can be hardcoded or fetched), add a search input. As the user types in the search input, the list should filter in real-time to only show items that match the search term.
What it Tests:
Managing multiple state variables (useState for the original list and useState for the search query).
Derived state: Filtering the list based on state during the render, not creating a separate state variable for the filtered list.
String manipulation (.toLowerCase(), .includes()).
Why it's Asked: It shows you can build responsive UIs that react instantly to user input and efficiently manage how data is derived and displayed.
Tier 3: Advanced & Architectural (Senior Roles)
These questions test your knowledge of performance, architecture, and advanced React patterns. They're about writing code that is not just working, but also scalable and maintainable.

## 7. Create a Reusable Custom Hook
The Challenge: Take the logic from the "Fetch and Display Data" question (Question #4) and extract it into a custom hook called useFetch. The component should then use the hook like this: const { data, loading, error } = useFetch(url);.
What it Tests:
Deep understanding of Hooks as reusable, stateful logic.
Custom hook conventions (naming it use...).
How to return values (data, loading, error) from a hook.
Why it's Asked: Custom hooks are the primary way to share logic and avoid code duplication in modern React. This demonstrates that you can think in terms of composition and reusability, a key senior-level skill. Other common custom hook challenges include useLocalStorage or useDebounce.
## 8. Implement a Theme Switcher using Context API
The Challenge: Build a small app with a button in the header. When the button is clicked, the theme of the entire application should switch between "light" and "dark" (e.g., background and text colors change). Do this without "prop drilling".
What it Tests:
The Context API (createContext, Provider, useContext).
Understanding of global state vs. local state.
How to structure an app with a top-level provider.
Why it's Asked: It tests your knowledge of React's built-in solution for managing state that needs to be accessed by many components at different levels in the component tree.
## 9. Optimize a Slow-Rendering Component
The Challenge: The interviewer presents you with a component that re-renders unnecessarily, causing performance issues. For example, a parent component's state updates, causing a complex, memoized child component to re-render even though its props haven't changed. You need to identify the issue and fix it.
What it Tests:
React.memo to prevent re-renders of components with the same props.
useCallback to memoize functions passed as props, preventing child components from re-rendering.
useMemo to memoize expensive calculations.
Your ability to debug using the React DevTools Profiler.
Why it's Asked: Writing performant React applications is a critical skill for senior developers. This shows you understand why and when re-renders happen and how to apply the correct optimization tools.
## 10. Refactor a Component from useState to useReducer
The Challenge: You are given a component with complex state logic managed by multiple useState calls (e.g., a multi-step form with loading, error, and data states). Your task is to refactor it to use the useReducer hook.
What it Tests:
Understanding the useReducer hook.
How to write a reducer function and dispatch actions.
Knowing when useReducer is a better choice than useState (for co-located, complex state transitions).
Why it's Asked: This demonstrates a deeper knowledge of React's state management hooks and your ability to choose the right tool for the job to make state logic more predictable and maintainable.