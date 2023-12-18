/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "Where do macaws mainly live?",
        options: ["Rainforests", "Deserts", "Grasslands", "Tundra"],
        answer: 0,
        additionalInfo: "Hyacinth macaws inhabit regions of Brazil, eastern Bolivia, and northeastern Paraguay. Unlike many other parrots that favor dense tropical rainforests, hyacinth macaws are often found in lightly forested areas like palm swamps and flooded grasslands. The Pantanal region in Brazil is particularly significant as it supports a substantial portion of the hyacinth macaw population. <br>",
		imageContainer: '<img id="macaw1" src="macaw1.jpeg" alt="macaw1"> <br>'
    },
    {
        question: "Which of the listed is NOT a type of macaw?",
        options: ["Scarlet", "African Grey", "Green-winged", "Blue-and-Gold"],
        answer: 1,
        additionalInfo: "The African Grey Parrot is not a species of macaw. It belongs to different parrot family called Psittacus. It contains two species: the grey parrot and the Timneh parrot. For many years, the grey parrot and Timneh parrot were classified as subspecies. <br>",
		imageContainer: '<img id="macaw2" src="macaw2.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "What is a macaw's diet primarily composed of?",
        options: ["Seeds and nuts", "Fruits and berries", "Insects and small animals", " Fish and crustaceans"],
        answer: 1,
        additionalInfo: "Macaws primarily feed on fruits and berries found in the rainforest. These provide essential nutrients and contribute to their vibrant plumage. They require a higher level of fat than many other bird species and consume more nuts as part of their diet in the wild. What they eat varies with food availability during different seasons. <br>",
		imageContainer: '<img id="macaw3" src="macaw3.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "Which of the following statements is true about macaw feathers?",
        options: ["They are always blue.", "They are naturally black.", "They have vibrant and varied colors.", "They are colorless."],
        answer: 2,
        additionalInfo: "Macaw feathers exhibit a wide range of vibrant colors, including red, blue, green, and yellow, making them highly prized in the pet trade and among collectors. Specifically, hyacinth macaws are predominantly of deep cobalt blue and have small patches of yellow. <br>",
		imageContainer: '<img id="macaw4" src="macaw4.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "How do macaws communicate with each other?",
        options: ["Vocalizations and mimicry", "Visual displays and dances", "Pheromone release", "Telepathy"],
        answer: 0,
        additionalInfo: " Macaws communicate through various vocalizations, including squawks, screams, and mimicry of other bird calls, which are important for social interaction and territorial defense.Macaws vocalize to communicate within the flock, mark territory, and identify one another. Some species can even mimic human speech.  <br>",
		imageContainer: '<img id="macaw5" src="macaw5.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "Which of the following is a threat to macaw populations?",
        options: ["Habitat destruction", "Overhunting for the pet trade", "Climate change", "All of the above"],
        answer: 3,
        additionalInfo: "Macaws face multiple threats, including habitat destruction due to deforestation, overhunting for the pet trade, and the impacts of climate change on their ecosystems. The threatened rainforests of South America are being cut down at an alarming rate to make way for agriculture. This is a serious threat to the future survival of all macaws. <br>",
		imageContainer: '<img id="macaw6" src="macaw6.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "How long can macaws live in captivity?",
        options: ["Up to 10 years", "Up to 30 years", "Up to 50 years", "Up to 80 years"],
        answer: 2,
        additionalInfo: "Macaws can live up to 50 years in captivity with proper care and nutrition. Some individuals have been known to live even longer with exceptional conditions. Providing a stimulating environment, a balanced diet, regular veterinary care, and social interaction are essential for maximizing their lifespan in captivity.  <br>",
		imageContainer: '<img id="macaw7" src="macaw7.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "What is the largest species of macaw?",
        options: ["Hyacinth Macaw", "Blue-throated Macaw", "Military Macaw", "Red-fronted Macaw"],
        answer: 0,
        additionalInfo: "The Hyacinth Macaw (Anodorhynchus hyacinthinus) is the largest species of macaw, with a wingspan of up to 4 feet and a length of around 3.3 feet. Hyacinth macaws reach a maximum of 1.7 kilograms (3 lb 12 oz). <br>",
		imageContainer: '<img id="macaw8" src="macaw8.png" alt="mesoamerican"> <br>'
    },
]

