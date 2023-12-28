import './App.css'

function AppWithConditionalRendering() {
  let foodItems = ["Dal", "Green Vegetable", "fruit", "Milk", "Egg", "Ghee", "Curd", "Meat"]; 
let emptyMessage = foodItems.length == 0 ? <h3>I am still Hungry</h3> : null
  return (
   <>
    {/* {emptyMessage} */}
    {foodItems.length == 0 && <h3>I am still Hungry</h3>}
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map(item => <li key={item} className="list-group-item">{item}</li>)}
    </ul>
   </>
  )
}

export default AppWithConditionalRendering;
