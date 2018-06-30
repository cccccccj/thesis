$(function() {
  $('.aero-70').hover(function() {
    $('#aero-toggle-70').removeClass('unshow');
  }, function() {
    $('#aero-toggle-70').addClass('unshow');
  });
});
$(function() {
  $('.drum-70').hover(function() {
    $('.drum-toggle-70').removeClass('unshow');
  }, function() {
    $('.drum-toggle-70').addClass('unshow');
  });
});
$(function() {
  $('.guitar1-70').hover(function() {
    $('.guitar1-toggle-70').removeClass('unshow');
  }, function() {
    $('.guitar1-toggle-70').addClass('unshow');
  });
});
$(function() {
  $('.guitarwife-70').hover(function() {
    $('.guitarwife-toggle-70').removeClass('unshow');
  }, function() {
    $('.guitarwife-toggle-70').addClass('unshow');
  });
});
$(function() {
  $('.micro-70').hover(function() {
    $('.micro-toggle-70').removeClass('unshow');
  }, function() {
    $('.micro-toggle-70').addClass('unshow');
  });
});
$(function() {
  $('.bass-70').hover(function() {
    $('.bass-toggle-70').removeClass('unshow');
  }, function() {
    $('.bass-toggle-70').addClass('unshow');
  });
});

var aero0 = new Audio();
aero0.src = "audio/aero0.mp3"
var aero1 = new Audio();
aero1.src = "audio/aero1.mp3"
var aero2 = new Audio();
aero2.src = "audio/aero2.mp3"
var aero3 = new Audio();
aero3.src = "audio/aero3.mp3"
var aero4 = new Audio();
aero4.src = "audio/aero4.mp3"

var aeroList = [aero0,aero1,aero2,aero3,aero4];
var trackA;

function setup(){
  aeroList[2].play();
  trackA = 2;
}
window.addEventListener('load', setup);

function mute(){
  for(i=0;i<aeroList.length;i++){
    aeroList[i].muted=true;
  }
}
function unmute(){
  for(i=0;i<aeroList.length;i++){
    aeroList[i].muted=false;
  }
}

function clickPlay(x){;
  for(i=0;i<aeroList.length;i++){
    aeroList[i].pause();
    aeroList[i].currentTime = 0;
  }
  aeroList[x].play();
  trackA = x;
}
for(i=0;i<aeroList.length;i++){
  aeroList[i].loop = false;
  aeroList[i].addEventListener("ended", function(){
  if(trackA<aeroList.length-1){
    aeroList[track+1].play();
    trackA++;
  }else {
    aeroList[0].play();
    trackA=0;
  }});
}
