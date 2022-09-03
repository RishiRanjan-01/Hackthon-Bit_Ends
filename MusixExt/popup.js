
console.log("hello");
document.querySelector("button").addEventListener("click", function(){
    let selTrack = document.querySelector("select").value;

    console.log(selTrack);

    chrome.runtime.sendMessage({name:"playTrack", track:selTrack});

})