$(document).ready(()=>{

  var isActive = false;

  $("#menuToggle").bind("click",()=>{

    $('.bar').toggleClass('animate');

    if(!isActive){
       $('.navBody').css("height","100%");
      $('.menu').css("display","block");
      isActive= !isActive;
    }else{
      $('.navBody').css("height","60px");
      isActive= !isActive;
    }

  });
});
