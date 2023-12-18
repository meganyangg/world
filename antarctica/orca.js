/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "What is the oldest that orcas can live up to?",
        options: [" 60 years", "70 years", "80 years", "90 years"],
        answer: 3,
        additionalInfo: "Males orcas have an average lifespan of about 60 to 70 years in the wild. Female orcas on the other hand can live up to 90 years. The oldest recorded individual lived for over 100 years before passing away. Their long lifespans are attributed to their complex social structures, intelligence, and lack of natural predators.<br>",
		imageContainer: '<img src="orcas1.jpeg" alt="Orca"> <br>'
    },
    {
        question: "Which of the following do orcas NOT eat?",
        options: ["Sea turtles", "Sharks", "Algae", "Squid"],
        answer: 2,
        additionalInfo: "Orcas are apex predators with a diverse diet. They are known to consume a wide range of prey, including fish, squid, seals, sea lions, dolphins, and even larger marine mammals like gray whales. Their diet can vary depending on their location and available food sources, but does not contain algae, a plant, because they are carnivores.  <br>",
		imageContainer: '<img src="orcas2.jpeg" alt="orca"> <br>'
    },
    {
        question: "Besides the Antarctic ocean, where can orcas be found?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Arctic Ocean", "All oceans"],
        answer: 3,
        additionalInfo: "Orcas have a global distribution and can be found in both warm and cold waters. They inhabit oceans and seas around the world, including the Arctic, Antarctic, Pacific, Atlantic, and Indian Oceans. They are highly adaptable and can be seen in coastal areas as well as open ocean environments. <br>",
		imageContainer: '<img src="orcas3.jpeg" alt="orca"> <br>'
    },
    {
        question: "What are a group of orcas called?",
        options: ["Pod", "Herd", "Colony", "School"],
        answer: 0,
        additionalInfo: "A group of orcas is called a pod. Pods usually consist of a matriarch, her offspring, and potentially other related individuals. These highly social marine mammals exhibit complex social structures and rely on cooperative hunting and communication within their pod for survival and successful navigation of their environment. <br>",
		imageContainer: '<img src="orcas4.jpeg" alt="orca"> <br>'
    },
    {
        question: "Which of the following are NOT threats to orcas?",
        options: ["Entanglement in fishing gear", "High salinity", "Ocean contaminants", "Oil spills"],
        answer: 1,
        additionalInfo: "Orcas face various threats in their ecosystems. These include habitat degradation, pollution, depletion of prey populations, underwater noise pollution, entanglement in fishing gear, and collisions with vessels, but not high salinity. Additionally, captivity for entertainment purposes presents welfare concerns. <br>",
		imageContainer: '<img src="orcas5.jpeg" alt="orca"> <br>'
    },
    {
        question: "How many orcas are there globally?",
        options: ["35,000", "50,000", "60,000", "75,000"],
        answer: 1,
        additionalInfo: "Estimating the global population of orcas, or killer whales, is challenging due to their wide distribution and varying populations in different regions. However, it is believed that there are around 50,000 orcas worldwide. Further research and monitoring are ongoing to improve our understanding of their population dynamics and conservation status. <br>",
		imageContainer: '<img src="orcas6.jpeg" alt="orca"> <br>'
    },
    {
        question: "What do orcas rely on underwater sounds to do?",
        options: ["Feed", "Communicate", "Navigate", "All of the above"],
        answer: 3,
        additionalInfo: "Orcas rely on underwater sounds, such as echolocation clicks and vocalizations, for navigation, finding prey, and communicating with their pod. Echolocation helps them navigate in low visibility conditions and locate prey, while vocalizations serve as a means of social communication, coordinating group activities, and maintaining social bonds within their pod.<br>",
		imageContainer: '<img src="orca7.jpeg" alt="orca"> <br>'
    },
    {
        question: "What are orcas also known as?",
        options: ["Sea pandas", "Ocean wolves", "Killer whale", "Beluga whale"],
        answer: 2,
        additionalInfo: "Orcas are also known as killer whales. Despite the name, they are actually a species of oceanic dolphins and not whales. The name 'killer whale' originated from their powerful hunting abilities and their position at the top of the marine food chain. However, their scientific name is Orcinus orca.<br>",
		imageContainer: '<img src="orcas8.jpeg" alt="orca"> <br>'
    },
];

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