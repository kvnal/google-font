import { useState } from 'react';
import WebFont from 'webfontloader';
import './App.css';


const placeholder = "Type Google Font Name Here..."
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
            • Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, odio officiis ducimus iure aliquid commodi aperiam repellendus tenetur, ipsa totam vel, eius eveniet inventore laborum. Ipsa numquam enim molestiae! Aperiam!
      </p>
        </div>
        <div className="input">
          <input type="text" placeholder={placeholder} onChange={(e) => setFont(e.target.value)} />
          <span>Try <strong> "Inter" </strong>,<strong> "Abril Fatface" </strong>, <strong> "Pattaya" </strong> or <a href="https://fonts.google.com/">More.</a></span>
        </div>
      </div>

    </div>
  );
}

export default App;
