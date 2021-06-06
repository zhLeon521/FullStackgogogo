/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-06-05 13:36:37
 * @LastEditTime: 2021-06-05 15:48:59
 * @FilePath: \FullStackgogogo\FullStackStudy\src\components\Note.js
 */

import React from 'react';
const Note = ({ note }) => {
    return (
        <>
            <li>
                {note.content}
            </li>
        </>
    )
}
export default Note;