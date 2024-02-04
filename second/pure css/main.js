var acc = document.getElementsByClassName("btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*navbar btn*/
	function togglebtn(x) {
	  x.classList.toggle("change");
	}


  $(document).ready(function () {
     $('#toggle-btn').on('click', function () {
         $('.sidebar').toggleClass('active');
        
     });
 });

 