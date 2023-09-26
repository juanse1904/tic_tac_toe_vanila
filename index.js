import { handleClick, player1Counter, nextRound, cancelRound } from "./utils.js"
import {cards, nextButton, finishButton, player1Score, player2Score} from "./rootElements.js";
import { players } from "./players.js";

nextButton.addEventListener('click', () =>{nextRound()});
finishButton.addEventListener('click', () => {cancelRound()});
for (let i=0; i < cards.length; i++){
    cards[i].addEventListener('click', () =>{ handleClick(cards[i])});
}

player1Counter.classList.add('active_turn');
player1Score.appendChild(document.createTextNode(players[1].score));
player2Score.appendChild(document.createTextNode(players[2].score));