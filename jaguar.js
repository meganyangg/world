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
        options: ["Mesoamerican", "Ancient India", "Ancient Egypt", "All of the above"],
        answer: 0,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="yearImage" src="mesoamerican.png" alt="mesoamerican"> <br>'
    },
    {
        question: "What part of the world kills jaguars to make medicine?",
        options: ["Europe", "South America", "North Africa", "East Asia"],
        answer: 3,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="yearImage" src="mesoamerican.png" alt="mesoamerican"> <br>'
    },
    {
        question: "Other than spotted, what colored jaguars can be found in the wild?",
        options: ["Brown", "Black", "Yellow", "Orange"],
        answer: 1,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="yearImage" src="mesoamerican.png" alt="mesoamerican"> <br>'
    },
    {
        question: "When did jaguars become endangered?",
        options: ["1834", "1977", "2001", "1903"],
        answer: 1,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="yearImage" src="mesoamerican.png" alt="mesoamerican"> <br>'
    },
    {
        question: "What does the name jaguar mean?",
        options: ["he who kills with one leap", "he who jumps gracefully", "he who prowls quietly", "he who kills quickly"],
        answer: 0,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="yearImage" src="mesoamerican.png" alt="mesoamerican"> <br>'
    },
    {
        question: "How much do jaguar cubs weigh when they are born?",
        options: ["0.3 lbs", "1.2 lbs", "3.4 lbs", "2.0 lbs"],
        answer: 3,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="yearImage" src="mesoamerican.png" alt="mesoamerican"> <br>'
    },
    {
        question: "What is the longest jaguars live?",
        options: ["4 years", "7 years", "15 years", "19 years"],
        answer: 2,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="yearImage" src="mesoamerican.png" alt="mesoamerican"> <br>'
    },
    {
        question: "What is the fastest a jaguar can run?",
        options: ["130 mph", "60 mph", "100 mph", "80 mph"],
        answer: 2,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="yearImage" src="mesoamerican.png" alt="mesoamerican"> <br>'
    },
]


function checkAnswer(index, idx)
{
	console.log("result" + idx);
	document.getElementById("result" + idx).innerHTML = "";
	let array = document.getElementsByName("radio" + idx);
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				console.log("array_val=" + array[i].value);
				console.log("questions.answer=" + questions[index].options[questions[index].answer]);
				if (array[i].value==questions[index].options[questions[index].answer])
				{
                    document.getElementById("result" + idx).innerHTML =  '<h4 style="color:green;">Correct! <br></h4>';
                    document.getElementById("additionalInfo" + idx).innerHTML = questions[index].additionalInfo;
                    document.getElementById("imageContainer" + idx).innerHTML = questions[index].imageContainer;
				} else {
					document.getElementById("result" + idx).innerHTML =  '<h4 style="color:red;">Incorrect :( <br></h4>';
					document.getElementById("additionalInfo" + idx).innerHTML = null;
					document.getElementById("imageContainer" + idx).innerHTML =  null;
				}
				i=array.length;
			}
		}
	}
}

function checkAllAnswers()
{
	checkAnswer(randomIndex1, 1);
	checkAnswer(randomIndex2, 2);
}

function addQuestions()
{
   var newArr = [1,2,3,4,5,6,7,8];
   randomIndex1 = Math.floor(Math.random() * questions.length);
   randomIndex2 = Math.floor(Math.random() * questions.length);
   
   //console.log(document.getElementById("question1").getElementsByTagName("b")[0].innerHTML);
   while (randomIndex1 == randomIndex2)
    {
        randomIndex2 = Math.floor(Math.random() * questions.length);
    }
    
    if (randomIndex1 > randomIndex2) {
		let temp = randomIndex1;
		randomIndex1 = randomIndex2;
		randomIndex2 = temp; 
	}
	
    console.log("r1 = " + randomIndex1 );
    console.log("r2 = " + randomIndex2);
  
	document.getElementById("question1").getElementsByTagName("b")[0].innerHTML = questions[randomIndex1].question;
	document.getElementById("question2").getElementsByTagName("b")[0].innerHTML = questions[randomIndex2].question;
	
	let radioButtons1 = document.getElementsByName("radio1");
	let radioButtons1Text = document.getElementById("question1").getElementsByTagName("label");
	for (let i=0; i<radioButtons1.length; i++)
	{
		radioButtons1[i].value = questions[randomIndex1].options[i];
		radioButtons1Text[i].innerHTML = questions[randomIndex1].options[i];
	}
	
	let radioButtons2 = document.getElementsByName("radio2");
	let radioButtons2Text = document.getElementById("question2").getElementsByTagName("label");
	for (let i=0; i<radioButtons2.length; i++)
	{
		radioButtons2[i].value = questions[randomIndex2].options[i];
		radioButtons2Text[i].innerHTML = questions[randomIndex2].options[i];
	}
	
}

window.onload = function()
{
    addQuestions();
}

