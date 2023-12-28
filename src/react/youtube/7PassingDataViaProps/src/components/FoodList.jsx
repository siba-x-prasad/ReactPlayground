import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <h1>Healthy Food</h1>
       <ul className="list-group">
         {props.foodItems.map(item => <FoodItem key = {item} name = {item}/> )}
     </ul>
    </>
   )
}

export default FoodList;