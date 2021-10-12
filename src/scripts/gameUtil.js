import Order from "./order";

function hideOrder() {
  // id="hide-order"
  const orderDiv = document.getElementById("#orders");
  orderDiv.setAttribute("id", "hide-order");
}

function unhideOrder() {
  // id="hide-order"
  const orderDiv = document.getElementById("orders");
  orderDiv.removeAttribute("id");
}

function removeAllChecks(nodeList) {
  nodeList.forEach((ele) => uncheckOrder(ele));
}

function checkOffOrder(ele) {
  ele.setAttribute("class", "checked-off");
}

function uncheckOrder(ele) {
  ele.removeAttribute("class", "checked-off");
}

function removeOrderComponents() {
  const divNode = document.getElementsByClassName("orders")[0];
  if (divNode.hasChildNodes()) {
    for (let i = divNode.childNodes.length - 1; i >= 0; i--) {
      divNode.removeChild(divNode.childNodes[i]);
    }
  }
}

function printOrder(orderArray) {
  const orderDiv = document.getElementsByClassName("orders")[0];
  const orderHeader = document.createElement("p");
  orderHeader.innerText = `Order: `;
  orderDiv.appendChild(orderHeader);
  for (let i = 0; i < orderArray.length; i++) {
    const orderPart = document.createElement("p");
    orderPart.innerText = `    ${Order.drinkDictionary[orderArray[i]]}`;
    orderDiv.appendChild(orderPart);
  }
}

function orderComparer(shownOrder, keyInputs) {
  return (
    JSON.stringify(keyInputs) ===
    JSON.stringify(shownOrder.slice(0, keyInputs.length))
  );
}

function dequeue(orderList) {
  if (orderList.length !== 0) {
    return orderList.shift();
  } else {
    return null;
  }
}

function addGreensBack(keyInputsArray) {
  const orderList = document.getElementsByClassName("orders")[0];
  for (let i = 0; i < keyInputsArray.length; i++) {
    checkOffOrder(orderList.childNodes[i + 1]);
  }
}

function removePauseScreen() {
  const pauseDiv = document.getElementsByClassName("pause")[0];
  pauseDiv.classList.add("hidden");
}

function showPauseScreen() {
  const pauseDiv = document.getElementsByClassName("pause")[0];
  pauseDiv.classList.remove("hidden");
}

function removeGOScreen() {
  const gameOver = document.getElementsByClassName("gameover")[0];
  gameOver.classList.add("hidden");
}

function showGOScreen() {
  const gameOver = document.getElementsByClassName("gameover")[0];
  gameOver.classList.remove("hidden");
}

function removeFilter() {
  const bodyTag = document.querySelector("body");
  bodyTag.removeAttribute("id");
}

function removeStartScreen() {
  const startScreen = document.getElementsByClassName("startscreen")[0];
  console.log("function 1");
  startScreen.classList.add("hidden");
}

function showStartScreen() {
  const startScreen = document.getElementsByClassName("startscreen")[0];
  startScreen.classList.remove("hidden");
}

function playSound() {
  const bleep = new Audio("src/assets/audio/select2.mp3");
  bleep.play();
}

function playErrorSound() {
  const bloop = new Audio("src/assets/audio/errorsound.mp3");
  bloop.play();
}

function playGameOverSound() {
  const bleep = new Audio("src/assets/audio/gameover.mp3");
  bleep.play();
}

function playClickSound() {
  const click = new Audio("src/assets/audio/mouseclick.mp3");
  click.play();
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
  playClickSound,
};
