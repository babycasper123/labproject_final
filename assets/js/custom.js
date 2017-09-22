// Side Menu Scripts



$(document).ready(function(){


    $("span.am-navbar-toggle-btn").click(function(){
       $(this).toggleClass('am-nav-open').toggleClass('am-nav-close');
       $('#mySidenav').toggleClass('side-open').toggleClass('side-close');
    });
    

});

