var list_users = [];

function addNewUser(){
	var first_name = document.getElementsByName('input_first_name').value;
	var last_name = document.getElementsByName('input_last_name').value;
	var age = document.getElementsByName('input_age').value;
	var city = document.getElementsByName('input_city').value;
	var interests = document.getElementsByName('list_interests').options[document.getElementsByName('list_interests').selectedIndex].value;
	var inputinterests = document.getElementsByName('input_interests').value;

	window.list_users[window.list_users.length] = new User(first_name, last_name, age, city, getinterents(interests, inputinterests));
	checkonAsync();
}

//проверка на асинхронизацию с html разметкой
function checkonAsync(){
	var countUsers = document.getElementsByTagName('tr').length;
	if((countUsers-1) == window.list_users.length){
		document.getElementByTagName('table').innerHTML += '<tr><td>' + User.first_name +' '+ User.last_name + '</td><td>'+ User.age +'</td><td>Gotham</td><td>' + User.interests + checkonValue(User.inputinterests) + '</td><td><button>x</button></td></tr>';
	}
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