/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "What is the primary diet of koalas?",
        options: ["Eucalyptus leaves", "Insects", "Grass and berries", "Bamboo shoots"],
        answer: 0,
        additionalInfo: "The diet of koalas mainly consists of the leaves of eucalyptus trees. The presence and density of their preferred food tree species play a crucial role in determining the distribution and population of koalas in a given area. They rely heavily on a select few tree species for their sustenance. <br>",
		imageContainer: '<img id="koala1" src="koala1.jpeg" alt="koala"> <br>'
    },
    {
        question: "How many hours do koalas sleep on average per day?",
        options: ["8-10 hours", "12-14 hours", "16-18 hours", "20-22 hours"],
        answer: 3,
        additionalInfo: "Due to their low-energy diet and the energy needed to digest toxic leaves, koalas can sleep for up to 20 hours per day. They are primarily active at night and during dawn and dusk, but may also move during the day if they are disturbed, need to regulate their body temperature, or seek a new tree. <br>",
		imageContainer: '<img id="koala2" src="koala2.jpeg" alt="koala"> <br>'
    },
    {
        question: "Which part of Australia are koalas native to?",
        options: ["Northern Territory", "Tasmania", "Queensland", "Western Australia"],
        answer: 2,
        additionalInfo: " Koalas are native to Southern and Eastern Australia, particularly regions like Queensland. The distribution of koalas covers much of Queensland, New South Wales, Victoria and a small area in South Australia. <br>",
		imageContainer: '<img id="koala3" src="koala3.jpeg" alt="koala"> <br>'
    },
    {
        question: "What is a baby koala called?",
        options: ["Cub", "Joey", "Calf", "Fawn"],
        answer: 1,
        additionalInfo: "Koala babies are called joeys. A newborn joey looks just like a pink jellybean! It's about 2 centimetres long, has no fur and its eyes and ears are not yet fully formed. Koala joeys are born without fur, and with their eyes and ears not yet fully developed. <br>",
		imageContainer: '<img id="koala4" src="koala4.jpeg" alt="koala"> <br>'
    },
    {
        question: "How long can koalas live for?",
        options: ["5-8 years", "10-12 years", "15-18 years", "20-25 years"],
        answer: 3,
        additionalInfo: "On average, koalas live for 13 to 15 years of age in the wild. Although females can continue to breed into their 'teens' and may live as long as 18 years; males are thought to have a slightly shorter lifespan. <br>",
		imageContainer: '<img id="koala5" src="koala5.jpeg" alt="koala"> <br>'
    },
    {
        question: "What is the main source of hydration for koalas?",
        options: ["Ponds and streams", "Drinking from tree trunks", "Moisture from eucalyptus leaves", "Rainwater collected in their fur"],
        answer: 1,
        additionalInfo: "Scientists have made a significant discovery about koalas' drinking habits. They have found that koalas drink water by licking the moisture running down trees, which has reshaped our understanding of these beloved yet mysterious creatures. <br>",
		imageContainer: '<img id="koala6" src="koala6.jpeg" alt="koala"> <br>'
    },
    {
        question: "What is a notable characteristic of koala fingerprints?",
        options: ["They are nearly identical to human fingerprints", "They have a rough texture for gripping branches", "They change color based on mood", "They secrete a scent for communication"],
        answer: 0,
        additionalInfo: "Koalas, the small marsupials found in Australian forests, possess fingerprints that closely resemble those of humans. These unique patterns, akin to human fingerprints, are distinct for each individual koala, highlighting their remarkable similarities in this aspect of identification. <br>",
		imageContainer: '<img id="koala7" src="koala7.jpeg" alt="koala"> <br>'
    },
    {
        question: "How do koalas communicate with each other?",
        options: ["Vocalizations", "Visual displays", "Scent marking", "All of the above"],
        answer: 3,
        additionalInfo: "Koalas employ a variety of vocalizations to communicate across vast distances. Among them is a deep grunting bellow that males use to indicate their social and physical status. By bellowing, males assert dominance without engaging in physical fights, and they also use this vocalization to help other animals pinpoint their location accurately. Additionally, koalas communicate through scent marking on trees. <br>",
		imageContainer: '<img id="koala8" src="koala8.jpeg" alt="koala"> <br>'
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
