var list_users = [];

function addNewUser(){
	var first_name = document.getElementById('input_first_name').value;
	var last_name = document.getElementById('input_last_name').value;
	var age = document.getElementById('input_age').value;
	var city = document.getElementById('input_city').value;
	var interests = document.getElementById('list_interests').options[document.getElementById('list_interests').selectedIndex].value;
	var inputinterests = document.getElementById('input_interests').value;

	window.list_users[window.list_users.length] = new User(first_name, last_name, age, city, interests, inputinterests);
	checkonAsync();
}

//проверка на асинхронизацию с html разметкой
function checkonAsync(){
	var countUsers = document.getElementsByTagName('tr').length;
	var indexLast = window.list_users.length-1;
	// if((countUsers-1) == window.list_users.length){
	document.getElementById('listhead').innerHTML += '<tr><td>' + window.list_users[indexLast].first_name +' '+ window.list_users[indexLast].last_name + '</td><td>'+ window.list_users[indexLast].age +'</td><td>Gotham</td><td>' + window.list_users[indexLast].interests + checkonValue(window.list_users[indexLast].inputinterests) + '</td><td><button>x</button></td></tr>';
	//'
	// alert(indexLast);
	// }
}

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