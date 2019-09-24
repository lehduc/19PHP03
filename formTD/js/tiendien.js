/**
	* Description: Ham tinh tien dien
	* Create by: abc
	* Created: 19:43 17/09/2019
**/
function tinhTienDien() {
	// Khai bao cac bien se su dung trong ham
	var name, first_day, last_day, first_number, last_number;
	var totalNumber = 0;
	var totalMooney = 0;
	var printContent = '';
	// hoac khai bao bien theo Camel case
	//var name, firstDay, lastDay, firstNumber, lastNumber;

	// lay gia tri ho va ten tu input co id la name
	name = document.getElementById('name').value;
	//
	first_day = document.getElementById('first_day').value;
	//
	last_day = document.getElementById('last_day').value;
	//
	first_number = document.getElementById('first_number').value;
	//
	last_number = document.getElementById('last_number').value;

	// validate cac input khong duoc de trong?
	if (name == '') {
		document.getElementById('errorName').innerHTML = 'Please input name!';
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if (first_day == '') {
		document.getElementById('errorFirstDay').innerHTML = 'Please input first_day!';
	} else {
		document.getElementById('errorFirstDay').innerHTML = '';
	}
	if (last_day == '') {
		document.getElementById('errorLastDay').innerHTML = 'Please input last_day!';
	} else {
		document.getElementById('errorLastDay').innerHTML = '';
	}
	if (first_number == '') {
		document.getElementById('errorFirstNumber').innerHTML = 'Please input first_number!';
	} else {
		document.getElementById('errorFirstNumber').innerHTML = '';
	}
	if (last_number == '') {
		document.getElementById('errorLastNumber').innerHTML = 'Please input last_number!';
	} else {
		document.getElementById('errorLastNumber').innerHTML = '';
	}
	if (first_day > last_day) {
		document.getElementById('errorFirstDay').innerHTML = 'The first day of the period must not be greater than the end of the period!';
	}
	if (first_number> last_number) {
		document.getElementById('errorFirstDay').innerHTML = 'The first Number of the period must not be greater than the end of the period!';
	}
	// tinh tien
	totalNumber = Number(last_number) - Number(first_number);
	if (totalNumber <= 100) {
		totalMooney = totalNumber * 1500;
	}
	if (totalNumber > 100 && totalNumber <= 200) {
		totalMooney = 100 * 1500 + (totalNumber - 100) * 2000;
	}
	if (totalNumber > 200) {
		totalMooney = 100 * 1500 + 100 * 2000 + (totalNumber - 200) * 3500;
	}
	printContent += "<p>Ho ten:" + name + "</p>";
	printContent += "<p>So dau ky:" + first_number + "</p>";
	printContent += "<p>So cuoi ky:" + last_number + "</p>";
	printContent += "<p>Ngay cuoi ky:" + first_day + "</p>";
	printContent += "<p>Ngay cuoi ky:" + last_day + "</p>";
	printContent += "<p>Tong tien:" + totalMooney + "</p>";
	document.getElementById('printContent').innerHTML = printContent;
}