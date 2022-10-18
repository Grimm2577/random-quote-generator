const quote = document.querySelector(".quote");
const author = document.querySelector(".authorName");
const quote_btn = document.querySelector(".nextQuote");
const tweet_btn = document.querySelector(".twitter");

function nextQuote() {
    fetch("https://type.fit/api/quotes").then(res => res.json()).then(result =>{
        
        let randomQuote = Math.floor(Math.random() * result.length);

        console.log(result[randomQuote]);
        quote.innerText = result[randomQuote].text
        author.innerText = result[randomQuote].author
    });
}


function tweetQuote() {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweetUrl, "_blank");
}


quote_btn.addEventListener("click", nextQuote);

tweet_btn.addEventListener("click", tweetQuote);