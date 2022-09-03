
//send message to background
chrome.runtime.sendMessage({name:"fetchWord"}, (response) => {
    // wait for response

    //update display on Content Script

    // document.querySelector("body").innerHTML = response.text;

    document.querySelector("h1").innerHTML = response.quotes;
    document.querySelector("p").innerHTML = response.auth;

});