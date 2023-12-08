function goToNextPage(nextPage)
{
	window.location.href = nextPage;
	location.replace(nextPage);
}

/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

const questions = [
    {
        question: "What ancient society deeply respected jaguars?",
        options: ["Mesoamerican", "Ancient India", "Ancient Egpyt", "All of the above"],
        answer: 0
    },
    {
        question: "What part of the world kills jaguars to make medicine?",
        options: ["Europe", "South America", "North Africa", "East Asia"],
        answer: 3
    },
    {
        question: "Other than spotted, what colored jaguars can be found in the wild?",
        options: ["Brown", "Black", "Yellow", "Orange"],
        answer: 2
    },
    {
        question: "When did jaguars become endangered?",
        options: ["1834", "1977", "2001", "1903"],
        answer: 2
    },
    {
        question: "What does the name jaguar mean?",
        options: ["'he who kills with one leap'", "'he who jumps gracefully'", "'he who prowls quietly'", "'he who kills quickly'"],
        answer: 2
    },
    {
        question: "How much do jaguar cubs weigh when they are born?",
        options: ["0.3 lbs", "1.2 lbs", "3.4 lbs", "2.0 lbs"],
        answer: 3
    },
    {
        question: "What is the longest jaguars live?",
        options: ["4 years", "7 years", "15 years", "19 years"],
        answer: 2
    },
    {
        question: "What is the fastest a jaguar can run?",
        options: ["130 mph", "60 mph", "100 mph", "80 mph"],
        answer: 2
    },
];



/*function getRandomQuestions() 
{
    var randomIndex1 = Math.floor(Math.random() * questions.length);
    var randomIndex2 = Math.floor(Math.random() * questions.length);
    while (randomIndex1 == randomIndex2)
    {
        randomIndex2 = Math.floor(Math.random() * questions.length);
    }
    
    let Question1 = questions[randomIndex1].question;
    let Answer1 = questions[randomIndex1].answer;
    let Q1Option1 = questions[randomIndex1].options[0];
    let Q1Option2 = questions[randomIndex1].options[1];
    let Q1Option3 = questions[randomIndex1].options[2];
    let Q1Option4 = questions[randomIndex1].options[3];

    let Question2 = questions[randomIndex2].question;
    let Answer2 = questions[randomIndex2].answer;
    let Q2Option1 = questions[randomIndex2].options[0];
    let Q2Option2 = questions[randomIndex2].options[1];
    let Q2Option3 = questions[randomIndex2].options[2];
    let Q2Option4 = questions[randomIndex2].options[3];

    let console.log(randomIndex1);
    let console.log(Question1);
    let console.log(Answer1);
    let console.log(Q1Option1);
    let console.log(Q1Option2);
    let console.log(Q1Option3);
    let console.log(Q1Option4);

    let console.log(randomIndex2);
    let console.log(Question2);
    let console.log(Answer2);
    let console.log(Q2Option1);
    let console.log(Q2Option2);
    let console.log(Q2Option3);
    let console.log(Q2Option4);
};*/ 

function removeQuestions()
{
   var newArr = [1,2,3,4,5,6,7,8];
   var randomIndex1 = Math.floor(Math.random() * questions.length);
   var randomIndex2 = Math.floor(Math.random() * questions.length);
   while (randomIndex1 == randomIndex2)
    {
        randomIndex2 = Math.floor(Math.random() * questions.length);
    }
    console.log("r1 = " + randomIndex1 );
    console.log("r2 = " + randomIndex2);
  
   for (let i=0; i<8; i++)
   {
    if(i != randomIndex1 && i !=randomIndex2)
    {
        const element = document.getElementById("question" + newArr[i]);
        element.remove();
        console.log("removing element " + i);
    }
    else
    {
        console.log("keeping element " + i);

    }
   }
}

function answerSociety()
{
	document.getElementById("result1").innerHTML = "";
	let array = document.getElementsByName("ancient");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="Mesoamerican")
				{
                    document.getElementById("result1").innerHTML =  "Correct!" + "<br>";
                    //document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
                    //document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result1").innerHTML =  "Incorrect :(" + "<br>";
					//document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					//document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerMedicine()
{
	document.getElementById("result2").innerHTML = "";
	let array = document.getElementsByName("medicine");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="East Asia")
				{
                    document.getElementById("result2").innerHTML =  "Correct!" + "<br>";
                    //document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
                    //document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result2").innerHTML =  "Incorrect :(" + "<br>";
					//document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					//document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerColor()
{
	document.getElementById("result3").innerHTML = "";
	let array = document.getElementsByName("color");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="black")
				{
                    document.getElementById("result3").innerHTML =  "Correct!" + "<br>";
                    //document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
                    //document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result3").innerHTML =  "Incorrect :(" + "<br>";
					//document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					//document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerYear()
{
	document.getElementById("result4").innerHTML = "";
	let array = document.getElementsByName("year");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="2001")
				{
                    document.getElementById("result4").innerHTML =  "Correct!" + "<br>";
                    //document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
                    //document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result4").innerHTML =  "Incorrect :(" + "<br>";
					//document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					//document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerName()
{
	document.getElementById("result5").innerHTML = "";
	let array = document.getElementsByName("meaning");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="leap")
				{
                    document.getElementById("result5").innerHTML =  "Correct!" + "<br>";
                    //document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
                    //document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result5").innerHTML =  "Incorrect :(" + "<br>";
					//document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					//document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerWeight()
{
	document.getElementById("result6").innerHTML = "";
	let array = document.getElementsByName("weight");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="2.0")
				{
                    document.getElementById("result6").innerHTML =  "Correct!" + "<br>";
                    //document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
                    //document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result6").innerHTML =  "Incorrect :(" + "<br>";
					//document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					//document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerLife()
{
	document.getElementById("result7").innerHTML = "";
	let array = document.getElementsByName("life");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="13")
				{
                    document.getElementById("result7").innerHTML =  "Correct!" + "<br>";
                    //document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
                    //document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result7").innerHTML =  "Incorrect :(" + "<br>";
					//document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					//document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerSpeed ()
{
	document.getElementById("result8").innerHTML = "";
	let array = document.getElementsByName("speed");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="80")
				{
                    document.getElementById("result8").innerHTML =  "Correct!" + "<br>";
                    //document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
                    //document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result8").innerHTML =  "Incorrect :(" + "<br>";
					//document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					//document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

window.onload = function()
{
    //getRandomQuestions();
    removeQuestions();

}

