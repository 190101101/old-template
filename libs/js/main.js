$(document).ready(function () {

	 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
 });


  $(document).ready(function () {
     $('.toggle-btn').on('click', function () {
         $('#sidebar').toggleClass('active');
         $('#section').toggleClass('active');
         $('#footer').toggleClass('active');
         $('.footer').toggleClass('active');
         $('#pagination').toggleClass('active');
         $('#navbar').toggleClass('active');
     });
 });

  /*=========================AUDIO*/


$(document).ready(function () {

	$('.absolute').hover(i, d);

	function i(){
		$('.p-first-col').addClass('margin-active');
	}


	function d(){
		$('.p-first-col').removeClass("margin-active");
	}

});



$(document).ready(function () {

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");


  modalCall.on('click', function(event){
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');
    $(modalId).addClass('show');
    $("body").addClass('no-scroll');


    setTimeout(function(){
      $(modalId).find('.modall__dialog').addClass('rotateModalcans');
    }, 200);

  });

  modalClose.on('click', function(event){
    $("body").removeClass('no-scroll');
    $(".modall__dialog").removeClass('rotateModalcans');
    setTimeout(function(){
     $('.modall').removeClass('show');
    }, 400);
  });


  // $('#closeModal').on('click', function(){
  //   $("body").removeClass('no-scroll');
  //   $(".modall__dialog").removeClass('rotateModalcans');
  //   setTimeout(function(){
  //    $('.modall').removeClass('show');
  //   }, 400);
  // });

  $('.modall').on('click', function(event){
    $("body").removeClass('no-scroll');
    $(".modall__dialog").removeClass('rotateModalcans');
    setTimeout(function(){
     $('.modall').removeClass('show');
    }, 400);
  });

  $('.modall__dialog').on('click', function(event){
    event.stopPropagation();
  });

});


$(document).ready(function () {
  
  $('.toggle-btn').on('click', function(){
    $('body').toggleClass('no-scroll-body');
  });
});

/*pagination*/

  var header = document.getElementById("pagination");
        var btns = header.getElementsByClassName("page");
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("activepag");
          current[0].className = current[0].className.replace(" activepag disabled", "");
          this.className += " activepag disabled";
          });
        }