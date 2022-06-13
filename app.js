const p1 = {
    score:0,
    button:document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score:0,
    button:document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector('#playTo');
let p1Score=0, p2Score=0, winningScore=3;
let isGameOver = false;

function updateScore(player,opponent)
{
    if(!isGameOver)
    {
        player.score +=1;
        if(player.score == winningScore)
        {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function(){
    updateScore(p1,p2);
})

p2.button.addEventListener('click', function(){
    updateScore(p2,p1);
})

playTo.addEventListener('change',function(){
    winningScore=this.value;
    reset();
})

resetButton.addEventListener('click',reset)

function reset()
{
    isGameOver=false;
    for(let p of [p1,p2])
    {
        p.score=0;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success','has-text-danger');
    }
}