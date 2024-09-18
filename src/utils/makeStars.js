// makeStars.js

export const makeStars = (skyElement) => {
	const maxSize = Math.max(window.innerWidth, window.innerHeight);

	const getRandomX = () => Math.random() * maxSize;
	const getRandomY = () => Math.random() * maxSize;
	const randomRadius = () => Math.random() * 0.7 + 0.6;
	const _size = Math.floor(maxSize / 2);

	const htmlDummy = new Array(_size)
		.fill(null)
		.map(() => {
			return `<circle class='star'
                cx="${getRandomX()}"
                cy="${getRandomY()}"
                r="${randomRadius()}"
                class="star" />`;
		})
		.join("");

	skyElement.innerHTML = htmlDummy;
};
