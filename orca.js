function answerYears()
{
	document.getElementById("result").innerHTML = "";
	let array = document.getElementsByName("years");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="Ninety")
				{
				document.getElementById("result").innerHTML =  "Correct!" + "<br>";
				document.getElementById("additionalInfo").innerHTML = "heres more info" + "<br>";
				} else {
					document.getElementById("result").innerHTML =  "Incorrect :(" + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerEat()
{
	document.getElementById("result1").innerHTML = "";
	let array = document.getElementsByName("eat");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="Algae")
				{
				document.getElementById("result1").innerHTML =  "Correct!" + "<br>";
				} else {
					document.getElementById("result1").innerHTML =  "Incorrect :(" + "<br>";
				}
				i=array.length;
			}
		}
	}
}