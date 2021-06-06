/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-06-06 10:54:58
 * @FilePath: \FullStackgogogo\FullStackStudy\src\index.js
 */
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'


// 格式化chained 方法调用,以一种更易读的方法是将每个调用放在独立的行上:
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data;
    console.log(notes);
    ReactDOM.render(
      <App notes={notes} />,
      document.getElementById('root')
    )
  
})
