class altp {
	constructor(file){
		this.ui = new ui();
		this.ui.ShowScreen("welcome_screen");
		
		this.background_sound = new sound('bg(02).mp3');
		this.background_sound.StartMusic();
	}
}
var game = new altp();