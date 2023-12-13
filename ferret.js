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
        question: "What is the primary prey of the black-footed ferret?",
        options: ["Birds", "Insects", "Small mammals", "Fish"],
        answer: 2,
        additionalInfo: "The primary prey of the black-footed ferret includes small mammals like prairie dogs and ground squirrels. Black-footed ferrets are highly specialized predators that rely almost exclusively on prairie dogs for their diet. They have evolved to hunt and capture these small rodents, which make up the majority of their food intake in their native grassland habitats. <br>",
		imageContainer: '<img id="ferret1" src="ferret1.jpeg" alt="ferret"> <br>'
    },
    {
        question: "Where is the native habitat of the black-footed ferret primarily located?",
        options: ["Coastal regions", "Grasslands and prairies", "Dense forests", "Arctic tundra"],
        answer: 1,
        additionalInfo: "The native habitat of the black-footed ferret is located in the grasslands, prairies, and mountains of North America. Historically, they inhabited the Great Plains region, including parts of the United States, Mexico, and Canada. Today, their range is limited, and conservation efforts focus on reintroducing them to suitable habitats within their native range.  <br>",
		imageContainer: '<img id="ferret2" src="ferret2.jpeg" alt="ferret"> <br>'
    },
    {
        question: "What was the major cause of the decline in black-footed ferret populations?",
        options: ["Predation by larger mammals", "Loss of suitable habitat", "Disease outbreaks", "Human disturbances"],
        answer: 1,
        additionalInfo: "Habitat loss has been a significant factor contributing to the decline of black-footed ferret populations. The conversion of native grasslands to agricultural land and urban development has reduced the availability of suitable habitat for the ferrets, leading to fragmentation and loss of their natural range. <br>",
		imageContainer: '<img id="ferret3" src="ferret3.jpeg" alt="ferret"> <br>'
    },
    {
        question: "When is the black-footed ferret primarily active?",
        options: ["Dawn and dusk", "Day", "Night", "Irregularly active"],
        answer: 0,
        additionalInfo: "The black-footed ferret is primarily crepuscular, being most active during the periods of dawn and dusk. This allows them to take advantage of the transitional light conditions when their prey, such as prairie dogs, are also active. <br>",
		imageContainer: '<img id="ferret4" src="ferret4.jpeg" alt="ferret"> <br>'
    },
    {
        question: "What is the black-footed ferret's status according to the IUCN Red List?",
        options: ["Critically Endangered", "Endangered", "Vulnerable", "Near Threatened"],
        answer: 1,
        additionalInfo: "The black-footed ferret is listed as 'Endangered' on the IUCN Red List. Its population experienced a significant decline due to habitat loss, loss of prey, and diseases. Conservation efforts, including captive breeding and reintroduction programs, are helping to recover the species. <br>",
		imageContainer: '<img id="ferret5" src="ferret5.jpeg" alt="ferret"> <br>'
    },
    {
        question: "How do black-footed ferrets locate their prey?",
        options: ["Visual cues", "Vibrations in the ground", "Echolocation", "Keen sense of smell"],
        answer: 3,
        additionalInfo: "Black-footed ferrets locate their prey, primarily prairie dogs, by using their keen sense of smell and hearing. They can detect the scent of prairie dogs and listen for their vocalizations and movements in the grasslands, allowing them to pinpoint their prey's location for hunting. <br>",
		imageContainer: '<img id="ferret6" src="ferret6.jpeg" alt="ferret"> <br>'
    },
    {
        question: "What is the estimated population of black-footed ferrets in the wild currently?",
        options: ["Over 2,000", "Approximately 1,000", "Around 500", "Less than 100"],
        answer: 2,
        additionalInfo: "The estimated population of black-footed ferrets in the wild is around 500 individuals. Conservation efforts, including reintroduction programs and captive breeding, are ongoing to increase their numbers and expand their range. <br>",
		imageContainer: '<img id="ferret7" src="ferret7.jpeg" alt="ferret"> <br>'
    },
    {
        question: "What is the main conservation strategy employed to save black-footed ferrets from extinction?",
        options: ["Captive breeding and reintroduction programs", "Genetic modification", "Habitat modification", "Restriction of human access to natural habitats"],
        answer: 0,
        additionalInfo: "The main conservation strategy employed to save black-footed ferrets from extinction is captive breeding and reintroduction programs. These efforts involve breeding black-footed ferrets in captivity and releasing them into suitable habitats to establish self-sustaining populations and increase their numbers in the wild. <br>",
		imageContainer: '<img id="ferret8" src="ferret8.png" alt="ferret"> <br>'
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
                    //document.getElementById("image" + idx).innerHTML = questions[index].image;
				} else {
					document.getElementById("result" + idx).innerHTML =  '<h4 style="color:red;">Incorrect :( <br></h4>';
					document.getElementById("additionalInfo" + idx).innerHTML = null;
					document.getElementById("imageContainer" + idx).innerHTML =  null;
                    //document.getElementById("image" + idx).innerHTML = null;
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