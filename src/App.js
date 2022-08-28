import { useState } from 'react';
import './App.css';

const App = () => {

  const [text, setText] = useState("");
  const [bg, setBg] = useState("#ffffff");
  const [color, setColor] = useState("#000");
  const [qr, setQr] = useState("");

  const generate = () => {
    if(text.length <= 0) return;
    const url = encodeURI(`https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=100x100&bgcolor=${bg.slice(1)}&color=${color.slice(1)}`)
    setQr(url)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Generate QR code
        </p>

        <input
        placeholder='Value'
        value={text}
        onChange={e => {setText(e.target.value)}}
        />

        <input
        type='color'
        value={bg}
        onChange={e => {setBg(e.target.value)}}
        />

        <input 
        type='color'
        value={color}
        onChange={e => {setColor(e.target.value)}}
        />

        <button
        onClick={generate}>Generate</button>

        <img
        src={qr}
        />

      </header>
    </div>
  );
}

export default App;
