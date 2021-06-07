const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;

});

$(window).scroll(function() {
	let wScroll = $(this).scrollTop();

	$('nav').css({
		'transform' : 'translate(0px, '+ wScroll * 2 +'%)'
	});
});

const ulNav = document.querySelector('nav.nav ul');
const menuToggle = document.querySelector('nav.nav .menu-toggle input');

menuToggle.addEventListener('click', function() {
	ulNav.classList.toggle('slide');
});