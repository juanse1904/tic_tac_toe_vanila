import { handleClick, player1Counter } from "./utils.js"


const cards = document.getElementsByClassName("card");

for (let i=0; i < cards.length; i++){
    cards[i].addEventListener('click', () =>{ handleClick(cards[i])});
}

player1Counter.classList.add('active_turn');
