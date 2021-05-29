import calculateXY from './Calculate'

function Brightness(lamp, state, color, bright, brightnessId, setBright) {

  bright = document.getElementById(brightnessId).value;
  setBright(bright)

  var ip = '10.198.120.60'
  var bridge = 'QScScRGIUH581BZOxzAoTrW76rN38GfgXd9QIFyz';
  fetch(`http://${ip}/api/${bridge}/lights/${lamp}/state`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "on": state, "hue": 10000, "xy": calculateXY(color), "bri": parseInt(bright), "sat": "254" }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('succes', data);
    })
    .catch((error) => {
      console.error('Error', error);
    });
}

export default Brightness;