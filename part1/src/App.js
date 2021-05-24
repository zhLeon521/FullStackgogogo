/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-24 19:33:42
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React, { useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  console.log("rendering……",counter);
  
  
  return (
    <div>
      {counter}
    </div>)
  
}

export default App;
