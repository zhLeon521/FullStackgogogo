/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-26 00:03:58
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React, { useState} from 'react';

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks,setAll] = useState([]) 

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      ) 
    }
    return (
      <div>
        button press history: {props.allClicks.join('  ')}
      </div>
    )
  }
  

  return (
    <>
      
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Left</button>
      {right}
      <History allClicks={allClicks}/>

    </>
  )
}

export default App;
