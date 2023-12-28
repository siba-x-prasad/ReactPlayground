
function BharatClockDateTime() {
let time = new Date();
  return(
    <h2>This is the current Date And Time {time.toLocaleDateString()} {" - "} {time.toLocaleTimeString()}</h2>
  )
}

export default BharatClockDateTime;