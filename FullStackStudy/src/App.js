/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-06-05 13:43:25
 * @FilePath: \fullstackgogogo\part1\src\App.js
 */
import React, { useState } from 'react';
import Note from './components/Note'


const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes.map(note => <Note key={note.id} note={note} />)}</li>
      </ul>


    </div >
  )
}




export default App;
