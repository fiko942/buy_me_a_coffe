window.onload = () => {
	const html = document.querySelector('html');
	const body = document.querySelector('body');

	const background = document.querySelector('background');

	const setBackgroundImage = () => {
		const image = `./assets/image/${config[0]['backgroundImage']}`;
		background.setAttribute('src', image);
		background.style.backgroundImage = `url(${image})`;
	}	

	const setSupportList = () => {
		const listContainer = document.querySelector('container .supports');
		for(let i = 0; i < config[0]['supports'].length; i++) {
			let data = config[0]['supports'][i];

			let el = document.createElement('div');
			el.classList.add('list');
			el.innerHTML = `
			<img src="./assets/brand-icon/${data['picture']}" alt="${data['name']}" title="${data['name']}" class="picture" />
			<div class="num">${data['num']}</div>
			`
			listContainer.appendChild(el);

			delete el;
			delete data;
		}
	}

	const disableDragImage = () => {
		const res = document.querySelectorAll('img').forEach(img => {
			img.setAttribute('draggable', 'false');
		});
		return res;
	}

	const setHoverAnimate = () => {
		document.querySelectorAll('container .supports .list').forEach(el => {
			el.addEventListener('mouseover', () => {
				el.classList.add('active');
			});

			el.addEventListener('mouseout', () => {
				if(el.classList.contains('active')) {
					el.classList.remove('active');
				}
			});
		});
	}

	const setCopyright = () => {
		const el = document.createElement('div');
		el.classList.add('mail');
		el.innerHTML = '<a href="mailto:tobellord@gmail.com" target="_blank" alt="tobellord@gmail.com" title="tobellord@gmail.com">tobellord@gmail.com</a>';
		body.appendChild(el);
		delete el;
		return;
	}

	const setDeveloper = () => {
		const el = document.createElement('div');
		el.classList.add('developer');
		el.innerHTML = `<a href="https://resume.tobelsoft.my.id/" title="Wiji Fiko Teren" alt="Wiji Fiko Teren" target="_blank">Wiji Fiko Teren</a>`;
		body.appendChild(el);
		delete el;
		return;
	}

	setBackgroundImage();
	setSupportList();
	setHoverAnimate();
	setCopyright();
	setDeveloper();


	setTimeout(function f() {
		disableDragImage();
		clearTimeout(f);
	}, 300);
}