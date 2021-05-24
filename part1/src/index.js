/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-23 16:58:39
 * @LastEditTime: 2021-05-24 19:26:06
 * @FilePath: \fullstackgogogo\part1\src\index.js
 */
import ReactDOM from 'react-dom';
import App from './App';

let counter = 1;

const refresh = () => {
  ReactDOM.render(
    <App counter={counter}/>,
    document.getElementById('root')
  );
}

setInterval(() => {
  refresh()
  counter  += 1
}, 1000)







