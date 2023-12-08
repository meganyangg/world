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
				document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
				document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result").innerHTML =  "Incorrect :(" + "<br>";
					document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
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
				document.getElementById("additionalInfo1").innerHTML = "Orcas are carnivores, meaning their diet consists of just other creatures. They can eat sea turtles, sharks, squid, but they dont eat algae, since algae is a plant." + "<br>";
				document.getElementById("algaeImageContainer").innerHTML = '<img id="algaeImage" src="algae.webp" alt="Algae">' + "<br>";
				} else {
					document.getElementById("result1").innerHTML =  "Incorrect :(" + "<br>";
					document.getElementById("additionalInfo1").innerHTML = "Orcas are carnivores, meaning their diet consists of just other creatures. They can eat sea turtles, sharks, squid, but they dont eat algae, since algae is a plant." + "<br>";
					document.getElementById("algaeImageContainer").innerHTML = '<img id="algaeImage" src="algae.webp" alt="Algae">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}