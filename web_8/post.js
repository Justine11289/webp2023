fetch("https://reqres.in/api/articles", {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify({ title: "Fetch POST Request Example" })
})
.then(response => response.json())
.then(data => document.getElementById("post1").innerText = data.id);

const post_uri = "https://script.google.com/macros/s/AKfycbxXH6aPsldTBeS41WRMnJEA5Xstc7cYMj6YimDO2Al7H6DkJZiz/exec";
fetch(post_uri, {
	method: "POST",
	body: encodeURI(JSON.stringify({
			name: "IU",
			age: 28
	})),
	headers: {
		"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
	}
})
.then(res => {return res.json();})
.then(result => {
	document.getElementById("post2").innerText = result["text"];
	console.log(result);
});

var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url,{
  method:'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type':'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:',error))
.then(response => console.log('Success:',response));
