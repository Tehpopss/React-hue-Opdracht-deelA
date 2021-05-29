import Schakelen from './Schakelen.js';
import colorSchakelen from './Color.js';
import brightnessSchakelen from './Brightness.js';
import { useState } from 'react';

function Lamp1() {
  const [state, setLed] = useState(false)
  const [color, setColor] = useState("#34ebe5")
  const [bright, setBright] = useState(254)
  const lamp = "1";

  return (
    <div style={{ backgroundColor: "lightblue", margin: "20px", width: "630px", height: "150px", padding: "20px" }}>
      <h2>Lamp 1</h2>
      <button onClick={() => Schakelen(lamp, state, color, bright, true, setLed, "lampfotoAanl1", "lampfotoUitl1")} id="btnL1On">Lamp 1 Aan</button>
      <button style={{marginLeft: "20px"}} onClick={() => Schakelen(lamp, state, color, bright, false, setLed, "lampfotoAanl1", "lampfotoUitl1")} id="btnL1Off">Lamp 1 Uit</button>
      <input style={{marginLeft: "20px"}} onChange={() => colorSchakelen(lamp, state, color, bright, "favcolorInputl1", setColor)} type="color" id="favcolorInputl1" name="favcolorInputl1" value="#ff0000"></input>
      <input style={{marginLeft: "20px"}} onChange={() => brightnessSchakelen(lamp, state, color, bright, "brightnessl1", setBright)} type="range" min="50" max="254" id="brightnessl1" step="1"></input>
    </div>
  );
}

export default Lamp1;