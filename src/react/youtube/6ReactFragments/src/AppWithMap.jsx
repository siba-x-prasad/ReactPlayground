import './App.css'

function AppWithMap() {
  let foodItems = ["Dal", "Green Vegetable", "fruit", "Milk", "Egg", "Ghee", "Curd", "Meat"]; 
  let emptyFoodArray = [];

  if (emptyFoodArray.length == 0) {
    return <h3>I am still Hungry</h3>
  }

  return (
   <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map(item => <li key={item} className="list-group-item">{item}</li>)}
    </ul>
   </>
  )
}

export default AppWithMap;
