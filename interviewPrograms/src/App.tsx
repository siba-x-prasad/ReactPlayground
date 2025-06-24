import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Counter from './counterProgram/Counter';
 import MyTextChanger from './textChanger/MyTextChanger';
import ShowHideComponent from './showHide/ShowHideComponent';
import ShowPostsList from './networkCall/ShowPostsList';  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <Counter />
        <MyTextChanger />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          </div>        
          <ShowHideComponent />

        <ShowPostsList />
      </div>
    </>
  )
}

export default App
