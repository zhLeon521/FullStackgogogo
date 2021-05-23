/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-23 20:49:35
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React from 'react';


// bornYear函数是Hello函数内部定义的 Component helper functions【组件辅助函数】

const Hello = ({name,age}) => { //终极版：传递给组件的props现在直接解构为变量 name 和 age。
  // 方法一：解构
  // const name = props.name;
  // const age = props.age;

  // 方法2
  // 表达式 const { name, age } = props 会将值 'Wang Dazhu' 赋值给 name，22赋值给 age。
  // const { name, age } = props;

  const bornYear = () => new Date().getFullYear() - age; //紧凑写法
  // 等价于
  // const bornYear = () => {
  //   return new Date().getFullYear() - age;
  // }
  return (
    <div>
      <p>Hello, {name}！！！you are {age} years old。</p>
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
