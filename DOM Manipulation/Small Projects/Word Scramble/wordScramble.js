const wordText = document.getElementById("word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector("refresh-btn"),
checkBtn = document.querySelector("check-btn");

let words = [
    {
        "word" : "meeting",
        "hint" : "Event in which people come together"
    }
];