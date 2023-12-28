function Hello(){
  let name = "Sibaprasad";
  let number = 1234;
  let fullname = () => {
    return name + " Mohanty"
  }

  return <h3>{number} This is dynamic component, I am : {fullname()}</h3>
}

export default Hello;