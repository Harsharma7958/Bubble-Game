var timer = 60;
var score = 0
var hitrn = 0;

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitVal").textContent = hitrn
}

function runTimer() {
    var timerInter = setInterval(() => {
        if (timer > 0) {
            timer--;

            document.querySelector("#timerVal").textContent = timer;

        }
        else {
            clearInterval(timerInter);
            document.querySelector(".pbtm").innerHTML = `<div class = "GM"><h1>Game Over</h1><div>
            <div class = "YS"><h2>Your Score is ${score}</h2><div>`;
        }

    }, 1000);


}

function increaseScore() {
    score += 10
    document.querySelector("#scoreval").textContent = score
}

function makeBubble() {
    var clutter = "";


    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = clutter;
}

document.querySelector(".pbtm").addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent)
    if (clickedNum === hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();

    }

})

getNewHit()
runTimer()
makeBubble()