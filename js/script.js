$(document).ready(function () {
	$('.slider').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
	});
	$('.fa-heart').click((e) => {

	})
});

const prevArrow = document.querySelector('.arrow-prev');
const nextArrow = document.querySelector('.arrow-next');
const catItems = document.querySelectorAll('.cat-item');
const catTabs = document.querySelectorAll('.categories_tabs');
let counter = 0;

function activeTabs(n) {
	resetCats(catTabs)
	catTabs[n].classList.add('cat-tabs-active');
}

function activeItem(n) {
	catItems[n].classList.add('cat-active')
}

function resetCats(name) {
	name.forEach(item => {
		item.classList.remove('cat-active')
		item.classList.remove('cat-tabs-active')
	})
}

nextArrow.addEventListener('click', () => {
	resetCats(catItems);
	resetCats(catTabs);
	counter++;
	if (counter != catItems.length) {
		activeItem(counter)
		activeTabs(counter)
	} else {
		counter = 0;
		activeItem(counter)
		activeTabs(counter)
	}
})
prevArrow.addEventListener('click', () => {
	resetCats(catItems);
	resetCats(catTabs);
	counter--;
	if (counter >= 0) {
		activeItem(counter)
		activeTabs(counter)
	} else {
		counter = catItems.length-1;
		activeItem(counter)
		activeTabs(counter)
	}
})