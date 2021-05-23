/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-23 18:44:00
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React from 'react';

const App = () => {
  console.log('Hello from conponents!');

  const now = new Date();
  const a = 199;
  const b = 999;
  return (
    <div>
      {now.toString()};
      <p>Hello， zhLeon521！！ </p>
      {a} plus {b} is {a+b}
    </div>
  )
}

export default App;
