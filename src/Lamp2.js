import Schakelen from './Schakelen.js';
import colorSchakelen from './Color.js';
import brightnessSchakelen from './Brightness.js';
import { useState } from 'react';

function Lamp2() {
  const [state, setLed] = useState(false)
  const [color, setColor] = useState("#64eff5")
  const [bright, setBright] = useState(254)
  const lamp = "2";

  return (
    <div style={{ backgroundColor: "lightblue", margin: "20px", width: "630px", height: "150px", padding: "20px" }}>
      <h2>Lamp 2</h2>
      <button onClick={() => Schakelen(lamp, state, color, bright, true, setLed, "lampfotoAanl2", "lampfotoUitl2")} id="btnL2On">Lamp 2 Aan</button>
      <button style={{marginLeft: "20px"}} onClick={() => Schakelen(lamp, state, color, bright, false, setLed, "lampfotoAanl2", "lampfotoUitl2")} id="btnL2Off">Lamp 2 Uit</button>
      <input style={{marginLeft: "20px"}} onChange={() => colorSchakelen(lamp, state, color, bright, "favcolorInputl2", setColor)} type="color" id="favcolorInputl2" name="favcolorInputl2" value="#ff0000"></input>
      <input style={{marginLeft: "20px"}} onChange={() => brightnessSchakelen(lamp, state, color, bright, "brightnessl2", setBright)} type="range" min="50" max="254" id="brightnessl2" step="1"></input>
    </div>
  );
}

export default Lamp2;