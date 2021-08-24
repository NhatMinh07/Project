class sound {
	constructor(file_name){
		this.file_name = file_name;
		this.loaded = false;
		this.audio = new Audio(this.file_name);
		this.audio.addEventListener('canplaythrough', () => {
			this.loaded = true;
		});
	}
	StartMusic(onend_callback){
		if(this.loaded){
			this.audio.play();
			if(typeof onend_callback == 'function'){
				this.audio.onended = onend_callback;
			}
			
		}
	}
	StopMusic(){
		this.audio.pause();
	}

}

