const btnPlay = document.querySelector('#play'),
			btnPause = document.querySelector('#pause'),
			btnStop = document.querySelector('#stop'),
			btnSpeedUp = document.querySelector('#speed-up'),
			btnSpeedDown = document.querySelector('#speed-down'),
			btnSpeedNormal = document.querySelector('#speed-normal'),
			btnVolume = document.querySelector('#volume'),
			timeOut = document.querySelector('#out')


let video = document.querySelector('#video-player'),
		progress = document.querySelector('#progress'),
		display


const play = () => {
	video.play()
}

const pause = () => {
	video.pause()
}

const stop = () => {
	video.pause();
	video.currentTime = 0;
}

const speedUp = () => {
	video.play();
	video.playbackRate = 2; 
}

const speedDown = () => {
	video.play();
	video.playbackRate = 0.5; 
}

const speedNormal = () => {
	video.play();
	video.playbackRate = 1; 
}

const progressUpdate = () => {
	// console.log(video.currentTime);
	let duration = video.duration,
			currentTime = video.currentTime

	progress.value = (currentTime / duration) * 100;

	timeOut.innerHTML = video.currentTime;
}

function volume() {
	let vol = this.value;
	video.volume = vol / 100;
}

function videoRewind(event) {
	let widthProgress = this.offsetWidth,
			positionOffset = event.offsetX

	// this.value = 100 * (positionOffset / widthProgress);
	video.pause();
	video.currentTime = video.duration * (positionOffset / widthProgress);
	video.play();
	// console.log(widthProgress);
	console.log(positionOffset);
}


btnPlay.addEventListener('click', play);
btnPause.addEventListener('click', pause);
btnStop.addEventListener('click', stop);
btnSpeedUp.addEventListener('click', speedUp);
btnSpeedDown.addEventListener('click', speedDown);
btnSpeedNormal.addEventListener('click', speedNormal);
btnVolume.addEventListener('input', volume);
progress.addEventListener('click', videoRewind)

video.ontimeupdate = progressUpdate;



