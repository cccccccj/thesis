var whit0 = new Audio();
whit0.src = "audio/whit0.mp3"
var whit1 = new Audio();
whit1.src = "audio/whit1.mp3"
var whit2 = new Audio();
whit2.src = "audio/whit2.mp3"
var whit3 = new Audio();
whit3.src = "audio/whit3.mp3"
var whit4 = new Audio();
whit4.src = "audio/whit4.mp3"
var whitList = [whit0,whit1,whit2,whit3,whit4];
var trackW;

function setup(){
  whitList[1].play();
  trackW = 1;
}
window.addEventListener('load', setup);

function mute(){
  for(i=0;i<whitList.length;i++){
    whitList[i].muted=true;
  }
}
function unmute(){
  for(i=0;i<whitList.length;i++){
    whitList[i].muted=false;
  }
}

function clickPlay(x){;
  for(i=0;i<whitList.length;i++){
    whitList[i].pause();
    whitList[i].currentTime = 0;
  }
  whitList[x].play();
  trackW = x;
}

for(i=0;i<whitList.length;i++){
  whitList[i].loop = false;
  whitList[i].addEventListener("ended", function(){
  if(trackW<whitList.length-1){
    whitList[trackW+1].play();
    trackW++;
  }else {
    whitList[0].play();
    trackW=0;
  }});
}
