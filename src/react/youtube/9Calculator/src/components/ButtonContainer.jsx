import styles from './ButtonContainer.module.css'

const ButtonContainer = ({onButtonClick}) => {

let buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

return <div className={styles.buttonsCalculator}>

{buttonNames.map(item => 
  <button className={styles.button} key={item} onClick={() =>onButtonClick(item)}>{item}</button>
  )}
</div>
}

export default ButtonContainer;