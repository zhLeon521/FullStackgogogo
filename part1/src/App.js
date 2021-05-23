/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-23 18:58:39
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React from 'react';

const Hello = (props) => {
  return <div>
    <p>Hello, {props.name}！！！you are { props.age} years old。</p>
  </div>
}

// React 组件名称首字母必须大写
const Footer = () => {
  return (
    <div>
      <a href="https://github.com/zhLeon521">zhLeon521</a>
      greeting app created by <a href="https://github.com/zhLeon521">zhLeon521</a>
    </div>
  )
}


const App = () => {
  const name = "Wang Dazhu";
  const age = 22;
  return (
    // 注意 React 组件的内容(通常)需要包含 一个根元素 。 例如，如果我们尝试定义App组件而不使用最外面的div-元素:
    // <div>
    //   <h1>FullStack</h1>
    //   <Hello name="zhLeon521" age={ age}/>
    //   <Hello name={name} age={ 66+33}/>
    //   <Hello name="zhLeon666"/>
    //   <Hello name="zhLeon888" />
      
    //   <Footer/>
    // </div>

    // 由于根元素是必须的，所以在 Dom 树中会有“额外的” div 元素。 这可以通过使用fragments来避免，即用一个空元素来包装组件的返回内容:
    <>
      <h1>FullStack</h1>
      <Hello name="zhLeon521" age={ age}/>
      <Hello name={name} age={ 66+33}/>
      <Hello name="zhLeon666"/>
      <Hello name="zhLeon888" />
      
      <Footer/>
    </>
  )
}

export default App;
