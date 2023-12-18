/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "What ancient society deeply respected jaguars?",
        options: ["Mesoamerican", "Ancient India", "Ancient Egypt", "All of the above"],
        answer: 0,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="jaguar1" src="jaguar1.png" alt="jaguar"> <br>'
    },
    {
        question: "What part of the world kills jaguars to make medicine?",
        options: ["Europe", "South America", "North Africa", "East Asia"],
        answer: 3,
        additionalInfo: "All major Mesoamerican civilizations prominently featured a jaguar god, and for many, such as the Olmec, the jaguar was an important part of religious practice.[4] For those who resided in or near the tropical jungle, the jaguar was well known and became incorporated into the lives of the inhabitants. The jaguar's formidable size, reputation as a predator, and its evolved capacities to survive in the jungle made it an animal to be revered. <br>",
		imageContainer: '<img id="jaguar2" src="jaguar2.jpg" alt="jaguar"> <br>'
    },
    {
        question: "Other than spotted, what colored jaguars can be found in the wild?",
        options: ["Brown", "Black", "Yellow", "Orange"],
        answer: 1,
        additionalInfo: "Jaguars are also often killed for use in traditional Asian medicine. They are typically boiled whole until they reduce down into a paste used for various purposes, from treating arthritis to treating the flu. <br>",
		imageContainer: '<img id="jaguar3" src="jaguar3.jpeg" alt="jaguar"> <br>'
    },
    {
        question: "When did jaguars become endangered?",
        options: ["1834", "1977", "2001", "1903"],
        answer: 1,
        additionalInfo: "As a result of a Center lawsuit, the Service listed the jaguar as endangered. Originally listed under the predecessor to the Endangered Species Act, the jaguar had lost protection in the United States in 1973 due to an administrative “oversight.“ <br>",
		imageContainer: '<img id="jaguar4" src="jaguar4.jpeg" alt="jaguar"> <br>'
    },
    {
        question: "What does the name jaguar mean?",
        options: ["he who kills with one leap", "he who jumps gracefully", "he who prowls quietly", "he who kills quickly"],
        answer: 0,
        additionalInfo: "Mother jaguars give birth to one to four cubs. Most often, two cubs are born. A newborn jaguar cub weighs only 1½ - 2 pounds (700–900 grams). About 5 newborn kittens together weigh what a newborn jaguar cub weighs. <br>",
		imageContainer: '<img id="jaguar5" src="jaguar5.jpeg" alt="jaguar"> <br>'
    },
    {
        question: "How much do jaguar cubs weigh when they are born?",
        options: ["0.3 lbs", "1.2 lbs", "3.4 lbs", "2.0 lbs"],
        answer: 3,
        additionalInfo: "Jaguars live a total of 12 to 16 years. FEEDING: An excellent swimmer and a strong climber, the jaguar will often wait in trees for its prey, relying on proximity rather than sustained speed in hunting.  <br>",
		imageContainer: '<img id="jaguar6" src="jaguar6.jpeg" alt="jaguar"> <br>'
    },
    {
        question: "What is the longest jaguars live?",
        options: ["4 years", "7 years", "15 years", "19 years"],
        answer: 2,
        additionalInfo: "Jaguars live a total of 12 to 16 years. FEEDING: An excellent swimmer and a strong climber, the jaguar will often wait in trees for its prey, relying on proximity rather than sustained speed in hunting. <br>",
		imageContainer: '<img id="jaguar7" src="jaguar7.jpeg" alt="jaguar"> <br>'
    },
    {
        question: "What is the fastest a jaguar can run?",
        options: ["130 mph", "60 mph", "100 mph", "80 mph"],
        answer: 2,
        additionalInfo: "The answer is that jaguars are incredibly fast animals. In fact, they can reach speeds of up to 80 kilometers per hour (50 miles per hour) when they are running at their top speed. This is an impressive feat, especially when you consider the fact that jaguars are large animals that can weigh up to 100 kilograms (220 pounds). <br>",
		imageContainer: '<img id="jaguar8" src="jaguar8.jpeg" alt="jaguar"> <br>'
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