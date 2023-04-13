let showQuestions = document.getElementById("show-questions");
let showOptions = document.getElementById("show-options");
let showResults = document.getElementById("show-result");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');

submitBtn.style.display = 'none';

let arrayCbt = [
    {
        question: "Who is the president of Nigeria?",
        options: ["Bola Ahmed Tinubu", "Peter Obi", "Abubakar Atiku", "Muhammadu Buhari"],
        answers: "Muhammadu Buhari"
    },
    {
        question: "Who is the current CBN Governor?",
        options: ["Roy Pentelow", "Godwin Emefiele", "Kingsley Chiedu Moghalu", "Graham William"],
        answers: "Godwin Emefiele"
    },
    {
        question: "What is the first political party in Nigeria?",
        options: ["APC", "LP", "NNDP", "PDP"],
        answers: "APC"
    },
    {
        question: "Who is the APC Chairperson",
        options: ["Abdullahi adamu", "Iyiola, Omisore", "John Odigie Oyegun", "Iyorchia Ayu"],
        answers: "Abdullahi Adamu"
    },
    {
        question: "Who is the vice predisent of Nigeria?",
        options: ["Yemi Osinbajo", "Nnamdi Azikwe", "Shehu Shagari", "Goodluck Ebele Jonathan"],
        answers: "Yemi Osinbajo"
    }
];
let count = 0;
let track = 0;

function SortQuestions() {

    showQuestions.innerHTML = `
        <h1>${count + 1 + "."} ${arrayCbt[count].question}</h1>           
        ` 
        for (let index = 0; index < arrayCbt[count].options.length; index++) {
            showOptions.innerHTML += `
            <h5>
            <input name="answer" type="radio">
            <label for="answer">${arrayCbt[count].options[index]}</label>
            </h5>
            `
            
        } 
        
        if (count == 0) {
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'visible';
        }

        if (count == arrayCbt.length-1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';            
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';            
        }


}

SortQuestions();

function nextQuestion() {
    showOptions.innerHTML = "";
    count++;
    SortQuestions();
}

function previousQuestion() {
    showOptions.innerHTML = "";
    count--;
    SortQuestions();
}
