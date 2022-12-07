const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


p1Btn.addEventListener("click", function(e){
    if (!isGameOver){
        p1Score += 1;
        if (p1Score === winningScore){
          isGameOver = true;
          p1Display.classList.add('winner');
          p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
})
p2Btn.addEventListener("click", function(e){
    if (!isGameOver){
        p2Score += 1;
        if (p2Score === winningScore){
          isGameOver = true;
          p2Display.classList.add('winner');
          p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
})

resetBtn.addEventListener("click", reset)

winningScoreSelect.addEventListener('change', function(e){
  winningScore = Number(this.value);
  reset();
})

function reset(){
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('loser', 'loser');
}