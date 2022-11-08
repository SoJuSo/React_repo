import './App.css';
import React from 'react';
import Hello from './Hello.js';

function App() {
  const name = '김석주';
  const style = {
    backgroundColor : 'yellow',
    color : 'red',
    fontSize: 60,
    padding: '1rem'
  };
  return (
    <>
      {/*주석 with 중괄호*/}
      <Hello name = {name} />
      <div style={style}>{name}</div>
      <div className = "box">안녕히계세요</div>
    </>
  );
}

export default App;
