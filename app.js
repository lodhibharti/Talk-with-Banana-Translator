alert("Hello.!!")
var userName=prompt("give your name");
alert("welcome "+ userName);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input)
{
   serverURL + "?" + "Text=" + input
}

function errorHandler(error) {
   alert("Server is not responding currently! Try again after some time.");
}

function clickHandler()
var inputText = txtInput.value;
fetch (getTranslationURL(inputText))
.then (Response=> Response.json())
.then (json =>{
   var translatedText = json.contents.translated;
   outputDiv.innerText = translatedText;
})
.catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)

