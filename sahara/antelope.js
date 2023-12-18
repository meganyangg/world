/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

// Array "database" for all possible quiz questions, options, answers, and the
// additional info & image that appears when the user selects the right option
const questions = [
    {
        question: "Which of the following is not an African antelope?",
        options: ["Impala", "Kudu", "Gazelle", "Bison"],
        answer: 3,
        additionalInfo: "Bison, in contrast to African antelopes like the impala, kudu, and gazelle, are not indigenous to Africa, inhabiting primarily North America. This distinguishes them from the African antelope species commonly found across the continent's diverse ecosystems. <br>",
		imageContainer: '<img src="antelope1.jpeg" alt="Antelope"> <br>'
    },
    {
        question: "What is the largest antelope species found in Africa?",
        options: ["Impala", "Eland", "Springbok", "Nyala"],
        answer: 1,
        additionalInfo: "The eland, recognized for its robust build and magnificent spiral horns, claims the distinction of being Africa's largest antelope species, a title earned due to its impressive size and distinctive features, setting it apart from other antelope species such as the impala, springbok, and nyala. <br>",
		imageContainer: '<img src="antelope2.jpeg" alt="Antelope"> <br>'
    },
    {
        question: "Which African antelope species is known for its ability to jump high and far when startled?",
        options: ["Wildebeest", "Springbok", "Oryx", "Topi"],
        answer: 1,
        additionalInfo: "The springbok is celebrated for its remarkable pronking behavior, characterized by its impressive ability to leap high into the air when startled or excited, distinguishing it from other African antelope species like the wildebeest, oryx, and topi. <br>",
		imageContainer: '<img src="antelope3.png" alt="Antelope"> <br>'
    },
    {
        question: "What unique adaptation helps antelopes survive in the African savanna?",
        options: ["Excellent sense of smell", "Long necks for browsing", "Fast running speeds", "Water conservation abilities"],
        answer: 3,
        additionalInfo: "Antelopes showcase remarkable water conservation abilities, featuring efficient kidneys and the capability to endure elevated body temperatures, crucial adaptations that support their survival in the arid African savanna by minimizing water loss, setting this trait apart from options such as an excellent sense of smell, long necks for browsing, or fast running speeds. <br>",
		imageContainer: '<img src="antelope4.png" alt="Antelope"> <br>'
    },
    {
        question: "Which antelope species is famous for its large, majestic spiral horns?",
        options: ["Gemsbok", "Sable antelope", "Roan antelope", "Greater kudu"],
        answer: 3,
        additionalInfo: "The greater kudu is renowned for its strikingly majestic spiral horns, often reaching impressive lengths, serving as a distinctive feature that sets them apart from other antelope species like the gemsbok, sable antelope, and roan antelope, making their identification relatively straightforward. <br>",
		imageContainer: '<img src="antelope5.jpg" alt="Antelope"> <br>'
    },
    {
        question: "What is the collective term for a group of antelopes?",
        options: ["Flock", "Herd", "Pack", "Cluster"],
        answer: 1,
        additionalInfo: "The collective term for a gathering of antelopes is a 'herd,' a widely used term for groups of various grazing species, differentiating it from options like flock, pack, or cluster. <br>",
		imageContainer: '<img src="antelope6.jpeg" alt="Antelope"> <br>'
    },
    {
        question: "Which antelope species is known for its distinctive black and white facial markings?",
        options: ["Blesbok", "Hartebeest", "Sable antelope", "Nyala"],
        answer: 0,
        additionalInfo: "The blesbok stands out among antelope species with its distinct facial markings, resembling tribal face paint, which serve not only as a form of unique identification but also add to their striking appearance. These markings aid in distinguishing blesboks from other antelopes like hartebeest, sable antelope, and nyala. <br>",
		imageContainer: '<img src="antelope7.jpeg" alt="Antelope"> <br>'
    },
    {
        question: "What is the common method of defense for many antelope species when threatened by predators?",
        options: ["Sprinting away", "Charging at the predator", "Camouflaging in the grass", "Vocal warnings to others"],
        answer: 0,
        additionalInfo: "Antelopes commonly employ sprinting away as their primary defense against predators, utilizing their remarkable speed and agility for quick escapes, distinguishing this behavior as a key survival strategy among these species. <br>",
		imageContainer: '<img src="antelope8.jpeg" alt="Antelope"> <br>'
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