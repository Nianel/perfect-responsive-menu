const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');

toggleMenu.addEventListener('click', function() {
	const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
	toggleMenu.setAttribute('aria-expanded', !open);
	menu.hidden = !menu.hidden;
});

function noScroll() {
	if ($('body').hasClass('noscroll')) {
			$('body').removeClass('noscroll');
	}
	else {
			$('body').addClass('noscroll');
	}
}