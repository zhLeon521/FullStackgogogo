/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-06-05 14:37:23
 * @LastEditTime: 2021-06-05 15:11:31
 * @FilePath: \FullStackgogogo\Exercises\part_2\courseinfo\src\components\Course.jsx
 */

import React from 'react';
import Content from './Content';
import Header from './Header';
import Total from './Total';

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Total course={course} />
            <Content course={course} />
   
        </>
    )
}

export default Course;

