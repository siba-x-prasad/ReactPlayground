import styles from './CalculatorApp.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'
import { useState } from 'react'

function CalculatorApp() {

  const [calVal, setCalVal] = useState('');

  const onButtonClick = (buttonName) => {
    console.log('onButtonClick '+buttonName);

    if (buttonName === "C") {
       setCalVal('');
    } else if (buttonName === "=") {
        const result = eval(calVal);
        setCalVal(result);
    } else {
        const newValue = calVal + buttonName;
        setCalVal(newValue);
    }
  }

return <div className={styles.calculator}>
    <Display displayValue = {calVal}/>
    <ButtonContainer onButtonClick = {onButtonClick}/>
</div> 
 
}

export default CalculatorApp;
