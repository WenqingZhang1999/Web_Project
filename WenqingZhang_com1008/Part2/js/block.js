window.onload=function(){
  document.getElementById("Bar").onclick=function(){
      
      print("3",440,240,context);
      print("1.5",540,390,context);
      print("0",630,550,context);
      print("4",720,140,context);
      print("0.5",810,490,context);
      print("1",890,440,context);
      print("3",970,240,context);
      print("1h",350,455,context);
      print("2h",350,355,context);
      print("3h",350,255,context);
      print("4h",350,155,context);
      print("5h",350,55,context);
      print("06/12/2020",420,570,context);
      print("07/12/2020",515,570,context);
      print("08/12/2020",602,570,context);
      print("09/12/2020",695,570,context);
      print("10/12/2020",785,570,context);
      print("11/12/2020",865,570,context);
      print("12/12/2020",945,570,context);
      border();
      drawBar(430,250,50,300,context);
      drawBar(520,400,50,150,context);
      drawBar(700,150,50,400,context);
      drawBar(790,500,50,50,context);
      drawBar(870,450,50,100,context);
      drawBar(950,250,50,300,context);
  }
}

// draw bars and write the date and the figures

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
function border(){
  context.strokeStyle = "rgb(257,233,257)";
  context.lineWidth = "5";
  context.beginPath();
      context.lineTo(650,1000);
      context.moveTo(650,3050);
      context.lineTo(625,3050);
      context.moveTo(650,5050);
      context.lineTo(0,3050);
      context.moveTo(0,5050);
  context.stroke();
}
function drawBar(x, y, width, height, context){
  context.fillStyle=diffC();
  context.fillRect(x,y, width, height);
  //use the function of random colour

}
function diffC(){
  let r = Math.random()*256;
  let g = Math.random()*256;
  let b = Math.random()*256;
  var randomNum = "rgb(" + r + "," + g + "," + b + ")";
  return randomNum;
}
//random the colours

function print(content, x, y,context){
  content.font = "1000px sans-serif";
  context.fillStyle="rgb(0,0,0)";
  context.fillText(content, x, y);
}
// set the colour as blank








