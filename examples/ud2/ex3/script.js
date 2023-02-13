window.addEventListener("load", (e) => {
    let videoPlayButtons = document.getElementsByClassName("video-play-btn");
    let videoStopButtons = document.getElementsByClassName("video-stop-btn");
    let videoVolumenCtrls = document.getElementsByClassName("video-volumen-ctrl");
    let videoTimeCtrls = document.getElementsByClassName("video-time-ctrl");
    let videoMuteBtns = document.getElementsByClassName("video-mute-btn");

    for (let videoPlayButton of videoPlayButtons) {
        videoPlayButton.addEventListener("click", playBtn);
    }

    for (let videoStopButton of videoStopButtons) {
        videoStopButton.addEventListener("click", stopBtn);
    }

    for (let videoVolumenCtrl of videoVolumenCtrls) {
        videoVolumenCtrl.value = getVideoElement(videoVolumenCtrl).volume * 100;
        videoVolumenCtrl.addEventListener("input", changeVolumen);
    }

    for (let videoTimeCtrl of videoTimeCtrls) {
        let video = getVideoElement(videoTimeCtrl);
        videoTimeCtrl.value = video.currentTime;
        videoTimeCtrl.min = 0;

        video.addEventListener("loadedmetadata", ()=>{
            videoTimeCtrl.max = video.duration;
        })

        videoTimeCtrl.max = video.duration;

        video.addEventListener("timeupdate", (event) => {
            videoTimeCtrl.value = video.currentTime;
        });

        videoTimeCtrl.addEventListener("input", changeTime);
        videoTimeCtrl.addEventListener("click", saveOgTime);
        videoTimeCtrl.dataset.prevTime = videoTimeCtrl.value;
    }

    for (let videoMuteBtn of videoMuteBtns) {
        videoMuteBtn.addEventListener("click", muteVideo);
    }
});

function playBtn(event) {
    let video = getVideoElement(this);


    if (video.paused) {
        video.play();
        this.firstElementChild.className = "fas fa-pause";
        notificarAccionVideo(video, "fas fa-play");
    } else {
        video.pause();
        this.firstElementChild.className = "fas fa-play";
        notificarAccionVideo(video, "fas fa-pause");
    }
}

function stopBtn(event) {
    let video = getVideoElement(this);

    video.currentTime = 0;
    video.pause();
    this.parentElement.getElementsByClassName("video-play-btn")[0].firstElementChild.className = "fas fa-play";
    this.parentElement.getElementsByClassName("video-time-ctrl")[0].dataset.prevTime = 0;
    notificarAccionVideo(video, "fas fa-stop");
}

function changeVolumen(event) {
    let video = getVideoElement(this);
    let volumeIndicator = this.parentElement.getElementsByClassName("video-mute-btn")[0];
    let vol = this.value / 100;
    video.volume = vol;
    
    if (vol == 0) {
        volumeIndicator.firstElementChild.className = "fas fa-volume-mute";
        notificarAccionVideo(video, "fas fa-volume-mute");
    } else if (vol < 0.5) {
        volumeIndicator.firstElementChild.className = "fas fas fa-volume-down";
        notificarAccionVideo(video, "fas fas fa-volume-down");
    } else {
        volumeIndicator.firstElementChild.className = "fas fa-volume-up";
        notificarAccionVideo(video, "fas fas fa-volume-up");
    }
}


function muteVideo(event) {
    let video = getVideoElement(this);
    let volumeCtrl = this.parentElement.getElementsByClassName("video-volumen-ctrl")[0];
    
    if (video.volume == 0) {
        this.firstElementChild.className = "fas fa-volume-up";
        video.volume = 1;
        volumeCtrl.value = 100;
        notificarAccionVideo(video, "fas fas fa-volume-up");
    } else {
        this.firstElementChild.className = "fas fa-volume-mute";
        notificarAccionVideo(video, "fas fas fa-volume-mute");
        video.volume = 0;
        volumeCtrl.value = 0;
    }
}

function changeTime(event) {
    let video = getVideoElement(this);
    video.currentTime = this.value;

    let intValue = parseInt(this.value);
    let intPrevTime= parseInt(this.dataset.prevTime);

    //Calculate if the user is forwarding or going backwards on the video.
    if(intValue > intPrevTime){
        notificarAccionVideo(video, "fas fa-forward");
    } else if (intValue < intPrevTime){
        notificarAccionVideo(video, "fas fa-backward");
    }
}

function saveOgTime(event){
    this.dataset.prevTime = getVideoElement(this).currentTime;
}

/**
 * 
 * @param {HTMLMediaElement} videoElement 
 * @param {String} action 
 */
function notificarAccionVideo(videoElement, icon) {
    //Remove previous action
    let prevAction = videoElement.parentElement.getElementsByClassName("action");
    if (prevAction.length != 0) {
        videoElement.parentElement.removeChild(prevAction[0]);
    }

    //Add new one
    let actionWrapper = document.createElement("div");
    actionWrapper.className = "action";

    actionWrapper.innerHTML += `<i class="${icon}"></i>`;
    videoElement.parentElement.appendChild(actionWrapper);
}

function getVideoElement(videoButtonElement) {
    return videoButtonElement.parentElement.previousElementSibling.getElementsByTagName("video")[0];
}