
// const play = () => {
// 	videoPlayer.play()
// }

// const pause = (videoPlayer) => {
// 	videoPlayer.pause()
// }

// const stop = (videoPlayer) => {
// 	videoPlayer.pause();
// 	videoPlayer.currentTime = 0;
// }

// const speedUp = (videoPlayer) => {
// 	videoPlayer.play();
// 	videoPlayer.playbackRate = 2; 
// }

// const speedDown = (videoPlayer) => {
// 	videoPlayer.play();
// 	videoPlayer.playbackRate = 0.5; 
// }

// const speedNormal = (videoPlayer) => {
// 	videoPlayer.play();
// 	videoPlayer.playbackRate = 1; 
// }

// const progressUpdate = (videoPlayer, progress, timeOut) => {
// 	let duration = videoPlayer.duration,
// 			currentTime = videoPlayer.currentTime

// 	if (!currentTime == 0) {
// 		progress.value = (currentTime / duration) * 100;
// 	}

// 	timeOut.innerHTML = videoPlayer.currentTime;
// }

// function volume(videoPlayer) {
// 	let vol = videoPlayer.value;
// 	videoPlayer.volume = vol / 100;
// }

// function videoRewind() {
// 	let widthProgress = progress.offsetWidth,
// 			positionOffset = event.offsetX

// 	videoPlayer.pause();
// 	videoPlayer.currentTime = videoPlayer.duration * (positionOffset / widthProgress);
// 	videoPlayer.play();
// }


const videoPlayerItems = Array.from(document.querySelectorAll('.video'))

videoPlayerItems.forEach((videoPlayerItem, index) => {
	const videoPlayer 		= videoPlayerItem.querySelector('.video-player')
				btnPlay 				= videoPlayerItem.querySelector('#play'),
				btnPause 				= videoPlayerItem.querySelector('#pause'),
				btnStop 				= videoPlayerItem.querySelector('#stop'),
				btnSpeedUp			= videoPlayerItem.querySelector('#speed-up'),
				btnSpeedDown 		= videoPlayerItem.querySelector('#speed-down'),
				btnSpeedNormal 	= videoPlayerItem.querySelector('#speed-normal'),
				btnVolume 			= videoPlayerItem.querySelector('#volume'),
				timeOut 				= videoPlayerItem.querySelector('#out'),
				progress 				= videoPlayerItem.querySelector('#progress'),
				display 				= ''

				
	const play = () => {
		videoPlayer.play()
	}

	const pause = () => {
		videoPlayer.pause()
	}
	
	const stop = () => {
		videoPlayer.pause();
		videoPlayer.currentTime = 0;
	}
	
	const speedUp = () => {
		videoPlayer.play();
		videoPlayer.playbackRate = 2; 
	}
	
	const speedDown = () => {
		videoPlayer.play();
		videoPlayer.playbackRate = 0.5; 
	}
	
	const speedNormal = () => {
		videoPlayer.play();
		videoPlayer.playbackRate = 1; 
	}

	function volume() {
		let vol = videoPlayer.value;

		if (!vol == 0) {
			videoPlayer.volume = vol / 100;
		}
	}

	/* При клике на прогрессбар воспроизводит видео на момент клика */
	function videoRewind(event) {
		let widthProgress = videoPlayer.offsetWidth,
				positionOffset = event.offsetX
	
		videoPlayer.pause();
		videoPlayer.currentTime = videoPlayer.duration * (positionOffset / widthProgress);
		videoPlayer.play();
	}
	
	// Обновляет полосу просмотренного видео
	function progressUpdate() {
		let duration = videoPlayer.duration,
				currentTime = videoPlayer.currentTime
	
		if (!currentTime == 0) {
			progress.value = (currentTime / duration) * 100;
		}
	
		timeOut.innerHTML = videoPlayer.currentTime;
	}

	progressUpdate()

	btnPlay.addEventListener('click', play);
	btnPause.addEventListener('click', pause);
	btnStop.addEventListener('click', stop);
	btnSpeedUp.addEventListener('click', speedUp);
	btnSpeedDown.addEventListener('click', speedDown);
	btnSpeedNormal.addEventListener('click', speedNormal);
	btnVolume.addEventListener('input', volume);
	progress.addEventListener('click', videoRewind);

	videoPlayer.ontimeupdate = progressUpdate;
})


