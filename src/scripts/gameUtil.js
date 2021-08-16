import Order from "./order"

export function hideOrder() {   // id="hide-order"
    const orderDiv = document.getElementsByClassName('orders')
    orderDiv.setAttribute('id', 'hide-order')
}

export function unhideOrder() {     // id="hide-order"
    const orderDiv = document.getElementsByClassName('orders')
    orderDiv.removeAttribute('id');
}

export function checkOffOrder(ele) {
    ele.setAttribute('class', 'checked-off')
}

export function uncheckOrder(ele) {
    ele.removeAttribute('class', 'checked-off')
}

export function removeOrderComponents() {
    const divNode = document.getElementsByClassName('orders')
    if (divNode.hasChildNodes()) {
        for (let i = divNode.childNodes.length - 1; i >= 0; i--) {
            divNode.removeChild(divNode.childNodes[i]);
        }
    }
}

export function printOrder(orderArray) {
    const orderDiv = document.getElementsByClassName('orders')
    orderDiv.removeAttribute('id', 'hide-order')
    for (let i = 0; i < orderArray.length; i++) {
        // create element
        const orderPart = document.createElement('p')

        // creates the corresponding text from the Order class' drink dictionary
        const newText = document.createTextNode(`${Order.drinkDictionary[orderArray[i]]}`)

        // append the text to the newly created element
        orderPart.appendChild(newText)

        // then append the newly created element to the orderDiv
        orderDiv.appendChild(orderDiv)
    };
};

// export function orderComparer(shownOrder, keyInputs) {
//     return (JSON.stringify(keyInputs) === JSON.stringify(shownOrder.slice(0, keyInputs.length))) ? true : false
// };

export function dequeue(orderList) {
    if (orderList.length !== 0) {
        return orderList.shift;
    } else {
        return null;
    }
};

