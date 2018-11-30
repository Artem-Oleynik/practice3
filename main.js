var list_users = [];

function addNewUser(){
	var first_name = document.getElementById('input_first_name').value;
	var last_name = document.getElementById('input_last_name').value;
	var age = document.getElementById('input_age').value;
	var city = document.getElementById('input_city').value;
	var interests = document.getElementById('list_interests').options[document.getElementById('list_interests').selectedIndex].value;
	var inputinterests = document.getElementById('input_interests').value;

	window.list_users[window.list_users.length] = new User(first_name, last_name, age, city, interests, inputinterests);
	writeUser();
}

//добавить юзера в таблицу
function writeUser(){
	var indexLast = window.list_users.length-1;
	var table = document.getElementById('list');

	table.innerHTML += '<tr id="slot-added'+indexLast+'"><td id="slot-name'+indexLast+'"></td><td id="slot-age'+indexLast+'"></td><td id="slot-city'+indexLast+'"></td><td id="slot-interests'+indexLast+'"></td><td><button onClick="del('+indexLast+')">x</button></td></tr>';
	document.getElementById('slot-name'+indexLast).innerHTML = '<td id="slot-name'+indexLast+'">' + window.list_users[indexLast].first_name +' '+ window.list_users[indexLast].last_name +'</td>';
	document.getElementById('slot-age'+indexLast).innerHTML = '<td id="slot-age'+indexLast+'">' + window.list_users[indexLast].age + '</td>';
	document.getElementById('slot-city'+indexLast).innerHTML = '<td id="slot-city'+indexLast+'">'+ window.list_users[indexLast].city +'</td>';
	document.getElementById('slot-interests'+indexLast).innerHTML = '<td id="slot-interests'+indexLast+'">' + window.list_users[indexLast].interests + checkonValue(window.list_users[indexLast].inputinterests) + '</td>';
}

//удалисть indDel-го юзера
function del(indDel){
	document.getElementById('slot-added'+indDel).remove();
}

//проверить есть ли текст в переменной
function checkonValue(value){
	if(value != null && value.length != 0){
		return ', '+value;
	}else{
		return '';
	}
}

//класс юзера
class User{
	constructor(first_name, last_name, age, city, interests, inputinterests){
		this.first_name = first_name;
		this.last_name = last_name;
		this.age = age;
		this.city = city;
		this.interests = interests;
		this.inputinterests = inputinterests;
	}
}