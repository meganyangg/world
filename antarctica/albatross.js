//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
//https://poe.com/s/rV7gYUlbjGhuF2sNeKkn
//https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "What is the largest wingspan recorded for a wandering albatross?",
        options: ["2 meters", "3 meters", "3.5 meters", "4 meters"],
        answer: 2,
        additionalInfo: "The wandering albatross boasts the largest wingspan among living birds, spanning an impressive 3.5 meters (11.5 feet), aiding its remarkable gliding abilities across vast ocean expanses. This enormous wingspan enables efficient soaring, supporting its nomadic lifestyle across the open seas. <br>",
		imageContainer: '<img src="albatross1.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "How long can wandering albatrosses remain in flight without landing?",
        options: ["12 hours", "24 hours", "48 hours", "72 hours"],
        answer: 3,
        additionalInfo: "Wandering albatrosses showcase incredible endurance, capable of remaining airborne for an astonishing 72 hours continuously, relying on wind patterns to glide effortlessly over vast ocean distances. This extraordinary ability allows extensive foraging trips in search of food across remote marine territories. <br>",
		imageContainer: '<img src="albatross2.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "Which oceanic region do wandering albatrosses primarily inhabit?",
        options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Southern Ocean"],
        answer: 3,
        additionalInfo: "Wandering albatrosses predominantly inhabit the expansive Southern Ocean, utilizing its windy, remote waters for foraging and covering immense distances during their nomadic journeys. This region serves as their primary territory, supporting their extensive marine travels and foraging habits. <br>",
		imageContainer: '<img src="albatross3.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "What do wandering albatrosses primarily feed on?",
        options: ["Plankton", "Fish", "Squid", "All of the above"],
        answer: 3,
        additionalInfo: "Wandering albatrosses showcase a versatile palate, primarily consuming a varied diet that includes fish, squid, and even scavenged carrion, exhibiting adaptability in foraging habits based on available food sources. This diverse diet sustains these birds during their extensive journeys across the oceanic expanses. <br>",
		imageContainer: '<img src="albatross4.jpg" alt="Albatross"> <br>'
    },
    {
        question: "How many years do wandering albatrosses take to reach sexual maturity?",
        options: ["3 years", "5 years", "8 years", "10 years"],
        answer: 2,
        additionalInfo: "Wandering albatrosses undergo a prolonged maturation process, taking approximately 8 years before reaching sexual maturity, a significant milestone that allows them to engage in breeding activities and contribute to the continuation of their species across their oceanic habitats. <br>",
		imageContainer: '<img src="albatross5.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "What is a unique courtship behavior of wandering albatrosses?",
        options: ["Dancing", "Singing", "Bill tapping", "Sky-pointing"],
        answer: 3,
        additionalInfo: "In the elaborate courtship rituals of wandering albatrosses, the distinctive behavior of 'sky-pointing' takes center stage, characterized by the birds pointing their bills skyward while emitting resonant calls, showcasing this unique and captivating display to attract potential mates and establish bonds crucial for breeding. <br>",
		imageContainer: '<img src="albatross6.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "How many species of wandering albatrosses are recognized?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        additionalInfo: "Two distinct species fall under the classification of wandering albatrosses: the wandering albatross (Diomedea exulans) and the Antipodean albatross (Diomedea antipodensis), each identified by unique characteristics and geographical distributions, contributing to the diversity within this majestic seabird group. <br>",
		imageContainer: '<img src="albatross7.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "What is the major threat to wandering albatross populations?",
        options: ["Climate change", "Overfishing", "Pollution", "All of the above"],
        answer: 3,
        additionalInfo: "Wandering albatross populations confront a trifecta of challenges comprising bycatch in fisheries, habitat degradation, and the far-reaching consequences of climate change and pollution, collectively posing significant threats to the sustainability of these majestic seabirds. <br>",
		imageContainer: '<img src="albatross8.jpeg" alt="Albatross"> <br>'
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