/*
 * @Description: 小练习
 * @Autor: Blueheart
 * @Date: 2021-05-23 19:15:10
 * @LastEditTime: 2021-05-23 20:04:50
 * @FilePath: \fullstackgogogo\Exercises\part1\course1\src\App.js
 */
import React from 'react';

const Header = (props) => {
  return (
    <>
      <h1>{ props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props);
  return (
    <>
      <h3>{props.content.name}{props.content.exercises}</h3>
      {/* 等价下面这个操作 */}
      {/* <h3>{props.content[0].name}{props.content[0].exercises}</h3>
      <h3>{props.content[1].name}{props.content[1].exercises}</h3>
      <h3>{props.content[2].name}{props.content[2].exercises}</h3> */}
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part content={props.content[0]}/>
      <Part content={props.content[1]}/>
      <Part content={props.content[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>一共{ props.total[0].exercises+props.total[1].exercises+props.total[2].exercises}课时！</p>
    </>
  )
}


const App = () => {
  const Course = {
    name: "Half Stack Development",
    parts: [
        {
          name: 'React 基础',
          exercises:10,
        },
        {
          name: 'React 进阶',
          exercises:16,
      },
      {
        name: 'React 强化',
        exercises:22,
      }
    ]
  }

  return (
    <>
      <Header course={Course.name} />
      {/* <Part content={Course.parts} /> */}
      <Content content={Course.parts} />
      <Total total={Course.parts}/>

    </>
  )
}
export default App;
