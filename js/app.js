const splash = document.querySelector('.intro')
const body = document.querySelector('.background')
let buttons = document.querySelectorAll('button:not([class])')
let lists = document.querySelectorAll('.list')

document.addEventListener('DOMContentLoaded', (e) =>
{
	setTimeout(()=>{
		splash.classList.add('intro-ended')
		body.classList.add('background-start')
		buttons[0].classList.add('open')
		lists[0].classList.add('active')
	}, 5000); //5000
})

var app = function ()
{
	var menuIcon = undefined;
	var navMenu = undefined;
	var intro = undefined;
	let buttons = undefined;
	let lists = undefined;

	var init = function init()
	{
		menuIcon = document.querySelector('.menu-btn')
		navMenu = document.querySelector('.nav')
		intro = document.querySelector('.intro')
		buttons = document.querySelectorAll('button:not([class])')
		lists = document.querySelectorAll('.list')
		applyListeners();
	};

	var applyListeners = function applyListeners()
	{
		let oldIndex = 0;
		let curIndex = 0;
		let newIndex = 0;

		menuIcon.addEventListener('click', function () 
		{
			return toggleClass(navMenu, 'open')
		})
		
		menuIcon.addEventListener('click', function ()
		{
			return toggleClass(menuIcon, 'open')
		})

		buttons.forEach((button, index) => {
			button.addEventListener('click', function() 
			{
				const activeButton = document.querySelector('.open')
				newIndex = index;
				oldIndex = curIndex;
				curIndex = newIndex;

				if(activeButton)
					activeButton.classList.remove('open')

				button.classList.add('open');

				lists[oldIndex].classList.remove('active')
				lists[curIndex].classList.add('active')

			})
		})
	};

	var toggleClass = function toggleClass(element, stringClass)
	{
		if(element.classList.contains(stringClass))
			element.classList.remove(stringClass)

		else
			element.classList.add(stringClass)
	};
	init();
}();
