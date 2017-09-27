// Side Menu Scripts







$(document).ready(function(){


    $("span.am-navbar-toggle-btn").click(function(){
       $(this).toggleClass('am-nav-open').toggleClass('am-nav-close');
       $('#mySidenav').toggleClass('side-open').toggleClass('side-close');
    });
    


    //   $(".seeMore").click(function () {
    //     $(this).closest(".am-project-expand").fadeOut().next(".am-project-shrinked").slideDown();
    //   });

    $(".seeMore").click(function () {
        $(this).closest(".am-project-expand").hide().next(".am-project-shrinked").slideDown("slow");

      });

    $(".seeLess").click(function () {
      $(this).closest(".am-project-shrinked").stop().slideUp(function() {
        $(this).prev(".am-project-expand").slideDown();
      });
    });


    // Sparkle and Voting

    $(".am-projfund-btn-Sparkle").click(function(){
      var sparkid = $(this).attr('id');
      if(localStorage.getItem(sparkid) != null){
        swal(
          'Howdy!',
          'You have already sparkled this project! :)',
          'info'
        )
      }
      else
      {
        var count = parseInt($("."+sparkid).attr("data-sparkCount"));
        localStorage.setItem(sparkid, sparkid);
        $("."+sparkid).fadeOut(function(){

          $("."+sparkid).text(count+1).fadeIn("slow");

        });
        
      }
    });


});
