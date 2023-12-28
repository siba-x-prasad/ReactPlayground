function ToDoItem2() {

  let itemName = "Buy Apple"
  let date = "31/12/2023"
  return (
    <div className="container text-center">
     <div className="row sp-row">
    <div className="col-6">{itemName}</div>
    <div className="col-4">{date}</div>
    <div className="col-2">
      <button type="button" className="btn btn-danger sp-button">Delete</button>
    </div>
  </div>
    </div>
    )
}

export default ToDoItem2;