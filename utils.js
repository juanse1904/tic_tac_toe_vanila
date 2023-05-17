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
function changePLayer(){
    player===1? player= 2 : player =1;
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