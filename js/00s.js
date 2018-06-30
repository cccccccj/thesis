var brit0 = new Audio();
brit0.src = "audio/brit0.mp3"
var brit1 = new Audio();
brit1.src = "audio/brit1.mp3"
var brit2 = new Audio();
brit2.src = "audio/brit2.mp3"
var brit3 = new Audio();
brit3.src = "audio/brit3.mp3"
var brit4 = new Audio();
brit4.src = "audio/brit4.mp3"
var britList = [brit0,brit1,brit2,brit3,brit4];
var trackB;

function setup(){
  britList[4].play();
  trackB = 4;
}
window.addEventListener('load', setup);

function mute(){
  for(i=0;i<britList.length;i++){
    britList[i].muted=true;
  }
}
function unmute(){
  for(i=0;i<britList.length;i++){
    britList[i].muted=false;
  }
}
function clickPlay(x){;
  for(i=0;i<britList.length;i++){
    britList[i].pause();
    britList[i].currentTime = 0;
  }
  britList[x].play();
  trackB = x;
}

for(i=0;i<britList.length;i++){
  britList[i].loop = false;
  britList[i].addEventListener("ended", function(){
  if(trackB<britList.length-1){
    britList[trackB+1].play();
    trackB++;
  }else {
    britList[0].play();
    trackB=0;
  }});
}
