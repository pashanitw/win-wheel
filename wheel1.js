/**
 * Created by space on 8/2/15.
 */
var arr=[
   "pasha",
    "shaik",
    "ammi"
];
var radius=100;
var cx=cy=150;
var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
drawSegments();

function drawSegments(){
    var basicAngle=(Math.PI*2)/arr.length;
    var startAngle=0;
    var endAngle=0;
    arr.forEach(function(name,index){
      //  if(index!=0) return;
        endAngle=startAngle+basicAngle;
      draw(startAngle,endAngle,name);
        startAngle=endAngle;
    })
}
function draw(startAngle,endAngle,name){
   console.log(startAngle,endAngle);
    context.save();
    context.moveTo(cx,cy);
    context.beginPath();
    context.arc(cx,cy,radius,startAngle,endAngle);
    context.lineTo(cx,cy);
    context.closePath();
    context.stroke();
    /* Fill Text*/
    context.save();
    context.translate(cx,cy);
    context.rotate((startAngle+endAngle)/2);
    context.font="20px Georgia";
    context.fillStyle = '#000000';
    context.fillText(name,20,0);
    context.restore();
    context.restore();
}