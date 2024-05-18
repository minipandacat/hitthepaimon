// Selection of all the CSS selectors 
const scoreboard = document.querySelector('.scoreboard span') 
const holes = document.querySelectorAll('.hole') 
const start_btn = document.querySelector('.buttons .start') 
const stop_btn = document.querySelector('.buttons .stop') 
const cursor = document.querySelector('.weapon img') 

//change the regular curosor to weapon img
window.addEventListener('mousemove', (e) => { 
	cursor.style.top = e.pageY + "px"
	cursor.style.left = e.pageX + "px"
}) 

//gives animation to weapon
window.addEventListener('click', () => { 
	cursor.style.animation = 'none'
	setTimeout(() => { 
		cursor.style.animation = ''
	}, 101) 
}) 

//clicking start button, starts game
start_btn.addEventListener('click', () => { 
	start_btn.style.display = 'none'
	stop_btn.style.display = 'inline-block'

	let holee 
	let points = 0 

	const game = setInterval(() => { 

		//randomizing the hole where Paimon comes out from
		let ran = Math.floor(Math.random() * 5) 
		holee = holes[ran] 

		// Adding Paimon image to the hole
		let set_img = document.createElement('img') 
		set_img.setAttribute('src', 
'enemies/paimon.png') 
		set_img.setAttribute('class', 'paimon') 
		holee.appendChild(set_img) 

		// disappear after 700ms
		setTimeout(() => { 
			holee.removeChild(set_img) 
		}, 700); 
	}, 800) 

	//adding to the score
	const scoreHandler = (e) => { 
		if (e.target.classList.contains('paimon')) { 
			scoreboard.innerText = ++points;
			e.target.remove(); // Remove the image immediately after clicking it
		}
	};

	window.addEventListener('click', scoreHandler);

	//clicking stop button, stops the game & resets the score
	stop_btn.addEventListener('click', () => { 
		clearInterval(game);
		stop_btn.style.display = 'none';
		start_btn.style.display = 'inline-block';
		scoreboard.innerText = '0';
		window.removeEventListener('click', scoreHandler);
	}) 
}) 
