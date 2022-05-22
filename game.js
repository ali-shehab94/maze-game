

window.onload = function() {


    let game = document.getElementById("start")
    let startButton = document.getElementById("start");
    let walls = document.getElementsByClassName("boundary");
    let scoreboard = document.getElementsByClassName("boundary example");
    let end = document.getElementById("end");
    scoreboard.innerText = "<p>Score</p>";
    startButton.addEventListener("mouseover", gameStart);

    function gameOver() {
        for (let item of walls) {
        item.style.backgroundColor = 'red'; 
        startButton.addEventListener("mouseover", gameStart)
        }
    }

    function gameStart() {
        for (let item of walls) {
            item.style.backgroundColor = null; 
        console.log(walls)
        }
        for (var i = 0; i < walls.length - 1; i++) {
        let wall = walls[i]
        wall.addEventListener("mouseover", function() {
            gameOver()
        });
        end.addEventListener("mouseover", function(){
            console.log("you win")
        })
    };

    }


    

    
}