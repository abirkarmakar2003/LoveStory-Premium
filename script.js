let selectedDate = "";
let selectedFoods = [];
let selectedActivity = "";

function nextPage() {
    const card = document.querySelector(".card");

card.classList.add("celebrate");

playMusic();

    document.querySelector(".card").innerHTML = `

    <h1 class="title">I Have A Question ❤️</h1>

    <p class="subtitle">
        ${CONFIG.question}   
         </p>

    <button class="btn" onclick="yesClick()">
        ${CONFIG.yesText}
    </button>

    <br><br>

    <button
        class="btn"
        id="noBtn"
        onmouseover="moveButton()">

        ${CONFIG.noText}

    </button>

    `;

}

function moveButton(){

    let btn = document.getElementById("noBtn");

    let x = Math.random()*250-125;

    let y = Math.random()*180-90;

    btn.style.transform =
    `translate(${x}px,${y}px)`;

}

function yesClick(){

    fadeCard(()=>{

        document.querySelector(".card").innerHTML = `

        <h1 class="title">❤️ Our First Date ❤️</h1>

        <p class="subtitle">
            Select the date you want to meet.
        </p>

        <input
            type="date"
            id="date"
            class="dateBox">

        <br><br>

        <button class="btn" onclick="nextFood()">
            Continue ❤️
        </button>

        `;

    });

}
function nextFood(){
    selectedDate = document.getElementById("date").value;

    let date = document.getElementById("date").value;

    if(date==""){
        alert("Please select a date ❤️");
        return;
    }

    document.querySelector(".card").innerHTML = `

    <h1 class="title">🍽️ What would you like to eat?</h1>

    <p class="subtitle">
        Select your favourite food ❤️
    </p>

    <div class="food-grid">

<div class="food-card" onclick="toggleFood(this)">🍕<br>Pizza</div>

<div class="food-card" onclick="toggleFood(this)">🍔<br>Burger</div>

<div class="food-card" onclick="toggleFood(this)">🍗<br>Fried Chicken</div>

<div class="food-card" onclick="toggleFood(this)">🍜<br>Noodles</div>

<div class="food-card" onclick="toggleFood(this)">🍟<br>French Fries</div>

<div class="food-card" onclick="toggleFood(this)">🍦<br>Ice Cream</div>

</div>

<br>

<p id="foodCount" style="color:white;">
Selected : 0 / 3
</p>

<button class="btn" onclick="finishFood()">
Continue ❤️
</button>

    

    `;

}
let selectedFood = 0;

function toggleFood(card){

    const foodName = card.innerText.split("\n")[1];

    if(card.classList.contains("selected")){

        card.classList.remove("selected");
        selectedFood--;

        selectedFoods = selectedFoods.filter(item => item !== foodName);

    }else{

        card.classList.add("selected");
        selectedFood++;

        selectedFoods.push(foodName);

    }

    document.getElementById("foodCount").innerHTML =
    "Selected : " + selectedFood + " / 3";

}

function finishFood(){
    selectedFoodList = [...selectedFoods];

    if(selectedFood < 3){

        alert("❤️ Please select at least 3 foods.");

        return;

    }

    document.querySelector(".card").innerHTML = `

<h1 class="title">❤️ Choose Our First Date ❤️</h1>

<p class="subtitle">
What would you like to do together?
</p>

<div class="food-grid">

<div class="food-card" onclick="selectActivity(this)">🎬<br>Movie</div>

<div class="food-card" onclick="selectActivity(this)">☕<br>Coffee</div>

<div class="food-card" onclick="selectActivity(this)">🚗<br>Long Drive</div>

<div class="food-card" onclick="selectActivity(this)">🌅<br>Sunset Walk</div>

<div class="food-card" onclick="selectActivity(this)">🍽️<br>Candle Light Dinner</div>

<div class="food-card" onclick="selectActivity(this)">🎡<br>Amusement Park</div>

</div>

<br>

<button class="btn" onclick="showCat()">
Continue ❤️
</button>

`;

}
function loveLetter(){

startFireworks();

    document.querySelector(".card").innerHTML = `

        <h1 class="title">💌 A Letter For You</h1>

        <p id="letter" class="subtitle"></p>

        <br>

        <button class="btn" onclick="finalScreen()">
            Continue ❤️
        </button>

    `;

    index = 0;
    typeWriter();

}
let message = `
Hi ${CONFIG.receiverName}

Thank you for taking the time to complete this little surprise.

You made my day so special.

I hope this is just the beginning of many beautiful memories together.

No matter what happens,
keep smiling. 😊❤️

— ${CONFIG.senderName}
`;

