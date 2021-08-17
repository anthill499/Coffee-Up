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
    checkOffOrder 
}