

window.onload = function() {
    let score = 0;
    let lost = false;
    let game = document.getElementById("start")
    let startButton = document.getElementById("start");
    let walls = document.getElementsByClassName("boundary");
    let scoreboard = document.getElementsByClassName("example");
    let end = document.getElementById("end");
    startButton.addEventListener("mouseover", gameStart);

    function displayScore(score){
        scoreboard[0].innerHTML = score;
    }

    function resetStatus() {
        let status = document.getElementById("status")
            status.innerHTML = "Begin by moving your mouse over the 'S'."
    }

    function win() {
        score += 5;
        let status = document.getElementById("status")
        status.innerHTML = "You win";
        displayScore(score)
        lost = true;
        return
    }

    function gameOver() {
        let status = document.getElementById("status");
        score -= 10;
        displayScore(score)
        lost = true;
        status.innerHTML = "You lost";
        for (let item of walls) {
        item.style.backgroundColor = 'red';       
        }
    }

    function gameStart() {
        resetStatus();
        displayScore(score);
        //reset background color for walls
        for (let item of walls) {
            item.style.backgroundColor = null; 
        }
        // iterate through array that came from walls class
        for (var i = 0; i < walls.length - 1; i++) {
            let wall = walls[i]
            // when wall is touched
            wall.addEventListener("mouseover", function() {
                gameOver()
            }, {once : true});
        }
        end.addEventListener("mouseover", win);
        return
    }    
}