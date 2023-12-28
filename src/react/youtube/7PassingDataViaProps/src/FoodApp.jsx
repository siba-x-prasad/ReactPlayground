import FoodList from "./components/FoodList";
import ErrorScreen from "./components/ErrorScreen";

function FoodApp() {
  let foodItems = ["Dal", "Green Vegetable", "fruit", "Milk", "Egg", "Ghee", "Curd", "Meat"];  
  let emptyFoodItems = [];
  let listItems = emptyFoodItems
  return (
    <>
     { listItems.length == 0 ? <ErrorScreen/> : <FoodList foodItems={listItems}/>}
      
    </>
   )
}

export default FoodApp;
