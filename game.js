window.onload = function() {
    let score = 0;
    let pause = false;
    let int = null;
    const status = document.getElementById("status")
    const startButton = document.getElementById("start");
    const walls = document.getElementsByClassName("boundary");
    const scoreboard = document.getElementsByClassName("example");
    const end = document.getElementById("end");
    const timerDisplay = document.getElementsByTagName("p")[0]


    startButton.onmouseenter = function() {
        scoreboard[0].innerHTML = score;
        startGame();
        resetTimer();
        startTimer();
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
        pauseTimer()
    }

    function resetScore() {
        score = 0;
        scoreboard[0].innerHTML = score;
        for (let item of walls) {
            item.style.backgroundColor = null; 
        }
    }

    function gameOver() {
        if (!pause){
            status.innerHTML = "You lose";
            score -= 10;
            pause = true;
            for (let item of walls) {
            item.style.backgroundColor = "red"; 
            }
        }scoreboard[0].innerHTML = score;
        pauseTimer();

    }

    function startGame() {
        scoreboard[0].innerHTML = score;
        for (let item of walls) {
            item.style.backgroundColor = null; 
            item.onmouseenter = function() {
                gameOver()
            }
        }
        end.onmouseenter = function() {
            if (!pause) {
                userWins()
            }
        }
    }


    function startTimer() {
        if(int!==null){
            clearInterval(int);
        }
        int = setInterval(displayTimer,10);
    } 

    function pauseTimer() {
        clearInterval(int);
    }

    function resetTimer() {
        clearInterval(int);
        [milliseconds,seconds] = [0,0];
        timerDisplay.innerHTML = '00 : 00';
    }

    function displayTimer(){
        milliseconds+=10;
        if(milliseconds == 1000){
            milliseconds = 0;
            seconds++;
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        timerDisplay.innerHTML = `Live: ${s} : ${ms}`;
    }

}
