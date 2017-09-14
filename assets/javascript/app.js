// Wait for document load before calling/running events
$(document).ready(function() {



};

//store interval for game
var triviaGameInterval;

//create trivia game object to hold game information
var triviaGame = {
	questionCount = 0,
	score: 0,

}
