import Schakelen from './Schakelen.js';
import colorSchakelen from './Color.js';
import brightnessSchakelen from './Brightness.js';
import { useState } from 'react';

function Lamp3() {
  const [state, setLed] = useState(false)
  const [color, setColor] = useState("#jje555")
  const [bright, setBright] = useState(254)
  const lamp = "3";

  return (
    <div style={{ backgroundColor: "lightblue", margin: "20px", width: "630px", height:"150px", padding: "20px"}}>
      <h2>Lamp 3</h2>
      <button onClick={() => Schakelen(lamp,state,color,bright,true,setLed, "lampfotoAanl3", "lampfotoUitl3")} id="btnL3On">Lamp 3 Aan</button>
      <button style={{marginLeft: "20px"}} onClick={ ()=>Schakelen(lamp,state,color,bright,false,setLed, "lampfotoAanl3", "lampfotoUitl3")} id="btnL3Off">Lamp 3 Uit</button>
      <input style={{marginLeft: "20px"}} onChange={ ()=>colorSchakelen(lamp,state,color,bright, "favcolorInputl3", setColor)} type="color" id="favcolorl3" name="favcolorl3" value="#ff0000"></input>
      <input style={{marginLeft: "20px"}} onChange={ ()=>brightnessSchakelen(lamp,state,color,bright, "brightnessl3", setBright)} type="range" min="50" max="254" id="brightnessl3" step="1"></input>
    </div>
  );
}

export default Lamp3;