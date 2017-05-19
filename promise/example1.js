var mm = false;

var inquire = new Promise(
	function (resolve, reject) {
		if (mm) {
			var output = "mm is true";
			resolve(output);
		}else {
			var reason = new Error("mm is false");
			reject(reason);
		}
	}
);

inquire
.then(function (fulfilled) {
	console.log(fulfilled);
})
.catch(function (error) {
	console.log(error.message);
})