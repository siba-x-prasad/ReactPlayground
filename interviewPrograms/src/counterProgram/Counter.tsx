// src/components/Counter.tsx

// No need to import React if you're not using React.createElement directly (in modern React)
// The `useState` import is all you need.
import { useState } from 'react';

// This is a functional component. Its type is React.FC (Functional Component)
// but it's often simpler to just let TypeScript infer it.
const Counter = () => {
    // TypeScript infers that 'count' is a number because you initialized it with 0.
    // This is equivalent to writing: const [count, setCount] = useState<number>(0);
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    
    const decrement = () => {
        setCount(count - 1);
    };
    
    // The return type is automatically inferred as JSX.Element
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    ); 
}

export default Counter;