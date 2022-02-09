
// use speechRegocnintion API.
var SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var textbox = $("#textbox"); // define text box in html 
var content = ''; // define to content what we are looking for.

recognition.continuous = true; // 

recognition.onstart = function () {
    console.log("open")
}

recognition.onresult = function (event) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    content += transcript;
    textbox.val(content)
}

$('#start-btn').click(function (event) {
    console.log("yeeehhhh")
    if (content.lenght) {
        content += ''
    }
    recognition.start();
})

// $(document).ready(function(){



var searchBtn = document.getElementById("search-btn");

function search() {
    var searchBox = document.querySelector("#textbox").val();
    console.log(searchBox);
    alert("you clicked")
}

// })

