/*
 * @Description: 小练习
 * @Autor: Blueheart
 * @Date: 2021-05-23 19:15:10
 * @LastEditTime: 2021-05-26 13:22:55
 * @FilePath: \fullstackgogogo\Exercises\part1\unicafe\src\App.js
 */
import React, { useState } from 'react';


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
  

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
  }
  const handleNeutralClick =() => {
    setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <h1>statistics</h1>
     Good {good}
     Bad  {bad}
     Neutral {neutral}
    
    </div>
  )
}
export default App;
