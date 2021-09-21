//controller

function bigBtn(soundSrc) {
   timer();
    playSound(soundSrc);
    styleBigBtn = "hold3";
    spin1 = "spin ruter";
    spin2 = "spin ruter";
    spin3 = "spin ruter";
    spin4 = "spin ruter";
    spin5 = "spin ruter";
    spin6 = "spin ruter";
    
    show(); 
    
 // BLIKKE noe show uten show vettu!!!! HUsk husk!
}

function button1(soundSrc) {
    playSound(soundSrc);
    btn1 = "RØD"; // 
    styleBigBtn = "rød";
    spin1 = "spin2 ruter";
show();
}   
function button2(soundSrc) {
    playSound(soundSrc);
    btn2 = "BLÅ"; // 
    styleBigBtn = "blå";
    spin2 = "spin2 ruter";
show();    
}
function button3(soundSrc) {
    playSound(soundSrc);
    btn3 = "GRØNN"; //
    styleBigBtn = "grønn";
    spin3 = "spin2 ruter";
show();    
}
function button4(soundSrc) {
    playSound(soundSrc);
    btn4 = "GUL"; //
    styleBigBtn = "gul";
    spin4 = "spin2 ruter";
show();    
}
function button5(soundSrc) {
    playSound(soundSrc);
    btn5 = "LILLA"; //
    styleBigBtn = "lilla";
    spin5 = "spin2 ruter";
show();    
}
function button6(soundSrc) {
    playSound(soundSrc);
    btn6 = "SVART"; //
    styleBigBtn = "svart";
    spin6 = "spin2 ruter";
show();    
}

function playSound(soundSrc){
    var audio = new Audio(soundSrc);
        audio.play();
        audio.volume = 0.2
    
    }


function timer() {
    setTimeout(function () {
        songText();
    }, 13000);
    
}

    function songText() {
        sangText = `
Well, you can tell by the way I use my walk I'm a woman's man, 
no time to talk Music loud and women warm, 
I've been kicked around Since I was born 
And now it's alright, it's okay
And you may look the other way
We can try to understand
The New York Times' effect on man

Whether you're a brother or whether you're a mother
You're stayin' alive, stayin' alive
Feel the city breakin' and everybody shakin'
And we're stayin' alive, stayin' alive
Ah, ha, ha, ha, stayin' alive, stayin' alive
Ah, ha, ha, ha, stayin' alive

Well now, I get low and I get high
And if I can't get either, I really try
Got the wings of Heaven on my shoes
I'm a dancin' man and I just can't lose
You know it's alright, it's okay
I'll live to see another day
We can try to understand
The New York Times' effect on man

Whether you're a brother or whether you're a mother
You're stayin' alive, stayin' alive
Feel the city breakin' and everybody shakin'
And we're stayin' alive, stayin' alive
Ah, ha, ha, ha, stayin' alive, stayin' alive
Ah, ha, ha, ha, stayin' alive (ohh)

Life goin' nowhere, somebody help me
Somebody help me, yeah
Life goin' nowhere, somebody help me, yeah
I'm stayin' alive

Well, you can tell by the way I use my walk
I'm a woman's man, no time to talk
Music loud and women warm
I've been kicked around since I was born
And now it's all right, it's okay
And you may look the other way
We can try to understand
The New York Times' effect on man

Whether you're a brother or whether you're a mother
You're stayin' alive, stayin' alive
Feel the city breakin' and everybody shakin'
And we're stayin' alive, stayin' alive
Ah, ha, ha, ha, stayin' alive, stayin' alive
Ah, ha, ha, ha, stayin' alive

Life goin' nowhere, somebody help me
Somebody help me, yeah
Life goin' nowhere, somebody help me, yeah
I'm stayin' alive

Life goin' nowhere, somebody help me
Somebody help me, yeah (ah, ah, ah)
Life goin' nowhere, somebody help me, yeah
I'm stayin' alive

Life goin' nowhere, somebody help me
Somebody help me, yeah (ah, ah, ah, ay)
Life goin' nowhere, somebody help me, yeah
I'm stayin' alive

Life goin' nowhere, somebody help me
Somebody help me, yeah (ohh)
Life goin' nowhere, somebody help me, yeah
I'm stayin' alive`

show(); 
}