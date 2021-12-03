//------------VARIABLES-------------



//variables
var money = 5;
var dandelionCost = 5;
var dandelion = 0;
var dandelionMoney = 1;
var upDandelionCost = 1000;
var upDandelion = 0;
var tulipCost = 25;
var tulip = 0;
var tulipMoney = 5;
var upTulipCost = 5000;
var upTulip = 0;
var roseCost = 125;
var rose = 0;
var roseMoney = 25;
var upRoseCost = 25000;
var upRose = 0;
var lilyCost = 625;
var lily = 0;
var lilyMoney = 100;
var upLilyCost = 125000;
var upLily = 0;
var daffodilCost = 3125;
var daffodil = 0;
var daffodilMoney = 750;
var upDaffodilCost = 650000;
var upDaffodil = 0;
var daisyCost = 15625;
var daisy = 0;
var daisyMoney = 3000;
var upDaisyCost = 3125000;
var upDaisy = 0;
var carnationCost = 78125;
var carnation = 0;
var carnationMoney = 25000;
var upCarnationCost = 15625000;
var upCarnation = 0;
var orchidCost = 390625;
var orchid = 0;
var orchidMoney = 100000;
var upOrchidCost = 78125000;
var upOrchid = 0;




//-----------MAIN GAME-----------



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




//-----------UPGRADES-------------



//upgradeDandelion
function buyUpDandelion() {
    if (money >= upDandelionCost) {
        money = money - upDandelionCost;
        upDandelion = upDandelion + 1;
        dandelionMoney = dandelionMoney * 3;
        upDandelionCost = Math.round (upDandelionCost * 3);

        document.getElementById("money").innerHTML = money
        document.getElementById("upDandelionCost").innerHTML = upDandelionCost
        document.getElementById("upDandelion").innerHTML = upDandelion
        document.getElementById("dandelionMoney").innerHTML = dandelionMoney
    }
}

//upgradeTulip
function buyUpTulip() {
    if (money >= upTulipCost) {
        money = money - upTulipCost;
        upTulip = upTulip + 1;
        tulipMoney = tulipMoney * 3;
        upTulipCost = Math.round (upTulipCost * 3);

        document.getElementById("money").innerHTML = money
        document.getElementById("upTulipCost").innerHTML = upTulipCost
        document.getElementById("upTulip").innerHTML = upTulip
        document.getElementById("tulipMoney").innerHTML = tulipMoney
    }
}

//upgradeRose
function buyUpRose() {
    if (money >= upRoseCost) {
        money = money - upRoseCost;
        upRose = upRose + 1;
        roseMoney = roseMoney * 3;
        upRoseCost = Math.round (upRoseCost * 3);

        document.getElementById("money").innerHTML = money
        document.getElementById("upRoseCost").innerHTML = upRoseCost
        document.getElementById("upRose").innerHTML = upRose
        document.getElementById("roseMoney").innerHTML = roseMoney
    }
}

//upgradeLily
function buyUpLily() {
    if (money >= upLilyCost) {
        money = money - upLilyCost;
        upLily = upLily + 1;
        lilyMoney = lilyMoney * 3;
        upLilyCost = Math.round (upLilyCost * 3);

        document.getElementById("money").innerHTML = money
        document.getElementById("upLilyCost").innerHTML = upLilyCost
        document.getElementById("upLily").innerHTML = upLily
        document.getElementById("lilyMoney").innerHTML = lilyMoney
    }
}

//upgradeDaffodil
function buyUpDaffodil() {
    if (money >= upDaffodilCost) {
        money = money - upDaffodilCost;
        upDaffodil = upDaffodil + 1;
        daffodilMoney = daffodilMoney * 3;
        upDaffodilCost = Math.round (upDaffodilCost * 3);

        document.getElementById("money").innerHTML = money
        document.getElementById("upDaffodilCost").innerHTML = upDaffodilCost
        document.getElementById("upDaffodil").innerHTML = upDaffodil
        document.getElementById("daffodilMoney").innerHTML = daffodilMoney
    }
}

//upgradeDaisy
function buyUpDaisy() {
    if (money >= upDaiyCost) {
        money = money - upDaisyCost;
        upDaisy = upDaisy + 1;
        daisyMoney = daisyMoney * 3;
        upDaisyCost = Math.round (upDaisyCost * 3);

        document.getElementById("money").innerHTML = money
        document.getElementById("upDaisyCost").innerHTML = upDaisyCost
        document.getElementById("upDaisy").innerHTML = upDaisy
        document.getElementById("daisyMoney").innerHTML = daisyMoney
    }
}

//upgradeCarnation
function buyUpCarnation() {
    if (money >= upCarnationCost) {
        money = money - upCarnationCost;
        upCarnation = upCarnation + 1;
        carnationMoney = carnationMoney * 3;
        upCarnationCost = Math.round (upCarnationCost * 3);

        document.getElementById("money").innerHTML = money
        document.getElementById("upCarnationCost").innerHTML = upCarnationCost
        document.getElementById("upCarnation").innerHTML = upCarnation
        document.getElementById("carnationMoney").innerHTML = carnationMoney
    }
}

//upgradeOrchid
function buyUpOrchid() {
    if (money >= upOrchidCost) {
        money = money - upOrchidCost;
        upOrchid = upOrchid + 1;
        orchidMoney = orchidMoney * 3;
        upOrchidCost = Math.round (upOrchidCost * 3);

        document.getElementById("money").innerHTML = money
        document.getElementById("upOrchidCost").innerHTML = upOrchidCost
        document.getElementById("upOrchid").innerHTML = upOrchid
        document.getElementById("orchidMoney").innerHTML = orchidMoney
    }
}



//-----------ADDING MONEY----------



setInterval (function() {
    money = money + dandelion * dandelionMoney;
    money = money + tulip * tulipMoney;
    money = money + rose * roseMoney;
    money = money + lily * lilyMoney;
    money = money + daffodil * daffodilMoney;
    money = money + daisy * daisyMoney;
    money = money + carnation * carnationMoney;
    money = money + orchid * orchidMoney;
    document.getElementById("money").innerHTML = money
}, 1000);