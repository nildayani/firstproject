import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {

  let [cnt, setcnt] = useState(0);
  let [item, setitem] = useState(0)

  const memfun = useMemo(function test() {
    console.log("CNT : " + (cnt * 10))
  }, [cnt])

  return (
    <div className='App'>
      <h1>CNT: {cnt}</h1>
      <h1>ITEM: {item}</h1>
      {memfun}
      <input type='button' value='CNT' onClick={() => { setcnt(cnt + 1) }}></input>
      <input type='button' value='ITEM' onClick={() => { setitem(item + 1) }}></input>
    </div>
  );
}

export default App;
