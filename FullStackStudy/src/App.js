/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-06-05 20:33:54
 * @FilePath: \FullStackgogogo\FullStackStudy\src\App.js
 */
import React, { useState } from 'react';
import Note from './components/Note'

// 传参数，不是传解构{props}
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState(
    '新建一个Note……'
  );
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    //  event.preventDefault() 方法，它会阻止提交表单的默认操作
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote(" ") //调用 newNote 状态的 setNewNote 函数重置受控input元素的值:
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }
  // 添加一个状态，用于同步应该显示哪些便笺:
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)




  return (
    <div>
      <h1>Notes</h1>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote}
          onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>

    </div >
  )
}
export default App;
