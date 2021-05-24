/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-24 20:17:31
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React, { useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const increaseByOne  = () => { 
    console.log("Clicked increaseByOne");
    setCounter(counter + 1);
  }

  const decreaseByOne  = () => { 
    console.log("Clicked decreaseByOne");
    setCounter(counter - 1);
  }

  const setToZero = () => {
    console.log("Clicked setToZero");
    setCounter(0)
  }

  const Display = (props) => {
    return (
      <div>
        {props.counter}
      </div>
    )
  }


  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )

  }
  
  
  return (
    <>
      <Display counter={ counter}></Display>
      <Button handleClick={increaseByOne}
        text='plus'
      />
      <Button handleClick={decreaseByOne}
        text='minus' />
      
      <Button handleClick={setToZero}
      text='zero'/>

    </>
  )
}

export default App;
