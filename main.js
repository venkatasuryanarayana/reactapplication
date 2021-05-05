// function loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status=="200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }

// loadjson("data.json",function(text){
// 	var data = JSON.parse(text);
// 	console.log(data);
// })

function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	displayData(data.details);
	
})

function displayData(info){

	var bodyElement = document.querySelector("body");

	var row = document.createElement("div");
	row.classList.add("row");
	bodyElement.appendChild(row);

	for(i=0;i<info.length;i++){
		var column = document.createElement("div");
		row.appendChild(column);

		var card = document.createElement("div");
		card.classList.add("cardbody");

		var img1 = document.createElement("img");
		img1.src = info[i].image;
		img1.alt = "picture";
		card.appendChild(img1);

		var name = document.createElement("h3");
		name.textContent=info[i].name;
		card.appendChild(name);

		var email = document.createElement("a");
		email.href = "mailto:"+info[i].email;
		email.textContent=info[i].email;
		card.appendChild(email);

		var b = document.createElement("br");
		card.appendChild(b);

		var number = document.createElement("a");
		number.href="tel:"+info[i].number;
		number.textContent=info[i].number;
		card.appendChild(number);

		var add = document.createElement("h2");
		add.textContent="Address";
		card.appendChild(add);

		var hr = document.createElement("hr");
		card.appendChild(hr);

		var Address = document.createElement("p");
		Address.textContent=info[i].Address;
		card.appendChild(Address);


		column.appendChild(card);
	}


}

