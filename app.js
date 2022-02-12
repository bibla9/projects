const elem = document.getElementById('vid');
elem.pause();
const text = document.querySelector('.texts');
const strText = text.textContent;

// console.log(strText)
const splitText = strText.split("");
// console.log(splitText)
text.textContent=""
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span> &nbsp" + splitText[i] + " </span>"
}

let char = 0;
let timer = setInterval(onTick,50);
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length)
    {   
        complete();
        return;
    }

}
function complete(){
    clearInterval(timer);
    timer = null;
}

const onTime = setTimeout(showvid,9000);
function showvid (){
    const elem2 = document.getElementById('loading');
    text.style.display="none";
    elem.style.display="none";
    elem2.style.display="none";
    elem.muted=true;
    window.onload=document.body.click();
    elem.muted=false;
    elem.play();
    // elem.innerHTML
   elem.style.display="block";
}