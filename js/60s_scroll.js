var canvas=document.getElementById('canvas-60');
var c=canvas.getContext("2d");
var background60 = new Image();
background60.src = 'img/60_background.jpg'
var leftPic60 = new Image();
leftPic60.src = 'img/60_record1.png'
var rightPic60 = new Image();
rightPic60.src = 'img/60_record2.png'
var middlePicL60 = new Image();
middlePicL60.src = 'img/60_record3.png'
var middlePicR60 = new Image();
middlePicR60.src = 'img/60_record4.png'
var elvis60= new Image();
elvis60.src='img/60_elvis_sofa.png'

var setup=0;
window.onload =function(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  draw60(0,0,innerWidth,innerHeight,0);

  window.addEventListener("resize", function(){ draw60(0,0,innerWidth,innerHeight,0); });

  console.log(innerWidth,innerHeight);
  var handleScroll = function(evt){
  			var delta = evt.wheelDelta ? evt.wheelDelta/1000 : 0;
        console.log(setup,delta);
        if(setup<=0&&delta<=0){
          delta = 0;
        }else{
          setup=setup+delta;
        }

        draw60(0,0,innerWidth,innerHeight,delta)

  }
  canvas.addEventListener('DOMMouseScroll',handleScroll,false);
  canvas.addEventListener('mousewheel',handleScroll,false);

  function draw60(x,y,width,height,scaleChange) {
      c.clearRect(0,0,width,height);
      c.translate(-scaleChange/2*width, -scaleChange/4*height);
      c.scale(1+scaleChange,1+scaleChange);
      c.drawImage(background60,x,y,width,height);
      // c.drawImage(background60,x,y,width,height);
      c.drawImage(leftPic60,x+width/40,y+height/5,width/6,height/3);
      c.drawImage(rightPic60,x+width-width/40-width/6,y+height/5,width/6,height/3);
      c.drawImage(middlePicL60,x+width/4,y+height/5,width/8.5,height/4.7);
      c.drawImage(middlePicR60,x+width-width/4-width/8.5,y+height/5,width/8.5,height/4.7);
      c.fillStyle = 'black';
      c.fillRect(x+width/2-width/9.4, y+height/5, width/4.7, height/4.7);
      // draw70()
      c.drawImage(elvis60,x+width/1.8,y+height/3,width/5.5,height/1.8);
  };
}
