/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "What is the primary diet of greater gliders?",
        options: ["Insects", "Nectar and pollen", "Leaves and foliage", "Fruits and berries"],
        answer: 2,
        additionalInfo: "The diet of a Greater Glider is almost exclusively eucalypt leaves, only eating the leaves of some eucalypt species high up in the canopy. <br>",
		imageContainer: '<img id="glider1" src="glider1.png" alt="glider"> <br>'
    },
    {
        question: "What is a distinctive physical feature of greater gliders for gliding through trees?",
        options: ["Elongated tail", "Webbed feet", "Patagium", "Extra joints in limbs"],
        answer: 2,
        additionalInfo: "Greater gliders possess a patagium that stretches from their elbow to their ankles, enabling gliding between trees. A patagium is a wing-like membrane. It allows them to glide from tree to tree as though using a parachute. <br>",
		imageContainer: '<img id="glider2" src="glider2.jpeg" alt="glider"> <br>'
    },
    {
        question: "Where are greater gliders predominantly found in Australia?",
        options: ["Northern regions", "Coastal areas", "Eastern and southeastern parts", "Central deserts"],
        answer: 2,
        additionalInfo: "Greater gliders are mainly found in the eastern and southeastern parts of Australia. Gliders are found along the east coast of mainland Australia, from central Queensland to central Victoria. <br>",
		imageContainer: '<img id="glider3" src="glider3.jpeg" alt="glider"> <br>'
    },
    {
        question: "How far can a greater glider glide in a single leap?",
        options: ["Up to 30 meters", "Up to 50 meters", "Up to 70 meters", "Up to 100 meters"],
        answer: 3,
        additionalInfo: "Greater gliders are impressive gliders, capable of covering distances of up to 100 meters in a single glide. They can also change direction during flight, even at 90-degree angles, by using their long tails and adjusting the curvature of their gliding membranes for steering. <br>",
		imageContainer: '<img id="glider4" src="glider4.jpeg" alt="glider"> <br>'
    },
    {
        question: "What is the typical habitat of greater gliders?",
        options: ["Grasslands", "Forests", "Deserts", "Alpine regions"],
        answer: 1,
        additionalInfo: "Greater gliders typically inhabit large, tall eucalyptus forests and are not found in rainforests. To sustain a population, patches of old-growth forest must be at least 20 hectares in size. They are associated with areas that have a high density of mature trees and require large patches of old-growth forest. Greater gliders are commonly found in locations with abundant hollow-bearing trees. <br>",
		imageContainer: '<img id="glider5" src="glider5.jpeg" alt="glider"> <br>'
    },
    {
        question: "What is the primary threat to greater glider populations in the wild?",
        options: ["Habitat destruction", "Climate change", "Predation by birds of prey", "Diseases"],
        answer: 0,
        additionalInfo: "The Greater Glider faces threats from habitat loss and fragmentation caused by deforestation and bushfires. The species is highly dependent on forests and large trees with hollows. Additionally, climate change may further reduce suitable habitat for the Greater Glider in the future. <br>",
		imageContainer: '<img id="glider5" src="glider5.jpeg" alt="glider"> <br>'
    },
    {
        question: "What is the typical size of a greater glider's home range?",
        options: ["0-10 hectares", "50-100 hectares", "200-300 hectares", "500-1000 hectares"],
        answer: 3,
        additionalInfo: "Within forested areas, both male and female Greater Gliders establish home territories and mark borders with other individuals. Male home territories typically range from 1.4 to 4.1 hectares (3.5 to 10.1 acres), while females have slightly smaller territories of 1.3 to 3.0 hectares (3.2 to 7.4 acres). <br>",
		imageContainer: '<img id="glider7" src="glider7.jpeg" alt="glider"> <br>'
    },
    {
        question: "What is the greater gliders biggest adaptations?",
        options: ["Primarily feeding on eucalyptus leaves", "Flying only at night", "Hibernating when they face disease", "Hiding in holes in trees during dawn and dusk"],
        answer: 0,
        additionalInfo: "Greater gliders have developed a specialized diet of predominantly eucalyptus leaves, resulting in an enlarged caecum that aids in the digestion of cellulose. This adaptation is similar to that seen in koalas. <br>",
		imageContainer: '<img id="glider8" src="glider8.jpeg" alt="gliderß"> <br>'
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