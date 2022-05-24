let mainContent = document.getElementById('main');
let btn = document.querySelector('.btn');
let item;
fetch('https://pokeapi.co/api/v2/pokemon').then((response) => response.json()).then(function(data) {
	item = data.results;
});

btn.addEventListener('click', function() {
	for (let i = 0; i < item.length - 10; i++) {
		console.log(item[i].name);
		mainContent.innerHTML += `<li>Name: ${item[i].name}</li>`;
	}
});
