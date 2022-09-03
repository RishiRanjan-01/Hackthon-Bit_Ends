



chrome.runtime.onMessage.addListener((msg,sender,response) => {
    if(msg.name == "playTrack"){
     
    let trackName = msg.track;
    console.log(trackName);
    let audFile = document.querySelector(".audio-element");
    // let aud_ele = document.createElement("audio");
    // aud_ele.src = "track1.mp3"
    console.log('track'+trackName+'.mp3');
    audFile.src = 'track'+trackName+'.mp3';
    aud_ele.play();
    }
    
})