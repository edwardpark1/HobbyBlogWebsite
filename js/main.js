window.addEventListener("resize", resizeToggleMenu);
window.addEventListener("DOMContentLoaded", resizeToggleMenu);

const menuShort = document.querySelector('#nav-shortened');
const menuLong = document.querySelector('#nav-extended');

function usertoggleMenu() {
	menuLong.classList.toggle('menu-transition');
	menuLong.classList.add('menu-flow');
}

function resizeToggleMenu() {
    if (window.innerWidth >= 852) {
		menuShort.classList.add("hidden");
    } else {
		menuShort.classList.remove("hidden");
		//This is to ensure when screen size falls below breakpoint, user does not see the transition animation
		menuLong.classList.remove('menu-flow');
    }
}

(function($) {
	var	$window = $(window),
    $body = $('body');
		
	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 800);
	});

})(jQuery);