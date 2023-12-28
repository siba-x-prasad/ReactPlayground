import styles from "./foodItem.module.css";

const FoodItem = (props) => {
  console.log(styles);
  return (
    <> <li key={props.name}  className={`list-group-item ${styles['sp-item']}`}>
    <span className={styles.spSpan}>{props.name}</span>
    </li> 
    </>
  );
}

export default FoodItem;