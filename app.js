window.onload = alert(" اضغط هنا لتاكيد عملية تسجيل الصوت  "); 

// deaclare variable in js
const section = document.querySelector(".section");
const container = document.querySelector('.container');
const p = document.createElement("p");
const span = document.createElement("span");
span.classList.add("spanC");
const btnClear = document.querySelector(".clear-text");
const btnCopy = document.querySelector(".copy-text");


// button clear
btnClear.addEventListener("click" , clear);



window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'ar-SA';

recognition.interimResults = true;
recognition.start();

recognition.addEventListener('end' , recognition.start);

recognition.addEventListener("result" , (e)=>{

    //  show the text 
    container.appendChild(p);
    let transcript = Array.from(e.results)
    .map((result)=>{
        return result[0];
    }).map((result)=>{
        return result.transcript;
    }).join(" ");

    
    let array = [];
    array += transcript + " ";

    if(e.results[0].isFinal)
    {
        span.textContent += array;
        p.appendChild(span);
    }

    let transcriptKey = Array.from(e.results)
    .map((item)=>{
        return item[0];
    }).map((item)=>{
        return item.transcript;
    }).toString("");

    if(transcript.includes("دارك"))
    {
        section.classList.add("dark");
    }
    if(transcriptKey.includes("نهار"))
    {
        section.classList.remove("dark");
    }
});


function clear()
{
    span.innerHTML = "";
}