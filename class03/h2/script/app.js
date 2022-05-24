let main = document.getElementById('main');
main.setAttribute('border', '2');
let btn = document.getElementById('btn');
let item;

fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => response.json()).then(function(data) {
	item = data;
	console.log(data);
});

btn.addEventListener('click', function() {
	main.innerHTML += `
    <thead>
    <tr>
    <th>Name:</th>
    <th>User-Name:</th>
    <th>E-Mail:</th>
    <th>Address:</th>
    <th>Phone:</th>
    <th>Website:</th>
    <th>Company Name:</th>
    </tr>
    </thead> 
    <tbody>
    <tr>
    <td>${item.name}</td>
    <td>${item.username}</td>
    <td>${item.email}</td>
    <td>${item.address.street}</td>
    <td>${item.phone}</td>
    <td>${item.website}</td>
    <td>${item.company.name}</td>
    </tr><tbody/>`;
});
