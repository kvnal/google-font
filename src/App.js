import { useState } from 'react';
import WebFont from 'webfontloader';
import './App.css';



function App() {
  const setFont = (fontName) => {
    WebFont.load({
      google: {
        families: [fontName, 'Droid Serif']
      }
    });
    return setFontName(fontName);
  };


  var [fontName, setFontName] = useState("Inter");

  return (
    <div className="container">
      <div>

      <div className="output">
        <p style={{ fontFamily: fontName }}>
          hello
      </p>
      </div>
      <div className="input">
        <input type="text" onChange={(e) => setFont(e.target.value)} />
      </div>
      </div>

    </div>
  );
}

export default App;
