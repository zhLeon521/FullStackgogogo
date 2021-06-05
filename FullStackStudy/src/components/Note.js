/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-06-05 13:36:37
 * @LastEditTime: 2021-06-05 13:43:34
 * @FilePath: \fullstackgogogo\part1\src\components\Note.js
 */

import React from 'react';
const Note = ({ note }) => {
    return (
        <li>
            {note.content}
        </li >
    )
}
export default Note;