/**
	* Description: Ham tinh tien dien
	* Create by: kite
	* Created: 19:43 17/09/2019
**/

function inputName() {
	var name = document.getElementById("name").value.length;
	if (name == "") {
		document.getElementById("span1").innerHTML = "Not Empty";
	}
	else {
		document.getElementById("span1").innerHTML = "";
	}
}
//
function firstNumber() {
	var f_Number = document.getElementById("first_number").value.length;
	if (f_Number == "") {
		document.getElementById("span2").innerHTML = "Not Empty";
	}
	else {
		document.getElementById("span2").innerHTML = "";
	}
}
//
function lastNumber() {
	var f_Number = document.getElementById("last_number").value.length;
	if (f_Number == "") {
		document.getElementById("span3").innerHTML = "Not Empty";
	}
	else {
		document.getElementById("span3").innerHTML = "";
	}
}
//
function tinhTienDien() {
	var name = document.getElementById('name').value;
    var firstday = new Date(document.getElementById('first_day').value);
    var lastday = new Date(document.getElementById('last_day').value);
    var today = new Date();
    var firstnumber = document.getElementById('first_number').value;
    var lastnumber = document.getElementById('last_number').value;
    //
    if ( name === '' || firstnumber === '' || lastnumber === '') {
    	alert("Fields Can't Be Blank!!!");
    }
    else{
		if (firstday > today) {
	    alert("Ngày đầu kỳ đã hơn ngày hôm nay");
		}

		if (firstday > lastday) {
	    	alert("Ngày cuối kỳ phải hơn ngày đầu kỳ");
		}

		if (lastnumber < firstnumber) {
		    alert("Số cuối kỳ phải hơn Số đầu kỳ");
		}

		var t = lastnumber - firstnumber;
		if (t <= 100) {
			t = t * 1500;
			alert("--ten: " + name + "--so tien dien: " + t + "--tu ngay: " + firstday + "--den ngay: " + lastday + "--su dung: " + (lastnumber - firstnumber) + "--voi so tien la: " + t);
		}
		else if (t <= 300) {
			t = 1500 * 100 + (lastnumber - 100) * 2000;
			alert("--ten: " + name + "--so tien dien: " + t + "--tu ngay: " + firstday + "--den ngay: " + lastday + "--su dung: " + (lastnumber - firstnumber) + "--voi so tien la: " + t);
		}
		else {
			t = 1500 * 100 + 200 * 2000 + (lastnumber - 300) * 3500; 
			alert("--ten: " + name + "--so tien dien: " + t + "--tu ngay: " + firstday + "--den ngay: " + lastday + "--su dung: " + (lastnumber - firstnumber) + "--voi so tien la: " + t); 
		}
    }
    

}