function addQuestions()
{
    //generates 2 random indices are not the same
   randomIndex1 = Math.floor(Math.random() * questions.length);
   randomIndex2 = Math.floor(Math.random() * questions.length);
   
   //checks to make sure indices are not the same
   while (randomIndex1 == randomIndex2)
    {
        randomIndex2 = Math.floor(Math.random() * questions.length);
    }
    
    if (randomIndex1 > randomIndex2) {
		let temp = randomIndex1;
		randomIndex1 = randomIndex2;
		randomIndex2 = temp; 
	}

    //replaces HTML placeholder questions
	document.getElementById("question1").getElementsByTagName("b")[0].innerHTML = questions[randomIndex1].question;
	document.getElementById("question2").getElementsByTagName("b")[0].innerHTML = questions[randomIndex2].question;

    //replaces HTML placeholder radio buttons
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

score = 0;
twoCount = 0;
oneCount = 0;
function checkAnswer(index, idx)
{
	// Puts all radio buttons from the corresponding html of a specific question into an array
	document.getElementById("result" + idx).innerHTML = "";
	let array = document.getElementsByName("radio" + idx);
	
    // Loops through the array
	for (let i = 0; i<array.length; i++)
	{
        // Checks if an option is selected
		if(array[i].type == "radio")
		{
            // Compares the selected option w/ the correct answer from the "questions" array
			if(array[i].checked == true)
			{
				// If the selected answer matches with the correct answer
                // Makes the result element display as a success message in green
                // Displays additional information and a related image
                // All of this is from the "questions" array
				if (array[i].value==questions[index].options[questions[index].answer])
				{
                    document.getElementById("result" + idx).innerHTML =  '<h4 style="color:green;">Correct! <br></h4>';
                    document.getElementById("additionalInfo" + idx).innerHTML = questions[index].additionalInfo;
                    document.getElementById("imageContainer" + idx).innerHTML = questions[index].imageContainer;
                    score++;
                    console.log(score);
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

//https://www.w3schools.com/howto/howto_js_animate.asp#:~:text=JavaScript%20animations%20are%20done%20by,small%2C%20the%20animation%20looks%20continuous.
//Animates the animal once answers are submitted
var id = null;
function animate() 
{
    var elem = document.getElementById("myAnimation");   
    //sets original position
    var pos = 150;
    clearInterval(id);
    //declares speed of animation
    id = setInterval(frame, 5);
    //frame function makes sure animal stops at final position and if not at finl position changes the position 
    function frame() 
    {
        if (score == 2)
        {
            twoCount++;
            if (pos == 1150) {
                clearInterval(id);
            } else {
                pos++; 
                elem.style.left = pos + 'px'; 
            }
        } else if (score == 1)
        {
            oneCount++;
            if (twoCount>0)
            {
                pos = 1150;
            }
            if (pos == 620) {
                clearInterval(id);
            } else {
                pos++; 
                elem.style.left = pos + 'px'; 
            }
        } else
        {
            if (pos == 150) {
                clearInterval(id);
            }
        }
    }
}

function checkAllAnswers()
{
    score = 0;
	checkAnswer(randomIndex1, 1);
	checkAnswer(randomIndex2, 2);
    animate();
}

window.onload = function()
{
    addQuestions();

    //loads pop up into 
    myButton.addEventListener("click", function () {
        myPopup.classList.add("show");
    });
    closePopup.addEventListener("click", function () {
        myPopup.classList.remove("show");
    });
    window.addEventListener("click", function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove("show");
        }
    });
}