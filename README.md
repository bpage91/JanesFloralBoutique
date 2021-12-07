# JanesFloralBoutique

## Description
Jane's Floral Boutique is a JavaScript game much like cookie clicker. You will start with enough money to buy one level for dandelions. That will start generatiing money per second and from there you can continue to buy more levels on dandelion or start buying other shops and upgrades. As you buy more levels, shops, and upgrades you will begin to generate more money.

## CSS Features
1. I have a Hamburger menu for my mobile design that allows you to jump to the upgrades and flower shop from anywhere on the site. Allowing for easier buying of upgrades or shops.

2. I have implemented both CSS Grid and Flexbox in my design of my layout. I used Flexbox for the small and medium screen layouts and CSS Grid for my large screen layout.

## JavaScript Features
1. I have 33 variables that display their values throughout the page. Some examples are:
    * The money displayed to the left of the screen.
    * The price on the shops and upgrades.
    * The level on the shops and upgrades.

2. I use 3 funtions, some multiple times, throughout my Javascript that all perform mathematical equations and display the results on my page and do something on the site.

```
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
```

The above code block is the function that I have used on all of the shop buttons to make it so you can buy the shops. The first part of the funtion makes sure that the money is suffient to buy the level on the shop. The second line deducts the price of the shop from your money. The third line adds one to the level of the shop upon being bought. The fourth line increases the price of the next level to be bought. The fifth, sixth, and seventh lines locate the various id's within the HTML to be able to update them within the HTML so that the new values can be displayed on the screen.

```
function buyUpDandelion() {
    if (money >= upDandelionCost) {
        money = money - upDandelionCost;
        upDandelion = upDandelion + 1;
        dandelionMoney = dandelionMoney * 3;
        upDandelionCost = Math.round (upDandelionCost * 3);

        document.getElementById("money").innerHTML = money
        document.getElementById("upDandelionCost").innerHTML = upDandelionCost
        document.getElementById("upDandelion").innerHTML = upDandelion
    }
}
```

This function is similar to the last with the addition of the fourth line which updates the base amount of money earned buy mulitiplying it by 3.

```
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
```

This function is what allows my money to be updated every second. The first 8 lines of code within the function all update the money to be added to the game. The next line finds the money within the HTML and updates it so you can see it on the screen, and the last line denotes how often the money should be added to the game in milliseconds. 1000ms = 1 second.