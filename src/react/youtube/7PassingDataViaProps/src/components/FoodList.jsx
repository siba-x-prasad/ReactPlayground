import FoodHeader from "./FooHeader";
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <FoodHeader/>
       <ul className="list-group">
         {props.foodItems.map(item => <FoodItem key = {item} name = {item}/> )}
     </ul>
    </>
   )
}

export default FoodList;