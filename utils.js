const player1 = ()=>{
    const p1 = document.createElement("span");
    const content = document.createTextNode("X");
    p1.appendChild(content);
    return p1;
}

const player2 = ()=>{
    const p2 = document.createElement("span");
    const content = document.createTextNode("O");
    p2.appendChild(content);
    return p2;
}

const winMessage = (playerNumber) => {
    const h2 = document.createElement("h2");
    const content = document.createTextNode(`player ${playerNumber} WINS!!`);
    h2.appendChild(content);
    const messageContainer = document.getElementsByClassName("win_message")[0];
    messageContainer.appendChild(h2);
}

let player = 1;
let winner = false;
const winCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const players ={
    1: {
        element: player1,
        className: 'piece_1',
        counter: [],
    },
    2: {
        element: player2,
        className: 'piece_2',
        counter: [],
    },
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
    if(card.childNodes.length===1 && !winner){
        addSymbol(card);
        players[player].counter.push(card.id*1);
        addPLayerClass(card);
        interventor();
        changePLayer();
    }

}