let index = 0;

function typeWriter() {

    const letter = document.getElementById("letter");

    if (!letter) return;

    if (index < message.length) {

        letter.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}
function finalScreen(){

    document.querySelector(".card").innerHTML = `

    <h1 class="title">❤️ Thank You ❤️</h1>

    <p class="subtitle">
        You are amazing ✨
    </p>

    <h2 id="loveTimer" style="color:white;"></h2>

    `;

    startLoveTimer();

}
window.onload = function () {

    document.getElementById("receiverName").innerHTML =
        CONFIG.welcomeTitle + " " + CONFIG.receiverName;

};
function playMusic() {
    const music = document.getElementById("bgMusic");

    music.play().catch(() => {
        console.log("Music will start after user interaction.");
    });
}
function startFireworks(){

const canvas=document.getElementById("fireworks");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const ctx=canvas.getContext("2d");

for(let i=0;i<150;i++){

ctx.beginPath();

ctx.arc(
Math.random()*canvas.width,
Math.random()*canvas.height,
Math.random()*3,
0,
Math.PI*2
);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

}

setTimeout(()=>{

ctx.clearRect(0,0,canvas.width,canvas.height);

},2500);

}
setInterval(createHeart,300);

function createHeart(){

const heart=document.createElement("div");

heart.className="floatHeart";

const hearts=["❤️","💖","💕","💗","💘","💞"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.getElementById("heartContainer").appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}
for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(1+Math.random()*3)+"s";

star.style.animationDelay=Math.random()*3+"s";

document.getElementById("stars").appendChild(star);

}
window.addEventListener("load",()=>{

document.getElementById("loaderName").innerHTML=
CONFIG.receiverName;

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

},2000);

});
function fadeCard(callback){

    const card = document.querySelector(".card");

    card.classList.add("fadeOut");

    setTimeout(function(){

        card.classList.remove("fadeOut");

        callback();

    },400);

}
function selectActivity(card){

    document.querySelectorAll(".food-card").forEach(c=>{
        c.classList.remove("selected");
    });

    card.classList.add("selected");

    selectedActivity = card.innerText.split("\n")[1];

}

function showCat(){

    if(selectedActivity==""){

        alert("❤️ Please select an activity.");

        return;

    }

    document.querySelector(".card").innerHTML = `

        <h1 class="title">💖 Oh God 💖</h1>

        <p class="subtitle">
            Honesstly, I never thought you'd agree. That's why I was genuinely surprised...
        </p>

        <img src="gif/cat.gif" class="catGif">

        <br><br>

        <button class="btn" onclick="loveLetter()">
            Continue ❤️
        </button>

    `;

}
function startLoveTimer(){

    const start = new Date(CONFIG.loveStartDate);

    function update(){

        const now = new Date();

        const diff = now - start;

        const days = Math.floor(diff / (1000*60*60*24));

        const hours = Math.floor((diff / (1000*60*60)) % 24);

        const minutes = Math.floor((diff / (1000*60)) % 60);

        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("loveTimer").innerHTML =
        `❤️ Together For ❤️<br>
        ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    }

    update();

    setInterval(update,1000);

}