// Side Menu Scripts
$(document).ready(function() {
  
  
      $(".sidenav-toggle").click(function() {
          $(this).toggleClass('nav-open').toggleClass('am-nav-close');
          $('#mySidenav').toggleClass('side-open').toggleClass('side-close');
      });
  
  
      $(".seeMore").click(function() {
          $(this).closest(".mini-project").hide().next(".lg-project").slideDown("slow");
  
      });
  
      $(".seeLess").click(function() {
          $(this).closest(".lg-project").stop().slideUp(function() {
              $(this).prev(".mini-project").slideDown();
          });
      });
  
  
      // Sparkle and Voting
  
      $(".am-projfund-btn-Sparkle").click(function() {
          var sparkid = $(this).attr('id');
          if (localStorage.getItem(sparkid) != null) {
              swal(
                  'Howdy!',
                  'You have already sparkled this project! :)',
                  'info'
              )
          } else {
              var count = parseInt($("." + sparkid).attr("data-sparkCount"));
              localStorage.setItem(sparkid, sparkid);
              $("." + sparkid).fadeOut(function() {
  
                  $("." + sparkid).text(count + 1).fadeIn("slow");
  
              });
  
          }
      });

      //jQuery Validator For Connect Page

      jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
      }, "Letters only please");

      $("#connect").validate({
        rules: {
            pname: {
                minlength: 3,
                maxlength: 30,
                required: true,
                lettersonly: true
            },
            URL:{
                required: true,
                url: true
            },
            file: {
                required: true,
                accept: "image/*"
              }

        }
      });



  
  
  });