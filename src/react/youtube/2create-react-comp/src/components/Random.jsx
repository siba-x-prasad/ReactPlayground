function Random(){
  let number = Math.random() * 100;
return <h1 style={{'background-color': '#ff0000'}}>This is a arandom Number: {Math.round(number)}</h1>
}

export default Random;