let firstName = [ 'Dejan', 'Jelena', 'Alek', 'Mila' ];
let lastName = [ 'Kostenarov', 'Kostenarov', 'Kostenarov', 'Kostenarov' ];

for (let name in firstName) {
	((fName, lName) => {
		console.log(`${fName} ${lName}`);
	})(firstName[name], lastName[name]);
}
