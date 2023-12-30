import styles from './FoodInput.module.css';

const FoodInput = ({onFoodInputChange, handleKeyDown, handleAddButtonClicked}) => {
return <>
  <input 
        className={styles.foodInput} 
        type="text" 
        placeholder='Enter Food Item'
        onChange={(event) => onFoodInputChange(event)}
        onKeyDown={(event) => {handleKeyDown(event)}}
    />
    <button 
        className={`${styles.btnAdd} btn btn-info`}
        onClick={handleAddButtonClicked}>Add</button>
</>
}

export default FoodInput;