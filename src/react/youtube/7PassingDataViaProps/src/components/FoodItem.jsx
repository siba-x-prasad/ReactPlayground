const FoodItem = (props) => {
  return <> <li key={props.name} className="list-group-item">{props.name}</li> </>;
}

export default FoodItem;