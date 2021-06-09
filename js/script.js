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

const menuUL = document.querySelector('nav.menu-container ul');
const menuToggle = document.querySelector('nav.menu-container .menu-toggle .toggler');

menuToggle.addEventListener('click', function() {
	menuUL.classList.toggle('slide');
});
