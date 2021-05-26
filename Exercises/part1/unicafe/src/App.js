/*
 * @Description: 小练习
 * @Autor: Blueheart
 * @Date: 2021-05-23 19:15:10
 * @LastEditTime: 2021-05-26 13:45:01
 * @FilePath: \fullstackgogogo\Exercises\part1\unicafe\src\App.js
 */
import React, { useState } from 'react';

// //定义组件的正确位置
const Statistics = (props) => {
  if (props.sum === 0 && props.title === true) {
    return (
      <tr>
        <td>No Feefback Given</td>
      </tr>
    )
  }

  if (props.sum === 0) {
    return (
      <tr>
        <td></td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{props.name}</td><td> { props.category}</td>
    </tr>
    )

  
}

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
      <table>
        <tbody>
          <Statistics title={true} sum={good+bad+neutral } />
          <Statistics name="Good" sum={good + bad + neutral} category={good }/>
          <Statistics name="Bad" sum={good + bad + neutral} category={bad }/>
          <Statistics name="Neutral" sum={good + bad + neutral} category={neutral }/>
          <Statistics name="Average" sum={good + bad + neutral} category={(good - bad) / (good + bad + neutral)*100 +'%'}/>
          <Statistics name="Positive" sum={good + bad + neutral} category={good /  (good + bad + neutral)*100+'%'}/>
        </tbody>
      </table>

    
    </div>
  )
}
export default App;
