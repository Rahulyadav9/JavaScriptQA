### **Basic Questions**

#### **1. What Is React?**
React is a JavaScript library developed by Facebook for building user interfaces. It is component-based and uses a virtual DOM for fast updates.

---

#### **2. What Are Components in React?**
Components are reusable, independent pieces of UI in a React application. They can be functional or class-based.

---

#### **3. What Is JSX?**
JSX stands for **JavaScript XML**. It allows you to write HTML-like syntax directly in JavaScript.

Example:
```jsx
const element = <h1>Hello, World!</h1>;
```

---

#### **4. What Is the Virtual DOM?**
The virtual DOM is a lightweight representation of the real DOM. React updates the virtual DOM first, calculates the changes, and then efficiently updates the real DOM.

---

#### **5. What Are Props?**
Props (short for properties) are used to pass data from a parent to a child component.

Example:
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

---

#### **6. What Is State in React?**
State is a local, mutable data store managed within a component.

Example:
```jsx
const [count, setCount] = useState(0);
```

---

### **Intermediate Questions**

#### **7. What Are React Hooks?**
Hooks are functions that let you use state and lifecycle features in functional components (e.g., `useState`, `useEffect`).

---

#### **8. What Is the Difference Between `useEffect` and `useLayoutEffect`?**
- **`useEffect`**: Runs after the DOM update.
- **`useLayoutEffect`**: Runs synchronously after rendering but before the browser paints the UI.

---

#### **9. What Is Context API?**
The Context API provides a way to pass data (like themes or user information) deeply without prop drilling.

Example:
```jsx
const ThemeContext = React.createContext();
```

---

#### **10. What Are Higher-Order Components (HOCs)?**
HOCs are functions that take a component as input and return a new component with added functionality.

Example:
```javascript
const withLogging = (WrappedComponent) => (props) => {
  console.log("Logging props", props);
  return <WrappedComponent {...props} />;
};
```

---

#### **11. What Is React.memo?**
`React.memo` is a higher-order component that prevents re-rendering if props haven't changed.

---

#### **12. What Are Keys in React?**
Keys are unique identifiers used to improve rendering performance in lists.

Example:
```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

---

### **Advanced Questions**

#### **13. What Are Render Props?**
A technique where a function is passed as a prop to control component rendering.

Example:
```jsx
<Mouse render={(mouse) => <h1>The mouse is at {mouse.x}, {mouse.y}</h1>} />
```

---

#### **14. How Does Reconciliation Work?**
Reconciliation is the process React uses to update the DOM by comparing the current and previous virtual DOM.

---

#### **15. What Is Lazy Loading?**
Lazy loading allows components to load only when needed using `React.lazy` and `Suspense`.

Example:
```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

---

#### **16. What Is Redux?**
Redux is a state management library that centralizes the application's state in a global store.

---

#### **17. How Does `useReducer` Work?**
`useReducer` is an alternative to `useState` for complex state logic.

Example:
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

---

#### **18. What Are Error Boundaries?**
Error boundaries are components that catch JavaScript errors in their child components.

---

#### **19. What Is the Purpose of `React.StrictMode`?**
`React.StrictMode` highlights potential issues in an application and helps ensure best practices.

---

#### **20. What Are Portals in React?**
Portals allow rendering a child component outside the parent DOM hierarchy.

Example:
```jsx
ReactDOM.createPortal(<Child />, document.getElementById('portal-root'));
```

---

#### **21. Explain Prop Drilling and How to Avoid It.**
Prop drilling happens when props are passed through multiple layers of components. It can be avoided using **Context API** or **state management libraries**.

---

#### **22. What Are Controlled and Uncontrolled Components?**
- **Controlled**: Input elements controlled by React state.
- **Uncontrolled**: Input elements that manage their own state using refs.

---

#### **23. What Is Server-Side Rendering (SSR)?**
SSR generates the HTML on the server instead of the client, improving SEO and performance.

---

#### **24. What Are Concurrent Features in React?**
React’s concurrent features allow rendering updates without blocking the main thread.

---

#### **25. Explain React Fiber.**
React Fiber is the reimplementation of the React core algorithm, improving rendering performance.
