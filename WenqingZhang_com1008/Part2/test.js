link = document.getElementById('link');
	//make a sign---if flag=1, it shows the first picture; if  flat=2, it shows the second picture.
	var flag = 1;  
	var flag = 1;  
	//click the button and invoke the anonymous function
	link.onclick = function() {
		//acquire the tagging elements of picture
		img = document.getElementById('img');
		if (flag) {
			//modify the attribute of pictures' scr 
			img.src = '1001.jpg';
			flag = 0;
		}
		else {
			img.src = 'quiz1Answer.jpg';
			flag = 1;
		}
	}