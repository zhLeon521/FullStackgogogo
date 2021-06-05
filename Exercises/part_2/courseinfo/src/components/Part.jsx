/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-06-05 14:51:24
 * @LastEditTime: 2021-06-05 14:53:59
 * @FilePath: \FullStackgogogo\Exercises\part_2\courseinfo\src\components\Part.jsx
 */

import React from 'react';

const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p> 
        )
}
export default Part;