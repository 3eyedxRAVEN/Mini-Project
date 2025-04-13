let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let wininngMsgContainer = document.querySelector(".wining-msg-container");
let winningMsg = document.querySelector("#winningMsg");
let main = document.querySelector("#main");
let turnO = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = ()=>
{
    turnO = true;
    enableBoxes();
    wininngMsgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.textContent = "O";
            box.classList.remove("colorX");
            turnO = false;
        }else{
            box.textContent = "X";
            box.classList.remove("colorO");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const checkWinner = ()=>{
    for(let pattern of winPattern)
    {        
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                console.log("Winner is", pos1Val);
                showWinner(pos1Val);
                disableBoxes();
            }
        }
    }
};
let showWinner = (winner)=>{
    winningMsg.innerText = `Congratulations the winner is, ${winner}`;
    wininngMsgContainer.classList.remove("hide");
}
const disableBoxes = ()=>
{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>
{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)
