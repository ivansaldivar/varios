var fs = require("fs")

/*
fs.readFile("./promises-examples.txt", function(err, content){
	fs.writeFile("./cantidad.txt", content.length, function(err){
	 console.log(content.length)
	})
})
*/

function readFile(name){
	console.log("leyendo " + name)
	return new Promise(function(resolve, reject){
		fs.readFile(name, function(err, content){
			if(err){
				return reject(err)
			}	
			console.log("finalizo lectura de " + name)
			resolve(content)
		})
	})
}
function writeFile(name, content){
	return new Promise(function(resolve, reject){
		fs.writeFile(name, content, function(err){
			if(err){
				return reject(err)
			}
			resolve(console.log("Escribiendo el contenido"))
		})
	})
}

//usando Promise.race
Promise.race([
	readFile("./promises-examples.txt"),
	readFile("./cantidad.txt"),
	readFile("./promises-examples.js")
]).then(response => console.log("Contenido del primer archivo leido: " + response.toString()))


//usando Promise.all
/*
Promise.all([
	readFile("./promises-examples.txt"),
	readFile("./cantidad.txt"),
	readFile("./promises-examples.js")
]).then(responses => console.log(responses.length))
*/

//usando Promise
/*
readFile("./promises-examples.txt")
.then(content => writeFile("./cantidad.txt",content.length))
.catch(err => console.log("Hubo un error: " + err.message))
*/
