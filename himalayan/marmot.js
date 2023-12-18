/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "What type of animal is a marmot?",
        options: ["Bird", "Mammal", "Reptile", "Amphibian"],
        answer: 1,
        additionalInfo: "Marmots belong to the mammal family and are known for their burrowing behavior and herbivorous diet. A marmot is a type of rodent. They're typically large and ground-dwelling, and can be found in mountainous regions, like the Alps and the Rockies. They're also known for their social behavior and their distinctive whistle, which they use to communicate with each other.  <br>",
		imageContainer: '<img src="marmot1.jpeg" alt="marmot"> <br>'
    },
    {
        question: "Where do most species of marmots primarily inhabit?",
        options: ["Forests", "Grasslands", "Deserts", "Arctic regions"],
        answer: 1,
        additionalInfo: "Marmots are predominantly found in grassland habitats, preferring open areas with sufficient vegetation. Marmots are well adapted to life in cold environments and can be found at high elevations, up to 5,000 meters above sea level. <br>",
		imageContainer: '<img src="marmot2.jpeg" alt="marmot"> <br>'
    },
    {
        question: "What is the typical diet of marmots?",
        options: ["Insects", "Grass, seeds, and fruits", "Fish", "Small mammals"],
        answer: 1,
        additionalInfo: "Marmots are herbivores, primarily feeding on seeds, nuts, grasses, and sometimes flowers. Tthey primarily eat plants. They also cache, or store, food for later use, often hiding it in their burrows. In the summer, when plants are abundant, marmots gorge on vegetation to build up fat reserves for the winter months when food is scarce. <br>",
		imageContainer: '<img src="marmot3.jpeg" alt="marmot"> <br>'
    },
    {
        question: "Which season do marmots typically hibernate in?",
        options: ["Spring", "Summer", "Fall", "Winter"],
        answer: 3,
        additionalInfo: "Marmots typically hibernate during the winter season, from September or October to May or June, depending on the species and location. During hibernation, their heart rate slows dramatically, from around 100-200 beats per minute to 1-10 beats per minute. This helps them conserve energy and survive the harsh, food-scarce winter conditions in their mountainous habitats. <br>",
		imageContainer: '<img src="marmot4.jpeg" alt="marmot"> <br>'
    },
    {
        question: "What is the main predator of marmots?",
        options: ["Bears", "Wolves", "Eagles", "All of the above"],
        answer: 3,
        additionalInfo: "Marmots face predation from various predators like bears, wolves, eagles, and other carnivorous animals.These predators are skilled hunters and can be a threat to marmots, especially when they venture out of their burrows. Marmots have a keen sense of alertness and warning calls to help protect themselves from predators, but they can still be vulnerable. <br>",
		imageContainer: '<img src="marmot5.jpeg" alt="marmot"> <br>'
    },
    {
        question: "How many species of marmots are recognized worldwide?",
        options: ["5", "10", "15", "20"],
        answer: 2,
        additionalInfo: "There are approximately 15 recognized species of marmots found across different regions. Some species live in mountainous areas, such as the Alps, northern Apennines, Carpathians, Tatras, and Pyrenees in Europe; northwestern Asia; the Rocky Mountains, Black Hills, the Cascade and Pacific Ranges, etc. <br>",
		imageContainer: '<img src="marmot6.jpeg" alt="marmot"> <br>'
    },
    {
        question: "What is a distinct behavior of marmots to alert others of danger?",
        options: ["Whistling", "Tail wagging", "Jumping", "Foot stomping"],
        answer: 0,
        additionalInfo: "Marmots are known for their distinctive whistle, which they use to alert other marmots in their group of potential danger. When a marmot senses a predator or perceives a threat, it will let out a high-pitched whistle to warn its fellow marmots. This whistle is a unique behavior that serves as an alarm system, allowing the group to take action and seek shelter in their burrows. <br>",
		imageContainer: '<img src="marmot7.png" alt="marmot"> <br>'
    },
    {
        question: "In which continent are marmots not found naturally?",
        options: ["North America", "Europe", "Asia", "Australia"],
        answer: 3,
        additionalInfo: "Marmots, members of the squirrel family, are known for their burrowing behavior and social colonies. Their natural habitat encompasses mountainous regions across North America, Europe, and Asia. However, due to Australia's unique island geography and the historical separation of its land masses, marmots are not found naturally on this continent. <br>",
		imageContainer: '<img src="marmot8.png" alt="marmot"> <br>'
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