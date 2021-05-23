/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-23 18:52:46
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React from 'react';

const Hello = (props) => {
  return <div>
    <p>Hello, {props.name}！！！you are { props.age} years old。</p>
  </div>
}


const App = () => {
  const name = "Wang Dazhu";
  const age = 22;
  return (
    <div>
      <h1>FullStack</h1>
      <Hello name="zhLeon521" age={ age}/>
      <Hello name={name} age={ 66+33}/>
      <Hello name="zhLeon666"/>
      <Hello name="zhLeon888"/>
    </div>
  )
}

export default App;
