let ownDecisions = 0;
let othersDecision =0;
const btnOthers = document.getElementById('others');
const btnOwn = document.getElementById('own');

function getOthers() {
    btnOthers.innerHTML = othersDecision;
}
function addOthers() {
    othersDecision += 1;
}

function others() {
    getOthers();
    addOthers();
    getOthers();
}

function getOwn() {
    btnOwn.innerHTML = ownDecisions;
}

function addOwn() {
    ownDecisions += 1;
}

function own() {
    getOwn();
    addOwn();
    getOwn();
}