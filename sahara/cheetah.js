/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "Where is the primary habitat of the Northwestern African cheetah?",
        options: ["Rainforests", "Savannas", "Deserts", "Mountains"],
        answer: 2,
        additionalInfo: "The Northwestern African cheetah predominantly thrives in desert regions, showcasing remarkable adaptations tailored to survive within arid environments, distinguishing its habitat from options like rainforests, savannas, or mountains. <br>",
		imageContainer: '<img src="cheetah1.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the main diet of the Northwestern African cheetah?",
        options: ["Antelopes", "Zebras", "Wildebeests", "Gazelles"],
        answer: 0,
        additionalInfo: "The Northwestern African cheetah sustains itself primarily by hunting antelopes, particularly species like gazelles and impalas, forming the core of its dietary preferences and hunting repertoire. <br>",
		imageContainer: '<img src="cheetah2.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "How fast can the Northwestern African cheetah run?",
        options: ["50 mph", "60 mph", "70 mph", "80 mph"],
        answer: 1,
        additionalInfo: "The Northwestern African cheetah exhibits astounding agility, sprinting at speeds of up to 60 mph (97 km/h) during short, intense bursts, aiding its hunting endeavors in catching prey within its desert habitat. <br>",
		imageContainer: '<img src="cheetah3.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the current conservation status of the Northwestern African cheetah?",
        options: ["Least Concern", "Near Threatened", "Vulnerable", "Critically endangered"],
        answer: 3,
        additionalInfo: "The Northwestern African cheetah has sadly been categorized as critically endangered by the IUCN Red List due to its sharply declining population, primarily resulting from habitat loss, poaching, and limited prey availability, highlighting the urgent need for conservation efforts to safeguard this subspecies from extinction.<br>",
		imageContainer: '<img src="cheetah4.png" alt="Cheetah"> <br>'
    },
    {
        question: "What is the Northwestern African cheetah's primary predator?",
        options: ["Lions", "Hyenas", "Leopards", "African wild dogs"],
        answer: 0,
        additionalInfo: "Lions stand as one of the primary threats to the Northwestern African cheetah, not just competing for prey but also directly targeting cheetahs, especially during conflicts over resources, exacerbating the challenges this endangered species already faces in maintaining its population. <br>",
		imageContainer: '<img src="cheetah5.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the estimated population of the Northwestern African cheetah in the wild currently?",
        options: ["Less than 100", "Around 200", "Approximately 500", "Over 1000"],
        answer: 0,
        additionalInfo: "The Northwestern African cheetah faces an alarming reality with fewer than 100 individuals left in the wild, making it highly endangered and highlighting the urgent need for conservation efforts to safeguard its survival. <br>",
		imageContainer: '<img src="cheetah6.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "Which country or countries in Africa predominantly house the Northwestern African cheetah?",
        options: ["Kenya", "South Africa", "Algeria and Niger", "Tanzania"],
        answer: 2,
        additionalInfo: "The Northwestern African cheetah finds its principal habitat in the arid expanses of Algeria and Niger, navigating the challenges of survival in these desert landscapes. Conservation efforts in these regions play a crucial role in safeguarding this critically endangered species, addressing the threats it faces due to habitat loss and human-wildlife conflict.<br>",
		imageContainer: '<img src="cheetah7.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the main threat to the Northwestern African cheetah's survival?",
        options: ["Habitat loss", "Poaching", "Climate change", "Disease outbreaks"],
        answer: 0,
        additionalInfo: "The primary threat endangering the Northwestern African cheetah's existence is habitat loss, a consequence of human activities encroaching upon its natural landscapes. This loss disrupts its territory, limiting its resources and compromising its ability to thrive in these regions. <br>",
		imageContainer: '<img src="cheetah8.png" alt="Cheetah"> <br>'
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