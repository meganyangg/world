/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "What is the scientific name for pink dolphins?",
        options: ["Delphinus delphis", "Orcinus orca", "Inia geoffrensis", "Tursiops truncatus"],
        answer: 2,
        additionalInfo: "Pink dolphins, also known as Amazon river dolphins or boto, belong to the species Inia geoffrensis. They are unique freshwater dolphins found in the rivers of South America, particularly in the Amazon and Orinoco basins. Their scientific name refers to their distinct species classification. <br>",
		imageContainer: '<img id="dolphin1" src="pinkdolphin1.jpeg" alt="dolphin"> <br>'
    },
    {
        question: "Which region is known for its population of pink dolphins?",
        options: ["Arctic Ocean", "Great Barrier Reef", "Amazon Rainforest", "Mediterranean Sea"],
        answer: 2,
        additionalInfo: "The Amazon Rainforest, specifically the river systems within it, is renowned for being home to a significant population of pink dolphins. These dolphins have adapted to the freshwater environment and thrive in the Amazon basin where they find abundant food sources and suitable habitats. <br>",
		imageContainer: '<img id="dolphin2" src="pinkdolphin2.jpeg" alt="dolphin"> <br>'
    },
    {
        question: "What is the primary food source for pink dolphins?",
        options: ["Fish", "Plankton", "Seaweed", "Birds"],
        answer: 0,
        additionalInfo: "Pink dolphins primarily feed on fish, which they catch using echolocation. Fish make up the majority of their diet, and their specialized teeth and hunting techniques enable them to catch and consume various fish species found in the rivers they inhabit. <br>",
		imageContainer: '<img id="dolphin3" src="pinkdolphin3.jpeg" alt="dolphin"> <br>'
    },
    {
        question: "How do pink dolphins get their distinctive pink coloration?",
        options: ["Pigmentation from their diet", "Sun exposure", "Genetic mutation", "Artificial dyeing"],
        answer: 0,
        additionalInfo: "The pink coloration of pink dolphins is believed to come from pigments in their diet, such as carotenoids found in the fish they consume. These pigments accumulate in their skin, giving them their distinctive pinkish hue and making them easily recognizable in their natural habitat. <br>",
		imageContainer: '<img id="dolphin4" src="pinkdolphin4.jpeg" alt="dolphin"> <br>'
    },
    {
        question: "What is the current conservation status of pink dolphins?",
        options: ["Endangered", "Near threatened", "Least concern", "Critically endangered"],
        answer: 0,
        additionalInfo: "Pink dolphins are classified as endangered on the IUCN Red List. They face multiple threats, including habitat loss, pollution, hunting, and accidental entanglement in fishing gear. The combination of these factors has resulted in declining populations, emphasizing the need for conservation efforts to protect these unique dolphins. <br>",
		imageContainer: '<img id="dolphin5" src="pinkdolphin5.jpeg" alt="dolphin"> <br>'
    },
    {
        question: "How do pink dolphins communicate with each other?",
        options: ["Scent marking", "Visual displays and gestures", "Electric fields", "Vocalizations and clicks"],
        answer: 3,
        additionalInfo: "Pink dolphins communicate using a combination of vocalizations, clicks, and whistles. These sounds play a crucial role in their social interactions, mating behavior, and navigation. Vocalizations and clicks allow them to communicate with other individuals in their group and locate prey in the murky waters of their river habitats. <br>",
		imageContainer: '<img id="dolphin6" src="pinkdolphin6.jpeg" alt="dolphin"> <br>'
    },
    {
        question: "How many species of pink dolphins are there?",
        options: ["One", "Two", "Three", "Four"],
        answer: 1,
        additionalInfo: "There are two recognized species of pink dolphins: the Amazon river dolphin (Inia geoffrensis) and the Chinese river dolphin (Lipotes vexillifer). Each species has its own distinct habitat, distribution, and characteristics, highlighting the diversity within the pink dolphin group. <br>",
		imageContainer: '<img id="dolphin7" src="pinkdolphin7.jpeg" alt="dolphin"> <br>'
    },
    {
        question: "What is a major threat to pink dolphins?",
        options: ["Climate change", "Overfishing", "Habitat destruction", "Noise pollution"],
        answer: 2,
        additionalInfo: "Habitat destruction, primarily due to deforestation and dam construction, poses a significant threat to pink dolphins. Loss of suitable habitat disrupts their feeding and breeding patterns, reduces available resources, and fragments their populations, leading to a decline in their overall numbers. Conservation efforts are crucial to mitigate this threat. <br>",
		imageContainer: '<img id="dolphin8" src="pinkdolphin8.jpeg" alt="dolphin"> <br>'
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