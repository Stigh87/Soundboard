//view
show(); 
function show() {
let appDiv = document.getElementById('app');
let html = '';

 html += `
 
<div class="circleContainer">
    <div class="circleBackground">
    
    </div>
    <div id="discoBall"></div>
    <div id="rute1" class="hold">
        <div class="${spin1}" onclick="button1('lyd1.wav')">${btn1}
        </div>
    </div>
    
    <div id="rute2" class="hold">
        <div class="${spin2}" onclick="button2('lyd2.wav')">${btn2}
        </div>
    </div>

    <div id="rute3" class="hold">
        <div class="${spin3}" onclick="button3('lyd3.wav')">${btn3}
        </div>
    </div>
    
    <div id="rute4" class="hold">
        <div class="${spin4}" onclick="button4('lyd4.wav')">${btn4}
        </div>
    </div>

    <div id="rute5" class="hold">
        <div class="${spin5}" onclick="button5('lyd5.wav')">${btn5}
        </div>
    </div>

    <div id="rute6" class="hold">
        <div class="${spin6}" onclick="button6('lyd6.wav')">${btn6}
        </div>
    </div>
   <div id="bigBtn" class="${styleBigBtn}" onclick="bigBtn('lyd0.mp3')">
   
   
   <marquee class="bigBtnDiv" direction="up" scrollamount="2" behavior="scroll">${sangText}</marquee>
   </div>
</div>


`;

html += `
        
        
        `;


appDiv.innerHTML = html;
}
{/* <div class="ruter2" >
        
</div> */}