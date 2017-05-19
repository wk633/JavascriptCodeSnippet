function doSomethingAsync() {
	// fetch return a promise
	return fetch('www.xxx.com').then(x => x.json());
} 

doSomethingAsync()
	.then(success => {
		var result = success
		return result;
	})
	.then(success => doSomethingAsync())
	.then(success => {
		var result = success;
		return result;
	})
	.then(success => {
		console.log('end');
	})