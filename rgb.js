window.onload = ()=>{
let r = 255;
let g = 0;
let b = 0;
var Intervalrgb;

buttonrgb = document.getElementById("button-rgb");

var rgb = document.querySelector('.warp');


buttonrgb.onclick = ()=>{
    clearInterval(Intervalrgb);
    Intervalrgb = setInterval(rgba, 1);
}

rgba = () => {
    //1 g++
    if (r === 255 && g < 255 && b === 0) {
        g++;
    }
    //2 r--
    if (r != 0 && g === 255 && b ===0 ) {
        r--;
    }
    //3 b++
    if (r === 0 && g === 255 && b < 255) {
        b++;
    }
    //4 g--
    if (r === 0 && g !=0 && b === 255) {
        g--;
    }
    //5 r++
    if (r < 255 && g === 0 && b === 255) {
        r++;
    }
    //6 b--
    if (r === 255 && g === 0 && b != 0) {
        b--;
    }


    rgb.style.boxShadow = '0 0 180px 10px rgba(' + r + ',' + g + ',' + b + ', 1)';

}
var sec = "00";
var tens = "00";
var appendsec = document.getElementById("sec");
var appendtens = document.getElementById("tens");
var buttonstart = document.getElementById("button-start");
var buttonstop = document.getElementById("button-stop");
var buttonreset = document.getElementById("button-reset");
var Interval;

buttonstart.onclick = ()=>{
    clearInterval(Interval);
    Interval = setInterval(starttimer, 1000);
}

buttonstop.onclick = ()=>{
    clearInterval(Interval);
}

buttonreset.onclick = ()=>{
    clearInterval(Interval);
    tens = "00";
    sec = "00";
    appendtens.innerHTML = tens;
    appendsec.innerHTML = sec;
}

starttimer = () => {
    tens++;
    console.log(tens);
    if(tens < 9){
        appendtens.innerHTML= "0"+tens;
    }

    if(tens > 9){
        appendtens.innerHTML=tens;
    }
    if(tens >60){
        sec++;
        appendsec.innerHTML = "0"+sec;
        tens=0
        appendtens.innerHTML= "0"+0;
    }
    if(sec>9){
        appendsec.innerHTML = sec;
    }
}
}

