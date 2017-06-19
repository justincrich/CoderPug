$(document).ready(()=>{

  var projects = [];

  // Fetch all github projects
  fetch("https://api.github.com/users/justincrich/repos")
  .then(resp=>resp.json())
  .then(projects=>{
    for(i in projects){
      console.log(projects[i]);
      let project = projects[i];
      let tag =
            '<div class=\'projectCard\'>'+
								'<a target="_blank" href="'+project.html_url+'">'+
										'<h2>'+project.name+'</h2>'+
								'</a>'+
								'<p>'+
										project.description
								'</p>'+
						'</div>';
      if(project.name !="justincrich.github.com"){
        $('#projects .group').append(tag);
      }

    }
  });

  $("header").scrollspy({offset:-80});

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
