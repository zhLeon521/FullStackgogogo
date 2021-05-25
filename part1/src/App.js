/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-25 23:25:19
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React, { useState} from 'react';

const App = () => {

  const [clicks, setClicks] = useState({
    left:0,right:0
  })

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }
  




  
  
  return (
    <>
      
      {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Left</button>
      {clicks.right}

    </>
  )
}

export default App;
