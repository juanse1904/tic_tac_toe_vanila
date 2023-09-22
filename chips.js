export const player1 = ()=>{
    const p1 = document.createElement("span");
    const content = document.createTextNode("X");
    p1.appendChild(content);
    return p1;
}

export const player2 = ()=>{
    const p2 = document.createElement("span");
    const content = document.createTextNode("O");
    p2.appendChild(content);
    return p2;
}