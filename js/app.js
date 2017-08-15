$(document).ready(()=>{

  $('.experienceCard').on('click',(e)=>{
    console.log("CLICK");
  });

  var rejProj = {
    91938599:'reject'
  };
  var projFilter = [];

  // Fetch all github projects
  // fetch("https://api.github.com/users/justincrich/repos")
  // .then(resp=>resp.json())
  // .then(projects=>{
  //   for(i in projects){
  //     console.log(projects[i]);
  //     let project = projects[i];
  //
  //     if((!rejProj[project.id])){
  //       if(project.has_pages){
  //         console.log(project.owner.id);
  //         fetch("https://api.github.com/repos/"+project.owner.login+"/"+project.id+"/pages")
  //         .then(resp=>resp.json())
  //         .then(siteData =>{
  //           console.log(siteData);
  //         });
  //       }else{
  //         listProj(project);
  //       }
  //     }
  //
  //   }
  // });

  // function listProj(project){
  //
  //   let codeURL = project.url;
  //   let projSite = document.createElement('div');
  //   projSite.innerHTML = '<a target="_blank" href="#">'+
  //       '<li>'+
  //           '<i class="fa fa-globe" aria-hidden="true"></i>'+
  //       '</li>'+
  //   '</a>';
  //   let projCode = document.createElement('div');
  //   projCode.innerHTML = '<a target="_blank" href="#">'+
  //       '<li>'+
  //           '<i class="fa fa-code" aria-hidden="true"></i>'+
  //       '</li>'+
  //   '</a>';
  //
  //   let tag =
  //         '<div class=\'projectCard\'>'+
  //             '<div class="projHeader">'+
  //               '<h2>'+project.name+'</h2>'+
  //               '<ul class="projLinkContainer">'+
  //               '</ul>'+
  //             '</div>'+
  //             '<p>'+
  //                 project.description+
  //             '</p>'+
  //         '</div>';
  //         console.log(tag);
  //   if(project.name !="justincrich.github.com"){
  //     $('#projects .group').append(tag);
  //   }
  // }

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
