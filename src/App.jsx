import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', textAlign: 'center', padding: '20px' }}>
      <h1>Change bg color by click</h1>
      <div style={{marginTop:"500px"}}>
        <button style={{ backgroundColor: 'green', border: '2px solid pink', marginRight:"10px", padding:"5px", borderRadius:"20px" }} onClick={() => setBgColor('green')}>Green</button>
        <button style={{ backgroundColor: 'grey', border: '2px solid lightblue', marginRight:"10px", padding:"5px", borderRadius:"20px" }} onClick={() => setBgColor('grey')}>Grey</button>
        <button style={{ backgroundColor: 'red', border: '2px solid lightgreen', marginRight:"10px", padding:"5px", borderRadius:"20px" }} onClick={() => setBgColor('red')}>Red</button>
        <button 
          style={{ border: '2px solid white', padding:"5px", borderRadius:"20px" }} 
          onClick={() => setBgColor('white')}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;