var sleep = function (ms) {
	var promise = new Promise(function (resolve, reject) {
		setTimeout(function(){
			resolve('done!');
		}, ms);
	})
	return promise;
}
sleep(3000)
	.then(function(result) {
		console.log(result);
	})