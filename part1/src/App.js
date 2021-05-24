/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-24 19:45:24
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React, { useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const handleClick = () => { 
    console.log("Clicked");
    setCounter(counter + 1);

  }
  
  
  return (
    <>
      <div> {counter} </div>
      <button onClick={handleClick}>Plus</button>
      <button onClick={()=>setCounter(0)}>Zero</button>
    </>

  )
  
}

export default App;
