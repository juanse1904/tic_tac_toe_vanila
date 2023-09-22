import { players } from "./players.js";
import { winCombinations } from "./vars.js";
import { messageContainer, cards } from "./rootElements.js";
let player = 1;
let winner = false;

const winMessage = (playerNumber) => {
    const h2 = document.createElement("h2");
    const content = document.createTextNode(`player ${playerNumber} WINS!!`);
    h2.appendChild(content);
    messageContainer.insertBefore(h2, messageContainer.firstChild);
    messageContainer.classList.add('win_message_show');
}
const clrearBoard = () =>{
    messageContainer.removeChild(messageContainer.firstChild);
    for (let i=0; i < cards.length; i++){
        while(cards[i].firstChild){
            cards[i].removeChild(cards[i].firstChild);
            cards[i].classList = ['card'];
        }
    }
}
const clrearCounters = () =>{
   players[1].counter=[];
   players[2].counter=[];
}

export const nextRound = () =>{
    const messageContainer = document.getElementsByClassName("win_message")[0];
    messageContainer.classList.remove('win_message_show');
    winner = false;
    clrearBoard();
    clrearCounters();
    players[player].score = players[player].score + 1;
}

export const player1Counter = document.getElementsByClassName("player_1")[0];
const player2Counter = document.getElementsByClassName("player_2")[0];

function changePLayer(){
    if(player===1){
        player1Counter.classList.remove('active_turn');
        player = 2;
        player2Counter.classList.add('active_turn');
    }else{
        player2Counter.classList.remove('active_turn');
        player = 1;
        player1Counter.classList.add('active_turn');
    }
};

function addPLayerClass(element){
    element.classList.add(players[player].className);
};
function interventor(){
winCombinations.forEach((combination)=>{
    let verification = [];
    combination.forEach((position)=>{
        players[player].counter.includes(position)? verification.push(1) : verification.push(0);
    })
    if(verification.every((item)=> item === 1)){
        winMessage(player);
        winner= true;
    }
})
};

function addSymbol(card){    
    card.appendChild(players[player].element());
};

export function handleClick(card){
    console.log("the card", card.childNodes);
    if(card.childNodes.length<=1 && !winner){
        addSymbol(card);
        players[player].counter.push(card.id*1);
        addPLayerClass(card);
        interventor();
        changePLayer();
    }

}
