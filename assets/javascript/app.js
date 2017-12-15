$(document).ready(function() {
	var questions = [
		"In the comic books, Jane Foster is a nurse. What's her profession in the Marvel Cinematic Universe?",
		"What is the title of the second 'Avengers' movie?",
		"Forged in the heart of a dying star, what is Thor's hammer's name?", "What power source fuels Tony Stark's Iron Man suit?", 
		"What song does baby Groot dance to at the end of 'Guardians of the Galaxy'?",
		"What kind of food does Tony Stark suggest the Avengers eat after saving New York in 'The Avengers'?",
		"In which Marvel movie did Samuel L. Jackson first appear as Nick Fury?"
	];

	var answer1 = ["Medical Doctor", "Age of Infinity", "Mjolnir", "Lithium Ion Battery", "Uptight By Stevie Wonder", "Burritos", "Iron Man"];

	var answer2 = ["Physicist", "Civil War", "Fjordir", "Arc Reactor", "Wanna Be Startin' Something By Michael Jackson", "Shawarma", "Iron Man 2"];

	var answer3 = ["Geologist", "Age of Ultron", "Anduril", "The Tesseract", "I Want You Back By The Jackson Five","Pizza","The Incredible Hulk" ];

	var wrongImages = ["assets/images/wrong1.png","assets/images/wrong2.jpg","assets/images/wrong3.jpg","assets/images/wrong1.png",
	"assets/images/wrong2.jpg","assets/images/wrong3.jpg"];

	var rightImages = ["assets/images/jane.gif", "assets/images/ultron.gif", "assets/images/hammer.gif","assets/images/iron.gif",
	"assets/images/baby.gif","assets/images/food.gif", "assets/images/nick.gif"];

	var i = 0;

	var correctAnswers = ["Physicist", "Age of Ultron", "Mjolnir", "Arc Reactor","I Want You Back By The Jackson Five", "Shawarma", "Iron Man" ];

	var losses = 0;

	var wins = 0;
	var timeGone;
	var questionsRemain;








	function reset (){
		$("#body").text("");
		$("#heading").html("");
	}

	function restartGame(){
		clearTimeout(questionsRemain);
		i = 0; 
		wins = 0; 
		losses = 0; 
		setTimeout(nextQuestion, 10000)	;
	}

	function timeLost() {
		losses++; 
		$("#heading").html("<h1>You're Out of Time!</h1>");
		$("#body").append("<h1>The Correct Answer is: " + correctAnswers[i] + "</h1>");
		$("#body").append("<img src=" + wrongImages[i] + ">");
		i++;
		questionsRemain = setTimeout(nextQuestion, 10000);
		
	};

	function nextQuestion() {
		reset();
		timeGone = setTimeout(timeLost, 30000);
		if (i > questions.length - 1) {

			$("#heading").html("<h1>You've Finished the Game!</h1>");
			$("#body").append("<h2>Number of Correct Answers: " + wins + "</h2>");
			$("#body").append("<h2>Number of Incorrect Answers: " + losses + "</h2>")
			setTimeout(restartGame, 10000);
		} 
		$("#heading").html(questions[i]);
		$("#answer1").html(answer1[i]);
		$("#answer2").html(answer2[i]);
		$("#answer3").html(answer3[i]);

		$("#answer1").attr("value", answer1[i]);
		$("#answer2").attr("value", answer2[i]);
		$("#answer3").attr("value", answer3[i]);

		console.log($("#answer1").attr("value"));
		console.log($("#answer2").attr("value"));
		console.log($("#answer3").attr("value"));


		console.log([i]);



	};

	function pointAssigner() {
		if (correctAnswers.indexOf($(this).attr("value")) === -1) {
			
			losses++;
			$("#heading").html("<h1>Incorrect Answer!</h1>");
			$("#body").append("<h1>The Correct Answer is: " + correctAnswers[i] + "</h1>");
			$("#body").append("<img src=" + wrongImages[i] + ">");		
			clearTimeout(timeGone);
			i++;
			questionsRemain = setTimeout(nextQuestion, 10000);
			
		
		} else {
			
			wins++;
			$("#heading").html("<h1>Correct Answer!!!</h1>");
			$("#body").append("<img src=" + rightImages[i] + ">");
			clearTimeout(timeGone);
			i++;
			questionsRemain = setTimeout(nextQuestion,10000);
			
			
	
		}
	}


nextQuestion();
$(".option").on("click", pointAssigner);






























});