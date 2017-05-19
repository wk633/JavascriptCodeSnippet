var sleep = function (ms) {
	var promise = new Promise(function (resolve, reject) {
		setTimeout(function(){
			resolve('done!');
		}, ms);
	})
	return promise;
}
Promise.all([sleep(1000), sleep(2000)])
	.then(function() {
		console.log('all done!');
	})