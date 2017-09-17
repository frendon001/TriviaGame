

//store interval for game
var triviaCounterInterval;

//store question interval
var triviaQuestionInterval;
//http://www.gamesradar.com/50-best-pixar-easter-eggs/
//create trivia game object to hold game information
var triviaGame = {
	questionNumber: 1,
	score: 0,
	remainingTime: 10,
	currentQuestion: null,
	usedQuestionArr: [],
	newQuestionArr: [
		{ 
			"question": "What was Syndrome's superhero name before he became a villan?",
			"answers": ["Rocket Boy", "Incrediboy", "Rocket Kid", "The Incredible Rocket"],
			"answerText": "Incrediboy",
			"question-img": "assets/images/question_01.jpg",
			"answer-img": "assets/images/answer_01.jpg",
			"id": 1
		},
		{ 
			"question": "'But I don't wanna use my heaaaaaaaad! - Toy Story 2",
			"answers": ["Buzz", "Mr. Potato Head", "Rex", "Hamm"],
			"answerText": "Rex",
			"question-img": "assets/images/question_quote.jpg",
			"answer-img": "assets/images/answer_02.jpg",
			"id": 2
		},
		{ 
			"question": "What is Hamm's villan name in Andy's western play in Toy Story 3?",
			"answers": ["Mr. Porkchop", "Dr. Evil", "Mad Dog", "Evil Dr. Porkchop"],
			"answerText": "Evil Dr. Porkchop",
			"question-img": "assets/images/question_03.jpg",
			"answer-img": "assets/images/answer_03.jpg",
			"id": 3
		},
		{ 
			"question": "What is the name of the boy who harms toys for fun in Toy Story?",
			"answers": ["Sid", "Al", "Eddy", "Ned"],
			"answerText": "Sid",
			"question-img": "assets/images/question_generic.jpg",
			"answer-img": "assets/images/answer_04.jpg",
			"id": 4
		},
		{ 
			"question": "In 'Finding Dory,' Dory is lucky to find a friend in a grumpy octopus with how many tentacles?",
			"answers": ["5", "7", "6", "8"],
			"answerText": "7",
			"question-img": "assets/images/question_05.jpg",
			"answer-img": "assets/images/answer_05.jpg",
			"id": 5
		},
		{ 
			"question": "'Look at me! I'm Woody! Howdy! Howdy! Howdy! - Toy Story",
			"answers": ["Rex", "Slinky", "Hamm", "Shark"],
			"answerText": "Shark",
			"question-img": "assets/images/question_quote.jpg",
			"answer-img": "assets/images/answer_06.jpg",
			"id": 6
		},
		{ 
			"question": "'Not everyone can be a great artist, but a great artist can come from anywhere!'' - Ratatouille",
			"answers": ["Linguini", "Skinner", "Colette", "Anton Ego"],
			"answerText": "Anton Ego",
			"question-img": "assets/images/question_quote.jpg",
			"answer-img": "assets/images/answer_07.jpg",
			"id": 7
		},
		{ 
			"question": "What is the name of this Pixar lamp as seen in Wall-E's sculpture of Eve?",
			"answers": ["Luxo Jr.", "Pixo", "Ello", "Lumos"],
			"answerText": "Luxo Jr.",
			"question-img": "assets/images/question_08.jpg",
			"answer-img": "assets/images/answer_08.jpg",
			"id": 8
		},
		{ 
			"question": "What Pixar movie is this Cars 2 scene referencing?",
			"answers": ["Ratatouille", "A Bug's Life", "Partly Cloudy", "UP"],
			"answerText": "Ratatouille",
			"question-img": "assets/images/question_09.jpg",
			"answer-img": "assets/images/answer_09.jpg",
			"id": 9
		},
		{ 
			"question": "What is the name of the character hiding in this image?",
			"answers": ["Scully", "Boo", "Mike", "Randall"],
			"answerText": "Randall",
			"question-img": "assets/images/question_10.jpg",
			"answer-img": "assets/images/answer_10.jpg",
			"id": 10
		},
		{ 
			"question": "Which Supervillan from the Incredibles makes an appearance in Ratatouille as shown below?",
			"answers": ["Mr. Mime", "Bomb Voyage", "Le Bom", "Sans Visage"],
			"answerText": "Bomb Voyage",
			"question-img": "assets/images/question_11.jpg",
			"answer-img": "assets/images/answer_11.jpg",
			"id": 11
		},
		{ 
			"question": "A wooden carving of Sulley can be seen in this shack. What Pixar Movie is this from?",
			"answers": ["Brave", "Ratatouille", "The Good Dinosaur", "Wall-E"],
			"answerText": "Brave",
			"question-img": "assets/images/question_12.jpg",
			"answer-img": "assets/images/answer_12.jpg",
			"id": 12
		},
		{ 
			"question": "What is the name of this teddy bear making a cameo in Up?",
			"answers": ["Mr. Huggs", "Luggs", "Bing Bong", "Lotso"],
			"answerText": "Lotso",
			"question-img": "assets/images/question_13.jpg",
			"answer-img": "assets/images/answer_13.jpg",
			"id": 13
		},
		{ 
			"question": "What is the name of this ball which makes in appearance in all Pixar movies?",
			"answers": ["Luxo Ball", "Blink", "Cosmo Jr.", "Inc"],
			"answerText": "Luxo Ball",
			"question-img": "assets/images/question_14.jpg",
			"answer-img": "assets/images/answer_14.jpg",
			"id": 14
		},
		{ 
			"question": "Which Pixar movie gave this sci-fi-themed pizza restaurant delivery truck its first debut?",
			"answers": ["Up", "The Incredibles", "Toy Story", "Finding Nemo"],
			"answerText": "Toy Story",
			"question-img": "assets/images/question_15.jpg",
			"answer-img": "assets/images/answer_15.jpg",
			"id": 15
		},
		{ 
			"question": "'What a space port!' - Toy Story?", 
			"answers": ["Buzz", "Woody", "Rex", "Andy"],
			"answerText": "Buzz",
			"question-img": "assets/images/question_quote.jpg",
			"answer-img": "assets/images/answer_16.jpg",
			"id": 16
		},
		{ 
			"question": "What was pixar's second film?",
			"answers": ["The Incredibles", "Cars", "Finding Nemo", "A Bug's Life"],
			"answerText": "A Bug's Life",
			"question-img": "assets/images/question_generic.jpg",
			"answer-img": "assets/images/answer_17.jpg",
			"id": 17
		},
		{ 
			"question": "What is the name of this Monsters Inc. character?",
			"answers": ["Rhoda", "Roz", "Ms. Celia", "Flint"],
			"answerText": "Roz",
			"question-img": "assets/images/question_18.jpg",
			"answer-img": "assets/images/answer_18.jpg",
			"id": 18
		},
		{ 
			"question": "What was the name of the Great White shark in Finding Nemo?",
			"answers": ["Crush", "Max", "Bruce", "Chad"],
			"answerText": "Bruce",
			"question-img": "assets/images/question_19.jpg",
			"answer-img": "assets/images/answer_19.jpg",
			"id": 19
		},
		{ 
			"question": "'I never look back, darling. It distracts from the now.' –The Incredibles",
			"answers": ["Edna", "Violet", "Gilbert", "Mrs. Hogenson"],
			"answerText": "Edna",
			"question-img": "assets/images/question_20.jpg",
			"answer-img": "assets/images/answer_20.jpg",
			"id": 20
		}
	],
	nextQuestion: function(){
		//display the next trivia question
		
		//randomly choose a question from the newQuestionArr
		var randomQuestionIndex = Math.floor(Math.random()*this.newQuestionArr.length);
		//assign this question to the currentQuestion triviaGame variable
		this.currentQuestion = this.newQuestionArr[randomQuestionIndex];
		//add the randomly selected question to the usedQuestionArr
		this.usedQuestionArr.push(this.currentQuestion);
		//remove the used question from newQuestionArr
		var removeID = this.currentQuestion.id;
		this.newQuestionArr = this.newQuestionArr.filter(function(question){
  				return question.id !== removeID;
			});
		console.log(this);
		

	},
	startGame: function() {

		
		//hide the start page content
		$("#game-start").addClass("d-none");
		//add game counter and timer content
		$("#counter-timer").removeClass("d-none");
		//add game question contnet
		$("#game-question").removeClass("d-none");
		//Set Score, Time and Counter variables
		$("#question-number").text(this.questionNumber);
		$("#timer").text(this.remainingTime);
		$("#score").text(this.score);
		//add question to trivia page
		this.nextQuestion();
		//start the game counter
		triviaCounterInterval = setInterval(this.startTimer.bind(this),1000);

	},
	startTimer: function() {
		//Decrease timer if time is greater than 0
		//Otherwise, stop timer and display answer 
		if (this.remainingTime > 0) {
			this.remainingTime--;
			$("#timer").text(this.remainingTime);
		}else{
			clearInterval(triviaCounterInterval);

		}
		
		
	},
	showAnswer: function() {
		//hide all question html from page
		$("#game-question").addClass("d-none");
		//show answer html
		$("#game-answer").removeClass("d-none");
	}



};


// Wait for document load before calling/running events
$(document).ready(function() {
	//start game when the start game button is clicked
	$("#start-btn").on("click", triviaGame.startGame.bind(triviaGame));


});