/** @format */

import React, {
  useState,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useContext,
} from "react";
import "./AppleDesign.css";
import "./ReactHooks.css";

// Context for demonstrating useContext
const ThemeContext = React.createContext();

// Reducer for useReducer example
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter(
        (todo) => todo.id !== action.payload
      );
    default:
      return state;
  }
};

// Custom hook for window size
const useWindowSize = () => {
  const [size, setSize] = useState({
    width:
      typeof window !== "undefined"
        ? window.innerWidth
        : 0,
    height:
      typeof window !== "undefined"
        ? window.innerHeight
        : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return size;
};

// Custom hook for local storage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(
    () => {
      try {
        if (
          typeof window !== "undefined" &&
          window.localStorage
        ) {
          const item =
            window.localStorage.getItem(key);
          return item
            ? JSON.parse(item)
            : initialValue;
        }
        return initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    }
  );

  const setValue = (value) => {
    try {
      setStoredValue(value);
      if (
        typeof window !== "undefined" &&
        window.localStorage
      ) {
        window.localStorage.setItem(
          key,
          JSON.stringify(value)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default function ReactHooks() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: "⚛️" },
    { id: "useState", title: "useState", icon: "🔄" },
    {
      id: "useEffect",
      title: "useEffect",
      icon: "⚡",
    },
    {
      id: "useReducer",
      title: "useReducer",
      icon: "🎯",
    },
    {
      id: "useCallback",
      title: "useCallback",
      icon: "📌",
    },
    { id: "useMemo", title: "useMemo", icon: "🧠" },
    { id: "useRef", title: "useRef", icon: "🔗" },
    {
      id: "useContext",
      title: "useContext",
      icon: "🌐",
    },
    {
      id: "custom",
      title: "Custom Hooks",
      icon: "🛠️",
    },
  ];

  return (
    <div className="react-hooks-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">React Hooks</h1>
          <p className="hero-subtitle">
            Master modern React development with
            powerful hooks for state management and
            side effects
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="section-nav">
        <div className="container">
          <div className="nav-tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-tab ${
                  activeSection === section.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveSection(section.id)
                }
              >
                <span className="tab-icon">
                  {section.icon}
                </span>
                <span className="tab-title">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="content-sections">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  React Hooks Fundamentals
                </h2>
                <p className="section-subtitle">
                  Learn how to use React hooks to build
                  modern, functional components
                </p>
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    🔄
                  </div>
                  <h3 className="feature-title">
                    State Management
                  </h3>
                  <p>
                    Use useState and useReducer to
                    manage component state efficiently
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    ⚡
                  </div>
                  <h3 className="feature-title">
                    Side Effects
                  </h3>
                  <p>
                    Handle side effects like API calls
                    and subscriptions with useEffect
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    🧠
                  </div>
                  <h3 className="feature-title">
                    Performance
                  </h3>
                  <p>
                    Optimize performance with useMemo,
                    useCallback, and useRef
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    🌐
                  </div>
                  <h3 className="feature-title">
                    Context & Refs
                  </h3>
                  <p>
                    Share data across components and
                    access DOM elements directly
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* useState Section */}
        {activeSection === "useState" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  useState Hook
                </h2>
                <p className="section-subtitle">
                  Manage local component state with the
                  useState hook
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Counter Example</h3>
                  <div className="hook-demo">
                    <CounterExample />
                  </div>
                  <code>
                    const [count, setCount] =
                    useState(0);
                  </code>
                </div>

                <div className="card">
                  <h3>Form Input Example</h3>
                  <div className="hook-demo">
                    <FormInputExample />
                  </div>
                  <code>
                    const [input, setInput] =
                    useState("");
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* useEffect Section */}
        {activeSection === "useEffect" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  useEffect Hook
                </h2>
                <p className="section-subtitle">
                  Handle side effects in functional
                  components
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Window Size Tracker</h3>
                  <div className="hook-demo">
                    <WindowSizeTracker />
                  </div>
                  <code>
                    useEffect(() =&gt; &#123; ...
                    &#125;, []);
                  </code>
                </div>

                <div className="card">
                  <h3>API Call Example</h3>
                  <div className="hook-demo">
                    <ApiCallExample />
                  </div>
                  <code>
                    useEffect(() =&gt; &#123;
                    fetchData(); &#125;, []);
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* useReducer Section */}
        {activeSection === "useReducer" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  useReducer Hook
                </h2>
                <p className="section-subtitle">
                  Manage complex state logic with
                  reducers
                </p>
              </div>

              <div className="grid grid-1">
                <div className="card">
                  <h3>Todo List with useReducer</h3>
                  <div className="hook-demo">
                    <TodoListWithReducer />
                  </div>
                  <code>
                    const [todos, dispatch] =
                    useReducer(todoReducer, []);
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* useCallback Section */}
        {activeSection === "useCallback" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  useCallback Hook
                </h2>
                <p className="section-subtitle">
                  Memoize functions to prevent
                  unnecessary re-renders
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Optimized Callback</h3>
                  <div className="hook-demo">
                    <OptimizedCallback />
                  </div>
                  <code>
                    const handleClick = useCallback(()
                    =&gt; &#123; ... &#125;, []);
                  </code>
                </div>

                <div className="card">
                  <h3>Dependency Array</h3>
                  <div className="hook-demo">
                    <DependencyExample />
                  </div>
                  <code>
                    const handleClick = useCallback(()
                    =&gt; &#123; ... &#125;,
                    [dependency]);
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* useMemo Section */}
        {activeSection === "useMemo" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  useMemo Hook
                </h2>
                <p className="section-subtitle">
                  Memoize expensive calculations
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Expensive Calculation</h3>
                  <div className="hook-demo">
                    <ExpensiveCalculation />
                  </div>
                  <code>
                    const result = useMemo(() =&gt;
                    expensiveFunction(input), [input]);
                  </code>
                </div>

                <div className="card">
                  <h3>Object Memoization</h3>
                  <div className="hook-demo">
                    <ObjectMemoization />
                  </div>
                  <code>
                    const memoizedObject = useMemo(()
                    =&gt; (&#123; ... &#125;), []);
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* useRef Section */}
        {activeSection === "useRef" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  useRef Hook
                </h2>
                <p className="section-subtitle">
                  Access DOM elements and persist
                  values between renders
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>DOM Reference</h3>
                  <div className="hook-demo">
                    <DomReference />
                  </div>
                  <code>
                    const inputRef = useRef(null);
                  </code>
                </div>

                <div className="card">
                  <h3>Previous Value</h3>
                  <div className="hook-demo">
                    <PreviousValue />
                  </div>
                  <code>
                    const prevValue = useRef(value);
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* useContext Section */}
        {activeSection === "useContext" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  useContext Hook
                </h2>
                <p className="section-subtitle">
                  Share data across component trees
                  without prop drilling
                </p>
              </div>

              <div className="grid grid-1">
                <div className="card">
                  <h3>Theme Context Example</h3>
                  <div className="hook-demo">
                    <ThemeContextExample />
                  </div>
                  <code>
                    const theme =
                    useContext(ThemeContext);
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Custom Hooks Section */}
        {activeSection === "custom" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Custom Hooks
                </h2>
                <p className="section-subtitle">
                  Create reusable logic with custom
                  hooks
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>useLocalStorage Hook</h3>
                  <div className="hook-demo">
                    <LocalStorageExample />
                  </div>
                  <code>
                    const [value, setValue] =
                    useLocalStorage("key",
                    initialValue);
                  </code>
                </div>

                <div className="card">
                  <h3>useWindowSize Hook</h3>
                  <div className="hook-demo">
                    <WindowSizeExample />
                  </div>
                  <code>
                    const &#123; width, height &#125; =
                    useWindowSize();
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// Example Components
function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-counter">
      <h4>Count: {count}</h4>
      <div className="button-group">
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

function FormInputExample() {
  const [input, setInput] = useState("");

  return (
    <div className="demo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        className="demo-input"
      />
      <p>You typed: {input}</p>
    </div>
  );
}

function WindowSizeTracker() {
  const { width, height } = useWindowSize();

  return (
    <div className="demo-window-size">
      <p>Window Size:</p>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

function ApiCallExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setData("Data loaded successfully!");
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="demo-api">
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  );
}

function TodoListWithReducer() {
  const [todos, dispatch] = useReducer(
    todoReducer,
    []
  );
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  return (
    <div className="demo-todo">
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo..."
          className="demo-input"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={
              todo.completed ? "completed" : ""
            }
          >
            <span
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TODO",
                  payload: todo.id,
                })
              }
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: todo.id,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OptimizedCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="demo-callback">
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

function DependencyExample() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const updateGreeting = useCallback(() => {
    setGreeting(`Hello, ${name}!`);
  }, [name]);

  return (
    <div className="demo-dependency">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="demo-input"
      />
      <button onClick={updateGreeting}>
        Update Greeting
      </button>
      <p>{greeting}</p>
    </div>
  );
}

function ExpensiveCalculation() {
  const [number, setNumber] = useState(1);

  const expensiveResult = useMemo(() => {
    // Simulate expensive calculation
    let result = 0;
    for (let i = 0; i < number * 1000000; i++) {
      result += i;
    }
    return result;
  }, [number]);

  return (
    <div className="demo-memo">
      <input
        type="number"
        value={number}
        onChange={(e) =>
          setNumber(parseInt(e.target.value) || 1)
        }
        className="demo-input"
      />
      <p>Result: {expensiveResult}</p>
    </div>
  );
}

function ObjectMemoization() {
  const [count, setCount] = useState(0);

  const memoizedObject = useMemo(
    () => ({
      count,
      timestamp: Date.now(),
      random: Math.random(),
    }),
    [count]
  );

  return (
    <div className="demo-object-memo">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>
        Object:{" "}
        {JSON.stringify(memoizedObject, null, 2)}
      </p>
    </div>
  );
}

function DomReference() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="demo-ref">
      <input
        ref={inputRef}
        type="text"
        placeholder="This input will be focused"
        className="demo-input"
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

function PreviousValue() {
  const [value, setValue] = useState("");
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  });

  return (
    <div className="demo-prev-value">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type to see previous value"
        className="demo-input"
      />
      <p>Current: {value}</p>
      <p>Previous: {prevValue.current}</p>
    </div>
  );
}

function ThemeContextExample() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`demo-theme ${theme}`}>
        <h4>Current Theme: {theme}</h4>
        <button
          onClick={() =>
            setTheme(
              theme === "light" ? "dark" : "light"
            )
          }
        >
          Toggle Theme
        </button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`themed-box ${theme}`}>
      <p>This component uses the theme context</p>
      <p>Theme: {theme}</p>
    </div>
  );
}

function LocalStorageExample() {
  const [value, setValue] = useLocalStorage(
    "demo-input",
    ""
  );

  return (
    <div className="demo-local-storage">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="This value persists in localStorage"
        className="demo-input"
      />
      <p>Value: {value}</p>
      <button onClick={() => setValue("")}>
        Clear
      </button>
    </div>
  );
}

function WindowSizeExample() {
  const { width, height } = useWindowSize();

  return (
    <div className="demo-window-size-hook">
      <p>Window dimensions from custom hook:</p>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
