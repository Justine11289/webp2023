var name, age;
const uri = `https://script.google.com/macros/s/AKfycbw5PnzwybI_VoZaHz65TpA5DYuLkxIFHUGjJ6jRTOje0E6bVo/exec?name=${name}&age=${age}`;

fetch(uri, { method: "GET" })
	.then((res) => {
		return res.text();
	})
	.then((result) => {
		document.getElementById("h1").innerText = result;
	});

fetch("https://randomuser.me/api/")
	.then((res) => {
		return res.json();
	})
	.then((result) => {
		console.log(result);
		var user_name = result.results[0].name;
		var str = `姓名:${user_name["title"]} ${user_name["first"]}`;
		str += `${user_name["last"]} 您好`;
		document.getElementById("h2").innerText = str;
	});

let url =
	"https://images.unsplash.com/photo-1513313778780-9ae4807465f0?auto=format&fit=crop&w=200&q=80";
fetch(url)
	.then((response) => {
		return response.blob();
	})
	.then((imageBlob) => {
		let img = document.createElement("IMG");
		document.getElementById("newImg").appendChild(img);
		img.src = URL.createObjectURL(imageBlob);
	});
