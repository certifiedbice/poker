// UI
let container = document.getElementById(`control-container`);
let dealtBtn = document.createElement(`button`);
let pot = document.createElement(`div`);
let anteContainer = document.createElement(`div`);

const setUi = (players, ante) => {
    // container.appendChild(container);

    // unneeded
    // for (let i = 0; i < players; i++) {
    //     let playerHandContainer = document.getElementById(`${hand-[1]}`);
    //     playerHandContainer.setAttribute(`id`,`playerHandContainer${i}`);
    //     container.appendChild(playerHandContainer);    
    // }
    
    dealtBtn.setAttribute(`id`,`dealBtn`);
    dealtBtn.setAttribute(`class`,`dealBtn`);
    dealtBtn.setAttribute(`onmouseup`,`play()`);
    dealtBtn.innerHTML = `Deal & Ante Up`;
    container.appendChild(dealtBtn);

    pot.setAttribute(`id`,`pot`);
    pot.setAttribute(`class`,`pot`);
    pot.innerHTML = `Pot: ${0}`;
    container.appendChild(pot);

    anteContainer.setAttribute(`id`,`ante`);
    anteContainer.setAttribute(`class`,`ante`);
    anteContainer.innerHTML = `ante: ${ante}`;
    container.appendChild(anteContainer);
}

const playBtn = (btnValue) => {
    if (!btnValue) {
        // Set button for betting
        dealtBtn.innerHTML=`Bet`;
        // TODO: Create the input to supply bet value
    } else {
        // Set button for dealing
        dealtBtn.innerHTML=`Deal`;
        // TODO: Destroy the input to supply bet value
    }
}

const updateHands = (players, playerHands) => {
    for (let i = 0; i < players; i++) {
        document.getElementById(`playerHandContainer${i}`).innerHTML = playerHands[i];
    }
}

const updatePot = (pot) => {
    document.getElementById('pot').innerHTML = `Pot: ${pot}`;
}

export {
    setUi,
    playBtn,
    updateHands,
    updatePot
}