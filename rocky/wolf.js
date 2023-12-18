/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "What is the average lifespan of Mexican gray wolves in the wild?",
        options: ["5-8 years", "8-12 years", "12-15 years", "15-18 years"],
        answer: 0,
        additionalInfo: "The average lifespan of Mexican gray wolves in the wild is typically around 6 to 8 years. Various factors, such as predation, territorial conflicts, and disease, contribute to their relatively short lifespan. However, in captivity, they have been known to live longer, with individuals reaching up to 15 years of age or more. <br>",
		imageContainer: '<img id="wolf1" src="wolf1.jpeg" alt="wolf"> <br>'
    },
    {
        question: "How many subspecies of gray wolves exist in North America, including the Mexican gray wolf?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        additionalInfo: "In the past, it was commonly believed that there were 32 subspecies of gray wolves in North America. However, recent genetic studies have led most biologists to recognize only four main types or subspecies: arctic, great plains, Mexican, and northwestern. The classification of the eastern wolf as a distinct subspecies is still a subject of debate among scientists. <br>",
		imageContainer: '<img id="wolf2" src="wolf2.jpeg" alt="wolf"> <br>'
    },
    {
        question: "What type of social structure do Mexican gray wolves exhibit?",
        options: ["Solitary", "Pair bonding", "Pack-based", "Harem-based"],
        answer: 2,
        additionalInfo: "Gray wolves are highly social creatures that live in packs. The size of a pack can range from two to thirty-six individuals, depending on factors like habitat and prey availability. The majority of packs consist of 5 to 9 members, typically including an alpha pair, their offspring, and young from previous years. <br>",
		imageContainer: '<img id="wolf3" src="wolf3.jpeg" alt="wolf"> <br>'
    },
    {
        question: "When do Mexican gray wolves usually breed and give birth?",
        options: ["Winter", "Spring", "Summer", "Autumn"],
        answer: 0,
        additionalInfo: "Mexican gray wolves typically breed between January and March, with the peak of breeding activity occurring in February. The gestation period lasts around 63 days, and females usually give birth to a litter of 4 to 7 pups in April or May. <br>",
		imageContainer: '<img id="wolf4" src="wolf4.jpeg" alt="wolf"> <br>'
    },
    {
        question: "What percentage of the Mexican gray wolf's diet consists of smaller mammals like rabbits and rodents?",
        options: ["Less than 10%", "Around 25%", "Approximately 50%", "More than 75%"],
        answer: 0,
        additionalInfo: "Smaller mammals like rabbits and rodents make up less than 10% of the Mexican gray wolf's diet. Native prey for Mexican wolves includes elk, mule deer, white-tailed deer, javelina, rabbits, and other small mammals. Mexican wolves can and do occasionally kill livestock, particularly young animals. <br>",
		imageContainer: '<img id="wolf5" src="wolf5.jpeg" alt="wolf"> <br>'
    },
    {
        question: "How far can Mexican gray wolves travel in search of prey on average in a day?",
        options: ["0-5 miles", "5-10 miles", "10-20 miles", "20-30 miles"],
        answer: 3,
        additionalInfo: "Mexican wolves are capable of covering impressive distances in their search for food or while patrolling their territory, often traveling up to 30 miles in a single day. They have a trotting speed of around five miles per hour for long distances and can sprint at speeds of up to 35 miles per hour for short bursts. <br>",
		imageContainer: '<img id="wolf6" src="wolf6.jpeg" alt="wolf"> <br>'
    },
    {
        question: "What is the estimated historical population size before significant declines?",
        options: ["1,000-10,000", "10,000-100,000", "100,000-1,000,000", "1,000,000+"],
        answer: 3,
        additionalInfo: "An estimated 2 million gray wolves, including thousands of Mexican gray wolves, originally inhabited North America. At the end of 2019, just 163 Mexican gray wolves were counted in the wild in Arizona and New Mexico.  in 1976, just seven wolves — three captured from the wild and four already in captivity were counted. <br>",
		imageContainer: '<img id="wolf7" src="wolf7.jpeg" alt="wolf"> <br>'
    },
    {
        question: "What federal law provides protection for the Mexican gray wolf?",
        options: ["Endangered Species Act", "Wildlife Protection Act", "Animal Welfare Act", "Wilderness Act"],
        answer: 0,
        additionalInfo: "The Mexican gray wolf is protected under the Endangered Species Act (ESA), a federal law in the United States. This law prohibits the killing, harassment, or capture of endangered species like the Mexican gray wolf and provides measures to conserve and recover their populations. <br>",
		imageContainer: '<img id="wolf8" src="wolf8.jpeg" alt="wolf"> <br>'
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