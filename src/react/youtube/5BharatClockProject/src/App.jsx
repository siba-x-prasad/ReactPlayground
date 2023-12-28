import BharatClockDateTime from "./components/BharatClockDateTime"
import BharatClockDesc from "./components/BharatClockDesc"
import BharatClockTitle from "./components/BharatClockTitle" 
import "./styles/App.css"

function App() {

  return <center>
    <BharatClockTitle/>
    <BharatClockDesc/>
    <BharatClockDateTime/>
  </center>
}

export default App;
