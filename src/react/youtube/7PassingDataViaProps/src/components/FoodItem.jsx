import styles from "./foodItem.module.css";

const FoodItem = ({foodItem, bought, handleBuyButtonClicked}) => {

  console.log(styles);
  return (
    <> <li key={foodItem}  className={`list-group-item ${styles['sp-item']} list-group-item ${bought ? 'active' : 'list-group-item'}`}>
    <span className={styles.spSpan}>{foodItem}</span>
    <button className={`${styles.btnBuy} btn btn-info`}
    onClick={handleBuyButtonClicked}
    >Buy</button>
    </li> 
    </>
  );
}

export default FoodItem;