window.onload = function() {
    let score = 0;
    let pause = false;
    const status = document.getElementById("status")
    const startButton = document.getElementById("start");
    const walls = document.getElementsByClassName("boundary");
    const scoreboard = document.getElementsByClassName("example");
    const end = document.getElementById("end");

    startButton.onmouseenter = function() {
        scoreboard[0].innerHTML = score;
        startGame();
        pause = false;
    }

    startButton.onclick = function() {
        resetScore()
    }

    function userWins() {
        pause = true;
        status.innerHTML = "You win";
        score += 5;
        scoreboard[0].innerHTML = score;
    }

    function resetScore() {
        score = 0;
        scoreboard[0].innerHTML = score;
        for (let item of walls) {
            item.style.backgroundColor = null; 
        }
    }

    function hitWall() {
        if (!pause){
            console.log("lost turned to true")
            status.innerHTML = "You lose";
            score -= 10;
            pause = true;
            for (let item of walls) {
            item.style.backgroundColor = "red"; 
            }
        }scoreboard[0].innerHTML = score;
    }

    function startGame() {
        scoreboard[0].innerHTML = score;
        console.log("started")
        for (let item of walls) {
            item.style.backgroundColor = null; 
            item.onmouseenter = function() {
                hitWall()
            }
        }
        end.onmouseenter = function() {
            if (!pause) {
                console.log("+5")
                userWins()
            }
        }
    }
}
