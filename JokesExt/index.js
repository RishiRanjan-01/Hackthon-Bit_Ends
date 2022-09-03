const getJokes = async () => {
    try{
        const res = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await res.json();
        const myJoke = document.querySelector("#joke");
        myJoke.append(data.value)
    }
    catch(err){
        console.log(err);
    }
}

window.addEventListener("load", () => {
    getJokes();
})