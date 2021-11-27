//hamburger button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 

//variables
var money = 5;
var dandelionCost = 5;
var dandelion = 0;
var tulipCost = 25;
var tulip = 0;
var roseCost = 125;
var rose = 0;
var lilyCost = 625;
var lily = 0;
var daffodilCost = 3125;
var daffodil = 0;
var daisyCost = 15625;
var daisy = 0;
var carnationCost = 78125;
var carnation = 0;
var orchidCost = 390625;
var orchid = 0;

//dandelion
function buyDandelion() {
    if (money >= dandelionCost) {
        money = money - dandelionCost;
        dandelion = dandelion + 1;
        dandelionCost = Math.round (dandelionCost * 1.3);

        document.getElementById("money").innerHTML = money
        document.getElementById("dandelionCost").innerHTML = dandelionCost
        document.getElementById("dandelion").innerHTML = dandelion
    }
}

//tulip
function buyTulip() {
    if (money >= tulipCost) {
        money = money - tulipCost;
        tulip = tulip + 1;
        tulipCost = Math.round (tulipCost * 1.3);

        document.getElementById("money").innerHTML = money
        document.getElementById("tulipCost").innerHTML = tulipCost
        document.getElementById("tulip").innerHTML = tulip
    }
}

//rose
function buyRose() {
    if (money >= roseCost) {
        money = money - roseCost;
        rose = rose + 1;
        roseCost = Math.round (roseCost * 1.3);

        document.getElementById("money").innerHTML = money
        document.getElementById("roseCost").innerHTML = roseCost
        document.getElementById("rose").innerHTML = rose
    }
}

//lily
function buyLily() {
    if (money >= lilyCost) {
        money = money - lilyCost;
        lily = lily + 1;
        lilyCost = Math.round (lilyCost * 1.3);

        document.getElementById("money").innerHTML = money
        document.getElementById("lilyCost").innerHTML = lilyCost
        document.getElementById("lily").innerHTML = lily
    }
}

//daffodil
function buyDaffodil() {
    if (money >= daffodilCost) {
        money = money - daffodilCost;
        daffodil = daffodil + 1;
        daffodilCost = Math.round (daffodilCost * 1.3);

        document.getElementById("money").innerHTML = money
        document.getElementById("daffodilCost").innerHTML = daffodilCost
        document.getElementById("daffodil").innerHTML = daffodil
    }
}

//daisy
function buyDaisy() {
    if (money >= daisyCost) {
        money = money - daisyCost;
        daisy = daisy + 1;
        daisyCost = Math.round (daisyCost * 1.3);

        document.getElementById("money").innerHTML = money
        document.getElementById("daisyCost").innerHTML = daisyCost
        document.getElementById("daisy").innerHTML = daisy
    }
}

//carnation
function buyCarnation() {
    if (money >= carnationCost) {
        money = money - carnationCost;
        carnation = carnation + 1;
        carnationCost = Math.round (carnationCost * 1.3);

        document.getElementById("money").innerHTML = money
        document.getElementById("carnationCost").innerHTML = carnationCost
        document.getElementById("carnation").innerHTML = carnation
    }
}

//orchid
function buyOrchid() {
    if (money >= orchidCost) {
        money = money - orchidCost;
        orchid = orchid + 1;
        orchidCost = Math.round (orchidCost * 1.3);

        document.getElementById("money").innerHTML = money
        document.getElementById("orchidCost").innerHTML = orchidCost
        document.getElementById("orchid").innerHTML = orchid
    }
}

setInterval (function() {
    money = money + dandelion;
    money = money + tulip * 5;
    money = money + rose * 25;
    money = money + lily * 100;
    money = money + daffodil * 750;
    money = money + daisy * 3000;
    money = money + carnation * 25000;
    money = money + orchid * 100000;
    document.getElementById("money").innerHTML = money
}, 1000);
