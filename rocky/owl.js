/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "Where are Mexican spotted owls primarily found?",
        options: ["Eastern United States", "Central America", "Western United States and Mexico", "South America"],
        answer: 2,
        additionalInfo: "The Mexican spotted owl is found in forested mountainous areas and canyonlands across the southwestern United States and Mexico. Its range stretches from Utah, Colorado, Arizona, New Mexico, and the western parts of Texas, extending further south into multiple states within Mexico. <br>",
		imageContainer: '<img id="owl1" src="owl1.jpeg" alt="owl"> <br>'
    },
    {
        question: "What is the preferred habitat of the Mexican spotted owl?",
        options: ["Grasslands", "Desert dunes", "Deciduous forests", "Coniferous forests"],
        answer: 3,
        additionalInfo: "Mexican spotted owls prefer mature coniferous forests for nesting and hunting.The Mexican spotted owl favors mature forests, particularly Douglas fir habitats that take several decades to develop. These forests feature tall canopies, snags, and open spaces, while young owls may be targeted by great horned owls and northern goshawks. <br>",
		imageContainer: '<img id="owl2" src="owl2.jpeg" alt="owl"> <br>'
    },
    {
        question: "What is the primary diet of Mexican spotted owls?",
        options: ["Insects", "Small mammals", "Fish", "Seeds and berries"],
        answer: 1,
        additionalInfo: "Mexican spotted owls engage in nocturnal foraging, beginning at sunset and concluding shortly before sunrise. Their diet consists mainly of small mammals like mice, voles, and woodrats, but they also consume small birds, bats, reptiles, and arthropods. <br>",
		imageContainer: '<img id="owl3" src="owl3.jpeg" alt="owl"> <br>'
    },
    {
        question: "What is the typical size of a Mexican spotted owl's home range?",
        options: ["10-20 acres", "50-100 acres", "200-300 acres", "500+ acres"],
        answer: 3,
        additionalInfo: "The home ranges of Mexican spotted owls typically exhibit considerable variation in size, ranging from 661 to 14,169 acres.During the breeding season, home ranges tend to be smaller compared to the nonbreeding season, and female owls generally have larger home ranges than males. <br>",
		imageContainer: '<img id="owl4" src="owl4.jpeg" alt="owl"> <br>'
    },
    {
        question: "What threatens the Mexican spotted owl's habitat?",
        options: ["Wildfires", "Extreme cold", "Agricultural practices", "Urbanization"],
        answer: 0,
        additionalInfo: "The primary threat to California spotted owls and Mexican spotted owls is large-scale, high severity wildfires. These fires not only displace the owls, but also compel them to establish new territories in lower-quality habitats, making it difficult to find suitable nesting locations, as noted by Stephanie Eyes. <br>",
		imageContainer: '<img id="owl5" src="owl5.jpeg" alt="owl"> <br>'
    },
    {
        question: "How many eggs does a Mexican spotted owl typically lay in a clutch?",
        options: ["0-1", "2-4", "4-6", "6-8"],
        answer: 1,
        additionalInfo: "Mexican spotted owls exhibit monogamous behavior and typically establish long-term bonds with their mates. The timing of their reproductive activities varies slightly across their range. In Arizona, courtship commences in March, and the female lays 2-4 eggs between late March and early April. <br>",
		imageContainer: '<img id="owl6" src="owl6.jpeg" alt="owl"> <br>'
    },
    {
        question: "What is the distinctive call of the Mexican spotted owl often described as?",
        options: ["Hooting", "Screeching", "Whistling", "Barking"],
        answer: 2,
        additionalInfo: "Mated pairs of Mexican spotted owls maintain contact by producing a distinctive hollow whistling sound that gradually increases in pitch. Additionally, fledged young emit a similar high-pitched whistle as a way to beg for food from their parents. <br>",
		imageContainer: '<img id="owl7" src="owl7.jpeg" alt="owl"> <br>'
    },
    {
        question: "What is a key conservation effort for the Mexican spotted owl in the United States?",
        options: ["Habitat restoration", "Captive breeding programs", "Wildlife relocation", "Invasive species eradication"],
        answer: 0,
        additionalInfo: "A key conservation effort for the Mexican spotted owl in the United States is the designation and management of Critical Habitat areas. These designated areas aim to provide protection and suitable habitat for the species, helping to ensure its long-term survival and recovery. <br>",
		imageContainer: '<img id="owl8" src="owl8.jpeg" alt="owl"> <br>'
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