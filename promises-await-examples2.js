const fetch = require("node-fetch")

function getNombre(username){
	const url = 'https://api.github.com/users/'+username
	fetch(url)
	.then(respuesta => respuesta.json())
	.then(json =>{
		console.log(json)
	})
}

async function getNombre2(username){
	const url = 'https://api.github.com/users/'+username
	
	const respuesta = await fetch(url)
	const json = await respuesta.json()

	console.log(json)
}

getNombre("ivansaldivar")
getNombre2("ivansaldivar")
