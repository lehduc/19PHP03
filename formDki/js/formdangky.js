function move() {
	var name,gender,birthday,city,value;
	var printContent = '';
	var age = 0;
	var current = new Date().getFullYear();
	//var gender = document.getElementsByTagName("gioitinh");
	
	//
	birthday = new Date(birthday).getFullYear();
	name = document.getElementById('name').value;
	gender = document.getElementById('gioitinh').value;
	birthday = document.getElementById('ngaysinh').value;
	city = document.getElementById('city').value;
	value = document.getElementById('city').value;

	if (name == '') {
		document.getElementById('erroName').innerHTML = 'Please input name!';
	} else {
		document.getElementById('erroName').innerHTML = '';
	}
	//
	if (gender == '') {
		document.getElementById('erroGioiTinh').innerHTML = 'Please input gender!';
	} else {
		document.getElementById('erroGioiTinh').innerHTML = '';
	}
	//
	if (birthday == '') {
		document.getElementById('erroNgaySinh').innerHTML = 'Please input birthday!';
	} else {
		document.getElementById('erroNgaySinh').innerHTML = '';
	}
	//
	if (city == '') {
		document.getElementById('erroCity').innerHTML = 'Please input city!';
	} else {
		document.getElementById('erroCity').innerHTML = '';
	}
	//*************
	
	//tinh
	age = current - birthday;
	printContent += "<p>Ho ten:" + name + "</p>";
	//
	printContent += "<p>tuoi:" + age + "</p>"; 
	//
	if(document.getElementById('nam').checked) {
  		printContent += "Nam";
	}else if(document.getElementById('nu').checked) {
  		printContent += "Nu";
	}
	if(value === 'quang binh') {
  		printContent += "Quang Binh" + value;
	} else if(value === 'quang tri') {
		printContent += "Quang Tri" + value;
	}
	document.getElementById('printContent').innerHTML = printContent;
}
