let mainTable = document.getElementById('tbl');
let btn = document.getElementById('btn');
mainTable.setAttribute('border', '2');

let listPlanet;

let urlPrime = `https://swapi.dev/api/planets/?page=1`;

function callPlanet(url) {
	fetch(url).then((response) => response.json()).then(function(data) {
		listPlanet = data.results;
		console.log(listPlanet);
	});
}

callPlanet(urlPrime);

function printPlanets(element, data) {
	for (let i = 0; i < data.length; i++) {
		element.innerHTML += `<thead><tr><td>Name:</td><td>Population:</td><td>Climate:</td><td>Gravity:</td></tr></thead><tbody><tr><td>${data[
			i
		].name}</td><td>${data[i].population}</td><td>${data[i].climate}</td><td>${data[i].gravity}</td></tr></tbody>`;
	}
}

btn.addEventListener('click', function() {
	printPlanets(mainTable, listPlanet);
});
