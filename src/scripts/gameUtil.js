import Order from "./order"

function hideOrder() {   // id="hide-order"
    const orderDiv = document.getElementById('#orders')
    orderDiv.setAttribute('id', 'hide-order')
}

function unhideOrder() {     // id="hide-order"
    const orderDiv = document.getElementById('orders')
    orderDiv.removeAttribute('id');
}

function removeAllChecks(nodeList) {
    nodeList.forEach(ele => uncheckOrder(ele))
}

function checkOffOrder(ele) {
    ele.setAttribute('class', 'checked-off')
}

function uncheckOrder(ele) {
    ele.removeAttribute('class', 'checked-off')
}

function removeOrderComponents() {
    const divNode = document.getElementById('orders')
    if (divNode.hasChildNodes()) {
        for (let i = divNode.childNodes.length - 1; i >= 0; i--) {
            divNode.removeChild(divNode.childNodes[i]);
        }
    };
};

function printOrder(orderArray) {
    const orderDiv = document.getElementById('orders')
    const orderHeader = document.createElement('p')
    orderHeader.innerText = `Order: `
    orderDiv.appendChild(orderHeader)
    for (let i = 0; i < orderArray.length; i++) {
        const orderPart = document.createElement('p')
        orderPart.innerText = `    ${Order.drinkDictionary[orderArray[i]]}`
        orderDiv.appendChild(orderPart)
    };
};

function orderComparer(shownOrder, keyInputs) {
    return (JSON.stringify(keyInputs) === JSON.stringify(shownOrder.slice(0, keyInputs.length)))
};

function dequeue(orderList) {
    if (orderList.length !== 0) {
        return orderList.shift();
    } else {
        return null;
    }
};

function addGreensBack(keyInputsArray) {
    const orderList = document.getElementById('orders')
    for (let i = 0; i < keyInputsArray.length; i++) {
        checkOffOrder(orderList.childNodes[i + 1]);
    };
};

function removePauseScreen() {
    const pauseDiv = document.getElementById('pause');
    pauseDiv.setAttribute('class', 'hidden')
}

function showPauseScreen() {
    const pauseDiv = document.getElementById('pause');
    pauseDiv.removeAttribute('class')
}

function removeGOScreen() {
    const gameOver = document.getElementById('gameover');
    gameOver.setAttribute('class', 'hidden')
}

function showGOScreen() {
    const gameOver = document.getElementById('gameover');
    gameOver.removeAttribute('class')
}

function removeFilter() {
    const bodyTag = document.querySelector('body');
    bodyTag.removeAttribute('id');
}

function removeStartScreen() {
    const startScreen = document.getElementById('startscreen');
    startScreen.setAttribute('class', 'hidden')
}

function showStartScreen() {
    const startScreen = document.getElementById('startscreen');
    startScreen.removeAttribute('class')
}

function playSound() {
    const bleep = new Audio("src/assets/audio/select2.mp3")
    bleep.play()
}

function playErrorSound() {
    const bloop = new Audio("src/assets/audio/errorsound.mp3")
    bloop.play()
}

function playGameOverSound() {
    const bleep = new Audio("src/assets/audio/gameover.mp3")
    bleep.play()
}

function playClickSound() {
    const click = new Audio("src/assets/audio/mouseclick.mp3")
    click.play()
}

export { 
    dequeue, 
    orderComparer, 
    printOrder, 
    removeAllChecks, 
    removeOrderComponents, 
    hideOrder, 
    uncheckOrder, 
    unhideOrder,
    addGreensBack,
    checkOffOrder,
    showPauseScreen,
    removePauseScreen,
    showGOScreen,
    removeGOScreen,
    removeFilter,
    removeStartScreen,
    showStartScreen,
    playSound,
    playErrorSound,
    playGameOverSound,
    playClickSound
}