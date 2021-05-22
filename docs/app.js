$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

function animateValue(obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
	  if (!startTimestamp) startTimestamp = timestamp;
	  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
	  obj.innerHTML = Math.floor(progress * (end - start) + start);
	  if (progress < 1) {
		window.requestAnimationFrame(step);
	  }
	};
	window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value");
  animateValue(obj, 30, 100, 4000);
  