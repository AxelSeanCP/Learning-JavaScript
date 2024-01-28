/*async function sama seperti promise
kalau ada data maka resolve akan return datanya 
kalau ada throw maka reject akan return thrownya */

const hello = async () => {
	throw "i have a boyfriend"
	// return "Hello World!"
};

hello()
	.then((res) => {
		console.log('response: ', res);
	})
	.catch((err) => {
		console.log('error: ', err);
	})