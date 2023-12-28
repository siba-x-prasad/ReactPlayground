function AddToDo() {
  return (
  <div className="container text-center">
  <div className="row sp-row">
    <div className="col-6">
      <input type="text" placeholder="ENter TODO here"/>
    </div>
    <div className="col-4"><input type="date" placeholder="Enter TODO here"/></div>
    <div className="col-2">
      <button type="button" className="btn btn-success sp-button">Add</button>
    </div>
  </div>
  </div>
  )
}
export default AddToDo;