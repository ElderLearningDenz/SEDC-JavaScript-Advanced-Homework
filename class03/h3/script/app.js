let content = document.getElementById('wrap');
let btn = document.getElementById('btn');
let item;
fetch('https://dog.ceo/api/breed/hound/images').then((response) => response.json()).then(function(data) {
	console.log(data);
	item = data.message;
});

btn.addEventListener('click', function() {
	for (let i = 0; i < item.length; i++) {
		content.innerHTML += `<img src="${item[i]}">`;
	}
});
