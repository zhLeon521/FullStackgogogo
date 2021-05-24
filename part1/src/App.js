/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-24 19:47:45
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React, { useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const increaseByOne  = () => { 
    console.log("Clicked increaseByOne");
    setCounter(counter + 1);
  }

  const setToZero = () => {
    console.log("Clicked setToZero");
    setCounter(0)
  }
  
  
  return (
    <>
      <div> {counter} </div>
      <button onClick={increaseByOne}>
        Plus</button>
      <button onClick={setToZero}>
        Zero</button>
    </>

  )
  
}

export default App;
