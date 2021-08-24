congratulation_messages=[
	{
		Vietnamese: "Chúc mừng bạn đã vượt qua câu hỏi số ",
		English: "Congratulation! You have passed question number "
	},
	{
		Vietnamese: "Thật tuyệt vời! Bạn đã hoàn thành câu hỏi số ",
		English: "That's Amazing! You have overcome question number "
	},
	{
		Vietnamese: "Một câu hỏi khó nhưng bạn đã đúng.",
		English: "It's a tough question but you're right."
	},
	{
		Vietnamese: "Rất xuất sắc! Chúc bạn may mắn ở câu hỏi tiếp theo.",
		English: "Excellent! Wish you to win the next question."
	},
]
class ui{
	constructor(){

	}
	ShowScreen(screen_name){
		let screens = document.querySelectorAll('#wrapper > div');
		screens.forEach( (screen) => {
			screen.style.display = 'none';
		});

		let current_screen = document.getElementById(screen_name);
		current_screen.style.display = "block";

	}
	OnStartButtonClick(callback){
		let start_button = document.getElementById('start_button');
		start_button.addEventListener('click', callback);
	}
	OnContinueButtonClick(callback){
		let continue_button = document.getElementById('continue_button');
		continue_button.addEventListener('click', callback);
	}
	OnResetButtonClick(callback){
		let reset_button = document.getElementById('reset_button');
		reset_button.addEventListener('click', callback);
	}
	OnWinButtonClick(callback){
		let win_button = document.getElementById('win_button');
		win_button.addEventListener('click', callback);
	}
	ShowQuestion(question,quesnum){
		// console.log(question);
		quesnum+=1;
		document.getElementById('question').innerHTML = question.question;
		document.getElementById('answer1').innerHTML = question.answers[0];
		document.getElementById('answer2').innerHTML = question.answers[1];
		document.getElementById('answer3').innerHTML = question.answers[2];
		document.getElementById('answer4').innerHTML = question.answers[3];
		document.getElementById('quesnum').innerHTML = "Question " + quesnum;
	}
	ShowCongratulationScreen(quesnum){
		var min = 0;
		var max = 3;
		var random_int = Math.floor(Math.random()*(max-min+1)+min);
		if ( random_int <=1 ){
			// document.getElementById('VNcongratulation_message').innerHTML = congratulation_messages[random_int].Vietnamese + quesnum;
			document.getElementById('ENGcongratulation_message').innerHTML = congratulation_messages[random_int].English + quesnum;
		}
		else{
			// document.getElementById('VNcongratulation_message').innerHTML = congratulation_messages[random_int].Vietnamese;
			document.getElementById('ENGcongratulation_message').innerHTML = congratulation_messages[random_int].English;
		}
	}
	ShowLoseScreen(){
		document.getElementById('ENGlose_message').innerHTML = "Let's try again";
	}
	ShowWinScreen(){
		document.getElementById('ENGwin_message').innerHTML = "You won !";
	}
	OnClickAnswer(callback){
		document.getElementById('answer1').addEventListener('click',() => callback(0) );
		document.getElementById('answer2').addEventListener('click',() => callback(1) );
		document.getElementById('answer3').addEventListener('click',() => callback(2) );
		document.getElementById('answer4').addEventListener('click',() => callback(3) );
	}
	SetSelectedAnswer(answer){
		let answer_index = answer + 1;
		let answer_div = document.getElementById('answer' + answer_index);
		answer_div.style.backgroundColor = '#2352DC';
		answer_div.style.color = 'white';
	}
	ShowResult(current_answer,correct_answer){
		let current_answer_index = current_answer + 1;
		let correct_answer_index = correct_answer + 1;
		document.getElementById('answer' + current_answer_index).style.backgroundColor='red';
		
		document.getElementById('answer' + correct_answer_index).style.backgroundColor='green';
	}
	ResetAnswerStyle(){
		for (let i=1;i<=4;i++){
			document.getElementById('answer'+i).style.backgroundColor = '#040404';
		}
	}
}
