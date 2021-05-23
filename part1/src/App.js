/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-23 20:18:22
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React from 'react';

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  }

  
  return (
    <div>
      <p>Hello, {props.name}！！！you are {props.age} years old。</p>
      <p> So, you were probably born in { bornYear() }</p>
  </div>
  )
}



const App = () => {
  const name = "Wang Dazhu";
  const age = 22;
  return (
    <>
      <h1>FullStack</h1>
      <Hello name="zhLeon521" age={ age}/>
      <Hello name={name} age={ age }/>
    </>
  )
}

export default App;
