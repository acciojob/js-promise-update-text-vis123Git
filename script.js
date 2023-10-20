const output = document.getElementById("output");


const p1 = new Promise((resolve,reject)=>{
	setTimeOut(()=>{
			resolve("Hello, world!")
	}, 1000)

	reject("Failed!")
})

p1.then((data)=>{
	output.innerText = data;
}).catch((err)=>{
	output.innerText = err.message;
})