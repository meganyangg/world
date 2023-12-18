/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "What is the primary habitat of the North African ostrich?",
        options: ["Rainforests", "Savannas", "Deserts", "Mountains"],
        answer: 1,
        additionalInfo: "The North African ostrich predominantly resides in the savannas, characterized by open grasslands and scattered shrubs across the landscape. These vast savannas provide the ideal habitat for these ostriches due to the availability of open spaces and limited tree cover. <br>",
		imageContainer: '<img src="ostrich1.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "Which of the following is a behavior associated with male North African ostriches during breeding season?",
        options: ["Building nests", "Incubating eggs", "Guarding and defending the nest", "Mating dances"],
        answer: 3,
        additionalInfo: "Male North African ostriches exhibit elaborate mating dances during the breeding season as a way to court and attract females. These intricate displays involve rhythmic movements and vibrant visual cues aimed at enticing potential mates. <br>",
		imageContainer: '<img src="ostrich2.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the diet of the North African ostrich mainly composed of?",
        options: ["Grasses and seeds", "Insects and small animals", "Fruits and berries", "Carrion and dead animals"],
        answer: 0,
        additionalInfo: "The North African ostrich sustains itself primarily on a diet of grasses and seeds, foraging across the savanna to fulfill its nutritional requirements. This herbivorous diet is integral to its survival in the grassland ecosystems where it resides. <br>",
		imageContainer: '<img src="ostrich3.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the main reason for the decline in the North African ostrich population?",
        options: ["Habitat destruction", "Climate change", "Hunting for feathers", "Predation by other species"],
        answer: 2,
        additionalInfo: "The primary reason behind the decline in the North African ostrich population stems from extensive hunting for their feathers, which historically led to a significant decrease in their numbers. This practice played a critical role in reducing their population size over time. <br>",
		imageContainer: '<img src="ostrich4.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the current conservation status of the North African ostrich according to the IUCN Red List?",
        options: ["Least Concern", "Near Threatened", "Vulnerable", "Endangered"],
        answer: 3,
        additionalInfo: "The North African ostrich holds an 'Endangered' status on the IUCN Red List, reflecting its concerning population decline and persistent threats. This classification indicates the urgent need for conservation efforts to protect and restore its dwindling numbers. <br>",
		imageContainer: '<img src="ostrich5.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "Which continent is home to the largest population of North African ostriches?",
        options: ["Asia", "Europe", "Africa", "Australia"],
        answer: 2,
        additionalInfo: "The largest population of North African ostriches is predominantly found across diverse regions of the African continent. However, due to historical declines, their numbers have significantly decreased, warranting conservation measures to protect their remaining populations. <br>",
		imageContainer: '<img src="ostrich6.png" alt="Cheetah"> <br>'
    },
    {
        question: "What is the typical size of a North African ostrich egg?",
        options: ["5-8 inches", "8-10 inches", "10-12 inches", "12-14 inches"],
        answer: 3,
        additionalInfo: "North African ostrich eggs rank among the largest eggs laid by any bird, averaging an impressive length of 12-14 inches (30-36 cm). This substantial size is crucial for protecting the eggs and optimizing the chances of successful hatching in their habitat. <br>",
		imageContainer: '<img src="ostrich7.png" alt="Cheetah"> <br>'
    },
    {
        question: "What is a notable characteristic of North African ostriches compared to other species?",
        options: ["Larger body size", "Longer legs", "Vibrant plumage", "Absence of flight feathers"],
        answer: 3,
        additionalInfo: "North African ostriches distinguish themselves from other species due to their lack of flight feathers, a notable characteristic setting them apart within the ostrich family. This trait contributes to their inability to fly, differentiating them from their counterparts. <br>",
		imageContainer: '<img src="ostrich8.png" alt="Cheetah"> <br>'
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