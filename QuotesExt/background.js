

//listen message;

const getQuotes = async() => {
    
    const res = await fetch("https://zenquotes.io/api/random");

    const data = res.json();

    return data;
}

const getNumber = (number) => {
    const max = number+1
    return Math.floor(Math.random()*Math.floor(max));
}

chrome.runtime.onMessage.addListener((msg,sender,response) => {
    if(msg.name == "fetchWord"){
       
       var wordsObj = [
        "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that",
        "We write to taste life twice, in the moment and in retrospect.",
        "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
        "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        "One day I will find the right words, and they will be simple.",
        "Either write something worth reading or do something worth writing.",
        "You never have to change anything you got up in the middle of the night to write.",
        "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
        "You must stay drunk on writing so reality cannot destroy you.",
        "Words can be like X-rays if you use them properly -- they'll go through anything. You read and you're pierced."
    ]

       var authObj = [
        "--Stephen King",
        "--Anaïs Nin",
        "--Mark Twain",
        "--Toni Morrison",
        "--Jack Kerouac, The Dharma Bums",
        "--Benjamin Franklin",
        "--Saul Bellow",
        "--Robert Frost",
        "--Ray Bradbury, Zen in the Art of Writing",
        "--Aldous Huxley, Brave New World"
       ]

       const number = getNumber(10);

       response({quotes:wordsObj[number],auth:authObj[number]})

    }
    
})