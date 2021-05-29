function Calculate(colorHex) {
    console.log(colorHex)
    var color = colorHex.substring(1)
  
    var red = `0x${color.substring(0, 2)}`
    var green = `0x${color.substring(2, 4)}`
    var blue = `0x${color.substring(4, 6)}`
  
    red = red.toString(16)
    green = green.toString(16)
    blue = blue.toString(16)
  
    red = red / 255;
    green = green / 255;
    blue = blue / 255;
    var r = red > 0.04045 ? Math.pow(((red + 0.055) / 1.055), 2.4000000953674316) : red / 12.92;
    var g = green > 0.04045 ? Math.pow(((green + 0.055) / 1.055), 2.4000000953674316) : green / 12.92;
    var b = blue > 0.04045 ? Math.pow(((blue + 0.055) / 1.055), 2.4000000953674316) : blue / 12.92;
    var x = r * 0.664511 + g * 0.154324 + b * 0.162028;
    var y = r * 0.283881 + g * 0.668433 + b * 0.047685;
    var z = r * 8.8E-5 + g * 0.07231 + b * 0.986039;
    var xy = [x / (x + y + z), y / (x + y + z)];
    if (isNaN(xy[0])) {
      xy[0] = 0.0;
    }
  
    console.log(xy);
    return xy;
  }
  
  export default Calculate;