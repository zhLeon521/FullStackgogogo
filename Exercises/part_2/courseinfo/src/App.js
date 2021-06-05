/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-06-05 14:23:32
 * @LastEditTime: 2021-06-05 15:14:20
 * @FilePath: \FullStackgogogo\Exercises\part_2\courseinfo\src\App.js
 */
import React from 'react';
import Course from './components/Course';

const App = () => {

    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]



    return courses.map((course) => {
        return <Course key={course.id} course={course} />

    })
}
export default App;