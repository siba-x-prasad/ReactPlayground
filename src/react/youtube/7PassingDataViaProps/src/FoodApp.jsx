import FoodList from "./components/FoodList";
import ErrorScreen from "./components/ErrorScreen";
import './FoodApp.css'
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function FoodApp() {

  const [foodState, setFoodState]  = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [foodList, setFoodList]  = useState(['salad', 'dal', 'milk'])
 
  const onFoodInputChange = (event) => {
    console.log(event.target.value);
    setFoodState(event.target.value);
    if (foodState.trim().length !== 0) {
      setErrorMessage("");
    }
  };

  const handleAddButtonClicked = () => {
      if (foodState.trim().length !== 0) {
        let newFoodItem = foodState;
        let newFoodItems = [...foodList, newFoodItem];
        setFoodList(newFoodItems);
      } else {
        setErrorMessage("Please enter Healthy Food Item");
      }
  }

  const onKeyDown = (event) => {
    console.log("onKeyDown = "+event.target.innerText == "");
    if (event.key == "Enter") {
      if (foodState.trim().length !== 0) {
          let enteredFood = event.target.value;
          console.log("onKeyDown = "+enteredFood +" "+enteredFood == "");
          let newFoodItem = enteredFood;
          setFoodState(newFoodItem);
          event.target.value = ""
          let newFoodItems = [...foodList, newFoodItem];
          setFoodList(newFoodItems);
      } else {
          setErrorMessage("Please enter Healthy Food Item");
      }
    } 
  };

  let foodItems = ["Dal", "Green Vegetable", "fruit", "Milk", "Egg", "Ghee", "Curd", "Meat"]; 
  let listItems = foodItems
  return (
    <>
    <Container>
      <FoodInput 
      onFoodInputChange = {onFoodInputChange} 
      handleAddButtonClicked = {handleAddButtonClicked}
      handleKeyDown = {onKeyDown}
      />
       {errorMessage.trim().length !== 0 && ( <div className="alert alert-danger sp-error">{errorMessage}</div>)}
     
      <p>{foodState}</p>
     { listItems.length == 0 ? <ErrorScreen/> : <FoodList foodItems={foodList}/>}

    
     </Container>

     <Container>
        Above is the list of healthy foods that are good for 
        your health and 
        well being.
     </Container>
    </> 
   )
}

export default FoodApp;
