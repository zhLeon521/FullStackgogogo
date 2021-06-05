/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-06-05 15:07:14
 * @LastEditTime: 2021-06-05 15:12:40
 * @FilePath: \FullStackgogogo\Exercises\part_2\courseinfo\src\components\Content.jsx
 */
import React from 'react';
import Part from './Part';

const Content = ({ course }) => {
    return(
        <div>
            {
                course.parts.map((part) => {
                   return <Part
                        key={part.id}
                        part={part}
                    />
                })
            }
            
        </div>
    )
}

export default Content;