var elvis0 = new Audio();
elvis0.src = "audio/elvis0.mp3"
var elvis1 = new Audio();
elvis1.src = "audio/elvis1.mp3"
var elvis2 = new Audio();
elvis2.src = "audio/elvis2.mp3"
var elvis3 = new Audio();
elvis3.src = "audio/elvis3.mp3"
var elvis4 = new Audio();
elvis4.src = "audio/elvis4.mp3"
var elvisList = [elvis0,elvis1,elvis2,elvis3,elvis4];
var track;

function setup(){
  elvisList[3].play();
  track = 3;
}
window.addEventListener('load', setup);

function mute(){
  for(i=0;i<elvisList.length;i++){
    elvisList[i].muted=true;
  }
}
function unmute(){
  for(i=0;i<elvisList.length;i++){
    elvisList[i].muted=false;
  }
}
function clickPlay(x){;
  for(i=0;i<elvisList.length;i++){
    elvisList[i].pause();
    elvisList[i].currentTime = 0;
  }
  elvisList[x].play();
  track = x;
}

for(i=0;i<elvisList.length;i++){
  elvisList[i].loop = false;
  elvisList[i].addEventListener("ended", function(){
  if(track<elvisList.length-1){
    elvisList[track+1].play();
    track++;
  }else {
    elvisList[0].play();
    track=0;
  }});
}
