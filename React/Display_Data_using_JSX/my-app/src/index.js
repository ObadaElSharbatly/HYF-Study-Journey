import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import moduleName from './';

const babyNames = objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))
function Counter() {
  const [count, setCount] = useState(0)
  const feedBack = count > 10 ?  "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <Count result = {count}/>
      <p> {feedBack} </p>
      <Button set = {setCount} count={count} />

    </div>
  );
}

function Count (params) {

  return (
    <div>
      <p className="result">{params.result}</p>
    </div>
  )
}


function Button ({set, count}) {

  function addOne () {
    set(count + 1) 
  }
  return (
    <div>
      <button onClick={addOne}>Add 1!</button>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Counter />, rootElement);
