$('.video-pos').on('click',function(){
  var button =  $(this).children("button");
  button.toggle();
  var myVideoid =  $(this).find("video.embed-responsive-item").attr("id");
  var myVideo = document.getElementById(myVideoid);
  if (myVideo.paused) { 
    myVideo.play(); 
  }
  else { 
    myVideo.pause(); 
  }
 $('#' + myVideoid).on('ended',function(){
    button.toggle();
  });
});