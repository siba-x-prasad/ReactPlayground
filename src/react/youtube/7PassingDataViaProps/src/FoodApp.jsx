import FoodList from "./components/FoodList";
import ErrorScreen from "./components/ErrorScreen";
import './FoodApp.css'

function FoodApp() {
  let foodItems = ["Dal", "Green Vegetable", "fruit", "Milk", "Egg", "Ghee", "Curd", "Meat"];  
  let emptyFoodItems = [];
  let listItems = foodItems
  return (
    <>
     { listItems.length == 0 ? <ErrorScreen/> : <FoodList foodItems={listItems}/>}
      
    </>
   )
}

export default FoodApp;
