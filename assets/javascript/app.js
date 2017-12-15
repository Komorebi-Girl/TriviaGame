$(document).ready(function() {
	var questions = [
		"In the comic books, Jane Foster is a nurse. What's her profession in the Marvel Cinematic Universe?",
		"What is the title of the second 'Avengers' movie?",
		"Forged in the heart of a dying star, what is Thor's hammer's name?"
	];

	var answer1 = ["Medical Doctor", "Age of Infinity", "Mjolnir"];

	var answer2 = ["Physicist", "Civil War", "Fjordir"];

	var answer3 = ["Geologist", "Age of Ultron", "Anduril"];

	var wrongImages = ["assets/images/wrong1.png","assets/images/wrong2.jpg","assets/images/wrong3.jpg"];

	var rightImages = ["assets/images/jane.gif"];

	var i = 0;

	var correctAnswers = ["Physicist", "Age of Ultron", "Mjolnir"];

	var losses = 0;

	var wins = 0;
	var timeGone;
	var questionsRemain;
	// var cycles = setInterval(nextQuestion, 20000);
	// var clear = setInterval(reset,35000);







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


// Use booleans to stop things when you run out of questions



























});