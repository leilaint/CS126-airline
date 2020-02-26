function myfunction()
{
	var from = document.getElementById("from").value;
	var towhere = document.getElementById("towhere").value;
	var fnname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var sex = document.getElementById("sex").radio;
	var mail = document.getElementById("mail").email;
	var date1 = document.getElementById("departdate").date;
	var date2 = document.getElementById("returndate").date;
	var res1, res2, res3, res4, res5, res6, res7;
	var resultsuper;

	if (from.length == 0){
		alert("The 'From' field is not yet filled");
		res1 = 0;
	}	
	else{
			var namelength = from.length;
			for(var j = 0; j<=namelength; i++){
				if (from[i] != ( /^[a-zA-Z]+$/)){
					res = 0;}
				else {res = 1}
				while (res == 0){
					alert("Please enter your airport location");
				}
				}

			}
	if (towhere.length == 0){
		alert("The 'to' field is not yet filled");
		res2 = 0;
	}
	else{
			 namelength = towhere.length;
			for(var j = 0; j<=namelength; i++){
				if (towhere[i] != ( /^[a-zA-Z]+$/)){
					res2 = 0;
				}
				else {res2 = 1
					while (res == 0){
						alert("Please enter your airport location");
				}
				}

			}
		}
	if (fname.length == 0){
		alert("The 'First Name' field is not filled. Please fill with your First Name");
		res3 = 0;
	}
	else{
			var namelength = fname.length;
			for(var j = 0; j<=namelength; i++){
				if (fname[i] != ( /^[a-zA-Z]+$/)){
					res = 0;
				}
				else {res = 1}
					while (res == 0){
						alert("Please enter your airport location");
				}
				}

			}
		
	
	if (lname.length == 0){
		alert("The 'Last Name' field is not filled. Please fill with your Last Name");
		res6 = 0;
	}
	else{
			var namelength = from.length;
			for(var j = 0; j<=namelength; i++){
				if (fname[i] != ( /^[a-zA-Z]+$/)){
					res = 0;
				}
				else {res = 1}
					while (res == 0){
						alert("Please enter your airport location");
					}
				}

			}
	
	var maillength = mail.length;
	if (mail.length == 0){
		for (var i = 0;i<=maillength; i++){
			if (mail[i] == /^\w+([\.-]?\w+)*\w+([\.-]?\w+)*(\.\w{2,3})+$/){
				res5 = 1;
			}
			else {res5 = 0;}
		}
	}

	if(Date.parse(date1) < Date.parse(date2)){

   	res7 = 1//start is less than End
	}else{
		alert("Departure Date should not be later than the Return Date");
   		res7 = 0;//end is lests than start
}
if(res1==1&&res2==1&&res3==1&&res4==1&&res5==0&&res6==1&&res7==1){
	document.getElementById("result").innerHTML = "Completed the form."
}
else{document.getElementById("result"). innerHTML = "Sorry. Seems like there an error. Try again"}
}
