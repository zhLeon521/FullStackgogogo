/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-06-05 14:54:27
 * @LastEditTime: 2021-06-05 15:05:19
 * @FilePath: \FullStackgogogo\Exercises\part_2\courseinfo\src\components\Total.jsx
 */

import React from 'react'
const Total = ({course}) => {
    const total = course.parts.reduce((sum, part) => {
        return sum + part.exercises;
    }, 0)

    return (
        <strong>Number of exercises {total}</strong>
    )
    
}

export default Total;
