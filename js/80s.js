var mich0 = new Audio();
mich0.src = "audio/mich0.mp3"
var mich1 = new Audio();
mich1.src = "audio/mich1.mp3"
var mich2 = new Audio();
mich2.src = "audio/mich2.mp3"
var mich3 = new Audio();
mich3.src = "audio/mich3.mp3"
var mich4 = new Audio();
mich4.src = "audio/mich4.mp3"
var michList = [mich0,mich1,mich2,mich3,mich4];
var trackM;

function setup(){
  michList[2].play();
  trackM = 2;
}
window.addEventListener('load', setup);

function mute(){
  for(i=0;i<michList.length;i++){
    michList[i].muted=true;
  }
}
function unmute(){
  for(i=0;i<michList.length;i++){
    michList[i].muted=false;
  }
}
function clickPlay(x){;
  for(i=0;i<michList.length;i++){
    michList[i].pause();
    michList[i].currentTime = 0;
  }
  michList[x].play();
  trackM = x;
}

for(i=0;i<michList.length;i++){
  michList[i].loop = false;
  michList[i].addEventListener("ended", function(){
  if(trackM<michList.length-1){
    michList[trackM+1].play();
    trackM++;
  }else {
    michList[0].play();
    trackM=0;
  }});
}
