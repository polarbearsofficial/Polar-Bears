function newImage(){
  var image = document.getElementById("myImage");
  if (image.src.match("assets/50pb_image.jpg")){
  image.src = "assets/33pb_image.jpg";
  } else {
  image.src = "assets/50pb_image.jpg";
  }
}

function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;

		if (question1 == "Ursus maritimus"){
				correct++;
	}

		if (question2 == "Carnivores"){
			correct++;
	}

		if (question3 == "25-30 years"){
			correct++;
	}

		if (question4 == "Vulnerable"){
		correct++;
	}

var messages = ["Great job!", "That's just okay", "You really need to do better"];
var pictures = ["assets/win.png", "assets/meh.png", "assets/fail.png"];

var range;

	if (correct <1){
		range = 2;
	}

	if (correct > 0 && correct < 4){
			range = 1;
	}

	if (correct > 2){
			range = 0;
	}

document.getElementById('after_submit').style.visibility = "visible"

document.getElementById('message').innerHTML = messages [range];
document.getElementById('number_correct').innerHTML = "You got " + correct + " correct.";
document.getElementById('picture').src = pictures [range];
}
