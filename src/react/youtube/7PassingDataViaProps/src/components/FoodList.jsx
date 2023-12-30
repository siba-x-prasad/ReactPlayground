import { useState } from "react";
import FoodHeader from "./FooHeader";
import FoodItem from "./FoodItem";

const FoodList = (props) => {

  const [activeItems, setActiveItems] = useState([]);

  const handleBuyButtonClicked = (event, foodItem) => {
    console.log(`Clicked ${foodItem} ${activeItems.includes(foodItem)}`)

    if (activeItems.includes(foodItem)) {
        const index = activeItems.indexOf(foodItem);
        console.log(`Clicked index ${index}`)


        let arr = activeItems.filter(function(item) {
          return item !== FoodItem
        });

        setActiveItems(arr);

        if (index > -1) { // only splice array when item is found
          activeItems.splice(index, 1); // 2nd parameter means remove one item only
          console.log(`Clicked After remove ${activeItems.length}`)
          // setActiveItems(activeItems);
        }
    } else {
      let newFoodItems = [...activeItems, foodItem];
      setActiveItems(newFoodItems);
    }
  }

  return (
    <>
      <FoodHeader/>
      <center>
        <ul className="list-group spList">
          {props.foodItems.map(
            item => <FoodItem
                         key = {item} 
                         foodItem = {item} 
                         handleBuyButtonClicked = {(event) => handleBuyButtonClicked(event, item)}
                         bought = {activeItems.includes(item)}
                         /> )}
        </ul>
     </center>
    </>
   )
}

export default FoodList;