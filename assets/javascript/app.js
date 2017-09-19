//store question interval
var triviaQuestionInterval;
//http://www.gamesradar.com/50-best-pixar-easter-eggs/
//create trivia game object to hold game information
var triviaGame = {
	questionNumber: 0,
	score: 0,
	incorrect: 0,
	unanswered:0,
	questionTime: 10,
	remainingTime: 0,
	answerDisplayTime: 3000,
	gameOver: false,
	currentQuestion: null,
	usedQuestionArr: [],
	newQuestionArr: [{
			"question": "What was Syndrome's superhero name before he became a villan?",
			"answers": ["Rocket Boy", "Incrediboy", "Rocket Kid", "The Incredible Rocket"],
			"answerText": "Incrediboy",
			"questionImg": "assets/images/question_01.jpg",
			"answerImg": "assets/images/answer_01.jpg",
			"id": 1
		},
		{
			"question": "'But I don't wanna use my heaaaaaaaad!' - Toy Story 2",
			"answers": ["Buzz", "Mr. Potato Head", "Rex", "Hamm"],
			"answerText": "Rex",
			"questionImg": "assets/images/question_quote.jpg",
			"answerImg": "assets/images/answer_02.jpg",
			"id": 2
		},
		{
			"question": "What is Hamm's villan name in Andy's western play in Toy Story 3?",
			"answers": ["Mr. Chop", "Dr. Evil", "Mad Dog", "Evil Dr. Porkchop"],
			"answerText": "Evil Dr. Porkchop",
			"questionImg": "assets/images/question_03.jpg",
			"answerImg": "assets/images/answer_03.jpeg",
			"id": 3
		},
		{
			"question": "What is the name of the boy who harms toys for fun in Toy Story?",
			"answers": ["Sid", "Al", "Eddy", "Ned"],
			"answerText": "Sid",
			"questionImg": "assets/images/question_generic.jpg",
			"answerImg": "assets/images/answer_04.jpg",
			"id": 4
		},
		{
			"question": "In 'Finding Dory,' Dory is lucky to find a friend in a grumpy octopus with how many tentacles?",
			"answers": ["5", "7", "6", "8"],
			"answerText": "7",
			"questionImg": "assets/images/question_05.jpeg",
			"answerImg": "assets/images/answer_05.jpg",
			"id": 5
		},
		{
			"question": "'Look at me! I'm Woody! Howdy! Howdy! Howdy!' - Toy Story",
			"answers": ["Rex", "Slinky", "Hamm", "Shark"],
			"answerText": "Shark",
			"questionImg": "assets/images/question_quote.jpg",
			"answerImg": "assets/images/answer_06.gif",
			"id": 6
		},
		{
			"question": "'Not everyone can be a great artist, but a great artist can come from anywhere!'' - Ratatouille",
			"answers": ["Linguini", "Skinner", "Colette", "Anton Ego"],
			"answerText": "Anton Ego",
			"questionImg": "assets/images/question_quote.jpg",
			"answerImg": "assets/images/answer_07.jpg",
			"id": 7
		},
		{
			"question": "What is the name of this iconic Pixar lamp as seen in Wall-E's sculpture of Eve?",
			"answers": ["Luxo Jr.", "Pixo", "Ello", "Lumos"],
			"answerText": "Luxo Jr.",
			"questionImg": "assets/images/question_08.jpg",
			"answerImg": "assets/images/answer_08.jpg",
			"id": 8
		},
		{
			"question": "What Pixar movie is this Cars 2 scene referencing?",
			"answers": ["Ratatouille", "A Bug's Life", "Partly Cloudy", "UP"],
			"answerText": "Ratatouille",
			"questionImg": "assets/images/question_09.jpg",
			"answerImg": "assets/images/answer_09.png",
			"id": 9
		},
		{
			"question": "What is the name of the character hiding in this image?",
			"answers": ["Scully", "Boo", "Mike", "Randall"],
			"answerText": "Randall",
			"questionImg": "assets/images/question_10.jpg",
			"answerImg": "assets/images/answer_10.gif",
			"id": 10
		},
		{
			"question": "Which Supervillan from the Incredibles makes an appearance in Ratatouille as shown below?",
			"answers": ["Mr. Mime", "Bomb Voyage", "Le Bom", "Sans Visage"],
			"answerText": "Bomb Voyage",
			"questionImg": "assets/images/question_11.jpg",
			"answerImg": "assets/images/answer_11.jpeg",
			"id": 11
		},
		{
			"question": "A wooden carving of Sulley can be seen in this shack. What Pixar Movie is this from?",
			"answers": ["Brave", "Ratatouille", "The Good Dinosaur", "Wall-E"],
			"answerText": "Brave",
			"questionImg": "assets/images/question_12.jpg",
			"answerImg": "assets/images/answer_12.jpg",
			"id": 12
		},
		{
			"question": "What is the name of this teddy bear making a cameo in Up?",
			"answers": ["Mr. Huggs", "Luggs", "Bing Bong", "Lotso"],
			"answerText": "Lotso",
			"questionImg": "assets/images/question_13.jpg",
			"answerImg": "assets/images/answer_13.jpg",
			"id": 13
		},
		{
			"question": "What is the name of this ball which makes an appearance in all Pixar movies?",
			"answers": ["Luxo Ball", "Blink", "Cosmo Jr.", "Inc"],
			"answerText": "Luxo Ball",
			"questionImg": "assets/images/question_14.jpg",
			"answerImg": "assets/images/answer_14.png",
			"id": 14
		},
		{
			"question": "Which Pixar movie gave this sci-fi-themed pizza restaurant delivery truck its first debut?",
			"answers": ["Up", "The Incredibles", "Toy Story", "Finding Nemo"],
			"answerText": "Toy Story",
			"questionImg": "assets/images/question_15.jpg",
			"answerImg": "assets/images/answer_15.jpg",
			"id": 15
		},
		{
			"question": "'What a space port!' - Toy Story",
			"answers": ["Buzz", "Woody", "Rex", "Andy"],
			"answerText": "Buzz",
			"questionImg": "assets/images/question_quote.jpg",
			"answerImg": "assets/images/answer_16.png",
			"id": 16
		},
		{
			"question": "Which of the following, is Pixar's second film?",
			"answers": ["The Incredibles", "Cars", "Finding Nemo", "A Bug's Life"],
			"answerText": "A Bug's Life",
			"questionImg": "assets/images/question_generic.jpg",
			"answerImg": "assets/images/answer_17.jpg",
			"id": 17
		},
		{
			"question": "What is the name of this Monsters Inc. character?",
			"answers": ["Rhoda", "Roz", "Ms. Celia", "Flint"],
			"answerText": "Roz",
			"questionImg": "assets/images/question_18.jpg",
			"answerImg": "assets/images/answer_18.jpg",
			"id": 18
		},
		{
			"question": "What was the name of the Great White shark in Finding Nemo?",
			"answers": ["Crush", "Max", "Bruce", "Chad"],
			"answerText": "Bruce",
			"questionImg": "assets/images/question_19.jpg",
			"answerImg": "assets/images/answer_19.jpg",
			"id": 19
		},
		{
			"question": "'I never look back, darling. It distracts from the now.' - The Incredibles",
			"answers": ["Edna", "Violet", "Gilbert", "Mrs. Hogenson"],
			"answerText": "Edna",
			"questionImg": "assets/images/question_20.jpg",
			"answerImg": "assets/images/answer_20.jpg",
			"id": 20
		}
	],
	nextQuestion: function() {
				//if game is over display the start over page
		if (this.gameOver) {
			//hide game answer content
			$("#game-answer").addClass("d-none");
			//add game over content
			$("#game-over").removeClass("d-none");
			//add game counters
			$("#game-over-correct").text(this.score);
			$("#game-over-incorrect").text(this.incorrect);
			$("#game-over-unanswered").text(this.unanswered);
		}

		//display the next trivia question if game is not over
		if (!this.gameOver) {

			//check if newQuestion array only has one remaining element
			//if so, then set game over to true

			console.log(this.newQuestionArr.length);

			if (this.newQuestionArr.length === 1) {
				this.gameOver = true;
			}

			//randomly choose a question from the newQuestionArr
			var randomQuestionIndex = Math.floor(Math.random() * this.newQuestionArr.length);
			//assign this question to the currentQuestion triviaGame variable
			this.currentQuestion = this.newQuestionArr[randomQuestionIndex];
			//add the randomly selected question to the usedQuestionArr
			this.usedQuestionArr.push(this.currentQuestion);
			//remove the used question from newQuestionArr
			var removeID = this.currentQuestion.id;
			this.newQuestionArr = this.newQuestionArr.filter(function(question) {
				return question.id !== removeID;
			});
			console.log(this);



			//Add randomly selected question content to page
			$("#trivia-question").text(this.currentQuestion.question);
			$("#trivia-question-img").attr("src", this.currentQuestion.questionImg);

			var questionAnswers = this.currentQuestion.answers;
			$("#trivia-question-answers").children().each(function(index) {
				$(this).text(questionAnswers[index]);
			});
			//reset timer and update question counter
			this.remainingTime = this.questionTime;
			this.questionNumber++;

			//Set Score, Time and Counter variables
			$("#question-number").text(this.questionNumber);
			$("#timer").text(this.remainingTime);
			$("#score").text(this.score);

			//hide game answer content
			$("#game-answer").addClass("d-none");
			//add game question content
			$("#game-question").removeClass("d-none");
			// start the question interval
			triviaQuestionInterval = setInterval(this.startTimer.bind(this), 1000);
		}



	},
	showAnswer: function(answer) {
		//stop the question interval counter
		clearInterval(triviaQuestionInterval);

		console.log(answer);

		//Hide all question html from page
		$("#game-question").addClass("d-none");
		//Show answer html
		$("#game-answer").removeClass("d-none");
		//remove all classes for anwswer format
		$("#answer-result").removeClass("correct incorrect unanswered");


		var answerString = this.currentQuestion.answerText;
		if (answer === "timeout") {
			//Show answer result as 'You ran out of time!' and show answer text 
			$("#answer-result").text("You ran out of time!");
			$("#answer-text").removeClass("d-none");
			$("#answer-result").addClass("unanswered");
			//increase unanswered counter
			this.unanswered++;
		}else if (answer !== this.currentQuestion.answerText) {
			//Show answer result as Nope! and show answer text
			$("#answer-result").text("Nope!");
			$("#answer-text").removeClass("d-none");
			$("#answer-result").addClass("incorrect");
			//increase incorrect counter
			this.incorrect++;
		}

		//Show answer result as correct and hide answer text
		if (answer.toLowerCase() === answerString.toLowerCase()) {
			$("#answer-result").text("Correct!");
			$("#answer-text").addClass("d-none");
			$("#answer-result").addClass("correct");
			//update score counter
			this.score++;
			$("#score").text(this.score);
		}

		//populate correct answer text with the answer for the question
		$("#correct-answer").text(answerString);
		//Show correct answer image regardless of answer-result
		$("#trivia-answer-img").attr("src", this.currentQuestion.answerImg);

		//wait a 5 seconds then show next question
		setTimeout(this.nextQuestion.bind(this), this.answerDisplayTime);

	},
	startGame: function() {
		//hide the start page content
		$("#game-start").addClass("d-none");
		//add game counter and timer content
		$("#counter-timer").removeClass("d-none");

		//Show question and start question timer
		this.nextQuestion();
		//start the game counter
		//triviaQuestionInterval = setInterval(this.startTimer.bind(this), 1000);

	},
	startTimer: function() {
		//Decrease timer if time is greater than 0
		//Otherwise, stop timer and display answer 
		if (this.remainingTime > 0) {
			this.remainingTime--;
			$("#timer").text(this.remainingTime);
		} else {
			//display the answer because time ran out
			//pass string "timeout" to let the answer know no answer was selected
			this.showAnswer("timeout");
		}

	},
	startOver: function(){
		// reset counters
		this.score = 0;
		this.incorrect = 0;
		this.unanswered = 0;
		this.questionNumber = 0;
		this.remainingTime = 0;

		//set game over to false
		this.gameOver = false;

		//give all used questions back to used questions array
		this.newQuestionArr = this.usedQuestionArr;

		//empty used questions array
		this.usedQuestionArr = [];

		//Hide game over page
		$("#game-over").addClass("d-none");

		this.startGame();
	}

};


// Wait for document load before running events
$(document).ready(function() {
	//start game when the start game button is clicked
	$("#start-btn").on("click", triviaGame.startGame.bind(triviaGame));
	//show answer once question answer is selected by the player
	$(".trivia-question-answer-item").on("click", function(){
		var answer = $(this).text();
		triviaGame.showAnswer(answer);
	});

	$("#start-over-btn").on("click", triviaGame.startOver.bind(triviaGame));


});