// https://api.quotable.io/random
const newQuoteButton=document.getElementById("new-quote");
const Twitter=document.getElementById("tweet-quote");
const scipe=document.getElementById("tumblr-quote");
const g=document.getElementsByClassName("fa-quote-left")[0];
const quoteText=document.getElementById("text");
const authorText=document.getElementById("author");
newQuoteButton.style.color="red";
async function getQuote(){
    const response=await(await fetch ("https://api.quotable.io/random")).json();
    const{content,author}=response;
    document.getElementById(
		"tweet-quote"
	).href = `https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
		content
	)}"${encodeURIComponent(" " ,author)}`;
	document.getElementById(
		"tumblr-quote"
	).href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
		author
	)}&content=${encodeURIComponent(
		content
	)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    const color=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
    document.body.style.backgroundColor=color;
   newQuoteButton.style.backgroundColor=color;
   quoteText.style.color=color;
   authorText.style.color=color;
   newQuoteButton.style.color="white";
   Twitter.style.backgroundColor=color;
   scipe.style.backgroundColor=color;
   Twitter.style.color="white";
   scipe.style.color="white";
   g.style.color=color;
   authorText.style.opacity=0;
   quoteText.style.opacity=0;

setTimeout(function Time(){
    quoteText.textContent=content;
    authorText.textContent=author;
    console.log("m");
    authorText.style.opacity=1;
    quoteText.style.opacity=1;
}, 500)

}

getQuote();
newQuoteButton.addEventListener("click",getQuote);