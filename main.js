var list_users = [];
var lastInd = 0;

function addNewUser(){
	var first_name = document.getElementById('input_first_name').value;
	var last_name = document.getElementById('input_last_name').value;
	var age = document.getElementById('input_age').value;
	var city = document.getElementById('input_city').value;
	var interests = document.getElementById('list_interests').options[document.getElementById('list_interests').selectedIndex].value;
	var inputinterests = document.getElementById('input_interests').value;

	render(first_name, last_name, age, city, interests, inputinterests);
}

function render(first_name, last_name, age, city, interests, inputinterests){
	
	var table = document.getElementById("list_users"),
		first = table.childNodes[0],
		row = document.createElement('tr'), 
		tmpInd = window.lastInd++;
	
	row.id = 'user_'+tmpInd;
	
	row.innerHTML = '	<td id="slot-name">' + first_name +' '+ last_name +'</td>'+
					'	<td id="slot-age">' + age + '</td>'+
					'	<td id="slot-city">'+ city +'</td>'+
					'	<td id="slot-interests">' + interests + checkonValue(inputinterests) + '</td>'+
					'	<td class="forbtn"><button class="secondbtn" onClick="del('+tmpInd+')">x</button></td>';

	table.insertBefore(row, first);	
		
}

//удалисть indDel-го юзера
function del(indDel){
	document.getElementById('user_'+indDel).remove();
	list_users[indDel] == null;
}

//проверить есть ли текст в переменной
function checkonValue(value){
	if(value != null && value.length != 0){
		return ', '+value;
	}else{
		return '';
	}
}