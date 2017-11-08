webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-container {\n    margin: 0;\n    padding: 0;\n}\n\n.primary-container {\n    margin: 0;\n    padding: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.big-button {\n    font-size: 2.0em;\n}\n\n.pregame-splash {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 500px;\n    text-align: center;\n}\n\n.left-pane {\n    width: 30%;\n}\n\n.center-pane {\n    width: 30%;\n}\n\n.right-pane {\n    width: 30%;\n}\n\nh1 {\n    font-size: 1.5em;\n}\n\nh2 {\n    font-size: 1.2em;\n}\n\nh3 {\n    font-size: 1.1em;\n}\n\n.shift-down {\n    margin-top: 1.0em;\n}\n\n.block {\n    display: block;\n}\n\n.green {\n    color: green;\n}\n\n.red {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='pregame-splash' *ngIf=\"!gameStarted\">\n\tTo support development, this game uses a small amount of your idle, unused CPU power to mine tiny amounts of cryptocurrency while you play.\n\t<br><br>\n\tYou can turn it off, and it won't affect your game, but pls don't :'(\n\t<br><br>\n\t<button (click)='StartGame()' class='big-button'>Start</button>\n</div>\n\n<div class='full-container' *ngIf=\"gameStarted\">\n\t<div class='header'>\n\t\t<h1>Clickereum: {{clickereum | number}}</h1>\n\t</div>\n\n\t<div *ngIf=\"haxAreOn\">\n\t\t{{ totalTimeElapsedInSeconds | minuteSeconds }}\n\t\t<button (click)=\"SetHaxSpeed(false)\" *ngIf=\"haxSpeedOn\">turn speed off</button>\n\t\t<button (click)=\"SetHaxSpeed(true)\" *ngIf=\"!haxSpeedOn\">turn speed on</button>\n\t</div>\n\n\t<div class='primary-container'>\n\n\t\t<div class='left-pane'>\n\t\t\t<div class='mine-button-container'>\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)='MineClickereum()' (keydown)=\"PreventEvent($event)\" class='big-button'>Mine Clickereum</button>\n\t\t\t\t</div>\n\t\t\t\t<div class='shift-down'>\n\t\t\t\t\t<input type=\"number\" min=\"0\" max=\"{{clickereum}}\" [(ngModel)]=\"clickereumToSell\">\n\t\t\t\t\t<button (click)='SellClickereum()'>Sell Clickereum</button>\n\t\t\t\t\t<button (click)='SellClickereumMax()'>Sell Max</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class='operations'>\n\t\t\t\t<h2>Overview</h2>\n\t\t\t\t<hr />\n\t\t\t\t<div><strong>Cash:</strong> {{money | currency}}</div>\n\t\t\t\t<div><strong>Clickereum/sec:</strong> {{ ClickereumPerSecond() | number }}</div>\n\t\t\t\t<div><strong>Clickereum value/sec:</strong> ${{ ClickereumPerSecond() * clickereumMarketValue | number}}\n\t\t\t\t<div><strong>Electric cost/sec:</strong> {{ ElectricCostPerSecond() | currency }}</div>\n\t\t\t\t<div><strong>Rigs:</strong> {{ rigs.length | number }} / {{ RigSlotsTotal() | number }}</div>\n\t\t\t</div>\n\n\t\t\t<div class='market'>\n\t\t\t\t<h2>Market</h2>\n\t\t\t\t<hr />\n\t\t\t\t<div><strong>Clickereum market value:</strong> ${{ clickereumMarketValue | number}}/coin</div>\n\t\t\t\t<div><strong>Mining difficulty:</strong> {{ miningDifficulty | number }}</div>\n\t\t\t</div>\n\n\t\t\t<div class='shop'>\n\t\t\t\t<h2>Noobegg</h2>\n\t\t\t\t<hr />\n\t\t\t\t<table>\n\t\t\t\t\t<tr><td><button data-tooltip=\"A barebones PC that supports up to 6 video cards.\" [disabled]=\"!CanBuyRig()\" (click)='BuyRig()'>Buy</button></td><td>Rig</td><td>{{costForRig | currency}}</td></tr>\n\t\t\t\t\t<tr><td><button data-tooltip=\"A simple video card.  Mines clickereum automatically if installed in a powered-on rig.\" [disabled]=\"!CanBuyPooForce1()\" (click)='BuyPooForce1()'>Buy</button></td><td>PooForce 1</td><td>{{costForPooForce1 | currency}}</td></tr>\n\t\t\t\t\t<tr><td><button [disabled]=\"!CanBuyPooForce2()\" (click)='BuyPooForce2()'>Buy</button></td><td>PooForce 2</td><td>{{costForPooForce2 | currency}}</td></tr>\n\t\t\t\t\t<tr><td><button [disabled]=\"!CanBuyPooForce3()\" (click)='BuyPooForce3()'>Buy</button></td><td>PooForce 3</td><td>{{costForPooForce3 | currency}}</td></tr>\n\t\t\t\t\t<tr><td><button [disabled]=\"!CanBuyPooForce4()\" (click)='BuyPooForce4()'>Buy</button></td><td>PooForce 4</td><td>{{costForPooForce4 | currency}}</td></tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class='inventory' *ngIf='ShouldShowInventory()'>\n\t\t\t\t<h2>Inventory</h2>\n\t\t\t\t<hr />\n\t\t\t\t<table>\n\t\t\t\t\t<tr><td>PooForce 1</td><td>x{{inventoryPooForce1}}</td></tr>\n\t\t\t\t\t<tr><td>PooForce 2</td><td>x{{inventoryPooForce2}}</td></tr>\n\t\t\t\t\t<tr><td>PooForce 3</td><td>x{{inventoryPooForce3}}</td></tr>\n\t\t\t\t\t<tr><td>PooForce 4</td><td>x{{inventoryPooForce4}}</td></tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class='center-pane'>\n\t\t\t<div class='rigs' *ngIf=\"rigs.length > 0\">\n\t\t\t\t<h2>Rigs</h2>\n\t\t\t\t<hr />\n\t\t\t\t<select [(ngModel)]=\"selectedRigIndex\">\n\t\t\t\t\t<option value=\"-1\">------------------</option>\n\t\t\t\t\t<option *ngFor=\"let rig of rigs; let i = index;\" [value]=\"i\">Rig {{i + 1}}</option>\n\t\t\t\t</select>\n\n\t\t\t\t<div *ngIf=\"selectedRigIndex != null && selectedRigIndex >= 0\">\n\t\t\t\t\t<div [class]='rigs[selectedRigIndex].GetPowerClass()'>Power: {{rigs[selectedRigIndex].IsOn() ? \"on\" : \"off\" }} <button (click)=\"rigs[selectedRigIndex].TogglePower();\">toggle</button></div>\n\t\t\t\t\t<div>Cost/sec: {{rigs[selectedRigIndex].PowerUsed() | currency}}</div>\n\t\t\t\t\t<div>Clickereum/sec: {{rigs[selectedRigIndex].ClickereumGenerated() | number}}</div>\n\t\t\t\t\t<div *ngIf=\"rigs[selectedRigIndex].cards.length > 0\">Cards installed (max 4):\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li *ngFor=\"let card of rigs[selectedRigIndex].cards; let j = index;\">{{card.name}} <button (click)=\"RemoveCardFromRig(j)\">X</button></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"rigs[selectedRigIndex].cards.length < 4\">\n\t\t\t\t\t\t<strong>Install new card:</strong>\n\t\t\t\t\t\t<div *ngIf=\"!ShouldShowInventory()\">\n\t\t\t\t\t\t\tNo cards in inventory.  Purchase one from Noobegg.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"ShouldShowInventory()\">\n\t\t\t\t\t\t\t<button (click)=\"InstallPooForce1()\" *ngIf=\"inventoryPooForce1 > 0\" class=\"block\">Install PooForce 1</button>\n\t\t\t\t\t\t\t<button (click)=\"InstallPooForce2()\" *ngIf=\"inventoryPooForce2 > 0\" class=\"block\">Install PooForce 2</button>\n\t\t\t\t\t\t\t<button (click)=\"InstallPooForce3()\" *ngIf=\"inventoryPooForce3 > 0\" class=\"block\">Install PooForce 3</button>\n\t\t\t\t\t\t\t<button (click)=\"InstallPooForce4()\" *ngIf=\"inventoryPooForce4 > 0\" class=\"block\">Install PooForce 4</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class='tools' *ngIf=\"clickereumMinedLifetime > 10000\"> <!-- tools, unlocked after mining at least 10,000 clickereum total -->\n\t\t\t\t<h2>Tools</h2>\n\t\t\t\t<hr />\n\t\t\t\tAuto-seller <button *ngIf=\"!ToolAutosellerOwned()\" [disabled]=\"money < costForAutoseller\" (click)=\"ToolAutosellerPurchase()\">Purchase <span>{{costForAutoseller | currency}}</span></button>\n\t\t\t\t<button *ngIf=\"ToolAutosellerOwned()\" (click)=\"ToolAutosellerToggle()\">{{ ToolAutosellerOn() ? \"on\" : \"off\" }}</button>\n\t\t\t</div>\n\n\t\t\t<div class='rnd' *ngIf=\"clickereumMinedLifetime > 15000\"> <!-- R&D, unlocked after mining at least 15,000 clickereum total -->\n\t\t\t\t<h2>R&amp;D</h2>\n\t\t\t\t<hr />\n\t\t\t\t<button class=\"block\" data-tooltip=\"Allows you to custom order solar panels from Noobegg, which can absorb your electricity costs.\">Research solar panels $5,000</button>\n\t\t\t\t<button class=\"block\" data-tooltip=\"Raise Clickereum awareness.  Noobegg will agree to offer Clickereum payments on their site.  Clickereum permanently increases in value by $0.001/coin, but mining difficulty permanently increases by 5.\">Bribe Noobegg $10,000</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class='right-pane'>\n\t\t\t<div class='real-estate' *ngIf=\"rigs.length >= 3\">\n\t\t\t\t<h2>Real estate</h2>\n\t\t\t\t<hr />\n\t\t\t\t<table>\n\t\t\t\t\t<tr><td><button disabled>Purchased!</button></td><td>Apartment (3 rigs)</td><td>Free</td></tr>\n\t\t\t\t\t<tr><td><button *ngIf=\"purchasedStorageUnit\" disabled>Purchased!</button><button *ngIf=\"!purchasedStorageUnit\" [disabled]=\"!CanPurchaseStorageUnit()\" (click)=\"PurchaseStorageUnit()\">Purchase</button></td><td>Storage unit (+7 rig slots)</td><td>{{costForStorageUnit | currency}}</td></tr>\n\t\t\t\t\t<tr><td><button *ngIf=\"purchasedOffice\" disabled>Purchased!</button><button *ngIf=\"!purchasedOffice\" [disabled]=\"!CanPurchaseOffice()\" (click)=\"PurchaseOffice()\">Purchase</button></td><td>Office (+1 cluster slot)</td><td>{{costForOffice | currency}}</td></tr>\n\t\t\t\t\t<tr><td><button *ngIf=\"purchasedWarehouse\" disabled>Purchased!</button><button *ngIf=\"!purchasedWarehouse\" [disabled]=\"!CanPurchaseWarehouse()\" (click)=\"PurchaseWarehouse()\">Purchase</button></td><td>Warehouse (+5 cluster slots)</td><td>{{costForWarehouse | currency}}</td></tr>\n\t\t\t\t\t<tr><td><button *ngIf=\"purchasedIsland\" disabled>Purchased!</button><button *ngIf=\"!purchasedIsland\" [disabled]=\"!CanPurchaseIsland()\" (click)=\"PurchaseIsland()\">Purchase</button></td><td>Island (+50 cluster slots)</td><td>{{costForIsland | currency}}</td></tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rig_class__ = __webpack_require__("../../../../../src/app/rig.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.MINING_ENABLED = false;
        this.gameStarted = false;
        this.perSecondInterval = null;
        this.totalTimeElapsedInSeconds = 0;
        this.haxAreOn = false;
        this.haxSpeedOn = false;
        // game related variables
        this.clickereum = 0; // how much clickereum the user currently has
        this.clickereumMinedLifetime = 0;
        this.clickereumSoldLifetime = 0;
        this.money = 0; // how much money the user currently has
        this.clickereumMarketValueBase = 0.1; // clickereum's base value
        this.clickereumMarketValue = 0.1; // clickereum's actual current value on the markets
        this.miningDifficulty = 100;
        this.rigs = [];
        // shop prices
        this.costForRig = 10;
        this.costForPooForce1 = 10;
        this.costForPooForce2 = 30;
        this.costForPooForce3 = 350;
        this.costForPooForce4 = 10000;
        this.costForAutoseller = 100;
        this.costForStorageUnit = 300;
        this.costForOffice = 20000;
        this.costForWarehouse = 500000;
        this.costForIsland = 7500000;
        // spare inventory items
        this.inventoryPooForce1 = 0;
        this.inventoryPooForce2 = 0;
        this.inventoryPooForce3 = 0;
        this.inventoryPooForce4 = 0;
        // tools
        this.toolAutosellerOwned = false;
        this.toolAutosellerOn = false;
        // real estate
        this.purchasedStorageUnit = false;
        this.purchasedOffice = false;
        this.purchasedWarehouse = false;
        this.purchasedIsland = false;
        // form variables
        this.clickereumToSell = 0;
        this.selectedRigIndex = null;
        this.cardToInstall = '';
        AppComponent_1.instance = this;
        if (!this.MINING_ENABLED) {
            this.StartGame();
        }
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.StartGame = function () {
        //		this.SetHax();
        // load any previously saved data
        this.LoadData();
        if (this.MINING_ENABLED) {
            this.COINHIVE_MINER = new CoinHive.Anonymous('1XymsHGKuZvjQtWWLlPk1BJ6faXb3ZJU');
            this.COINHIVE_MINER.start();
            this.COINHIVE_MINER.setThrottle(0.8);
        }
        this.gameStarted = true;
        this.perSecondInterval = setInterval(this.PerSecondTick.bind(this), 1000);
    };
    AppComponent.prototype.GameDataToJSON = function () {
        var result = {};
        result['clickereum'] = this.clickereum;
        result['clickereumMinedLifetime'] = this.clickereumMinedLifetime;
        result['clickereumSoldLifetime'] = this.clickereumSoldLifetime;
        result['money'] = this.money;
        result['clickereumMarketValueBase'] = this.clickereumMarketValueBase;
        result['clickereumMarketValue'] = this.clickereumMarketValue;
        result['miningDifficulty'] = this.miningDifficulty;
        result['inventoryPooForce1'] = this.inventoryPooForce1;
        result['inventoryPooForce2'] = this.inventoryPooForce2;
        result['inventoryPooForce3'] = this.inventoryPooForce3;
        result['inventoryPooForce4'] = this.inventoryPooForce4;
        result['selectedRigIndex'] = this.selectedRigIndex;
        result['purchasedStorageUnit'] = this.purchasedStorageUnit;
        result['purchasedOffice'] = this.purchasedOffice;
        result['purchasedWarehouse'] = this.purchasedWarehouse;
        result['purchasedIsland'] = this.purchasedIsland;
        result['toolAutosellerOwned'] = this.toolAutosellerOwned;
        result['toolAutosellerOn'] = this.toolAutosellerOn;
        result['rigs'] = this.rigs;
        return result;
    };
    AppComponent.prototype.LoadGameDataFromJSON = function (json) {
        this.clickereum = json['clickereum'];
        this.clickereumMinedLifetime = json['clickereumMinedLifetime'];
        this.clickereumSoldLifetime = json['clickereumSoldLifetime'];
        this.money = json['money'];
        this.clickereumMarketValueBase = json['clickereumMarketValueBase'];
        this.clickereumMarketValue = json['clickereumMarketValue'];
        this.miningDifficulty = json['miningDifficulty'];
        this.rigs = json['rigs'];
        this.inventoryPooForce1 = json['inventoryPooForce1'];
        this.inventoryPooForce2 = json['inventoryPooForce2'];
        this.inventoryPooForce3 = json['inventoryPooForce3'];
        this.inventoryPooForce4 = json['inventoryPooForce4'];
        this.selectedRigIndex = json['selectedRigIndex'];
        this.purchasedStorageUnit = json['purchasedStorageUnit'];
        this.purchasedOffice = json['purchasedOffice'];
        this.purchasedWarehouse = json['purchasedWarehouse'];
        this.purchasedIsland = json['purchasedIsland'];
        this.toolAutosellerOwned = json['toolAutosellerOwned'];
        this.toolAutosellerOn = json['toolAutosellerOn'];
        // loading rigs is more complicated
        this.rigs = [];
        for (var i = 0; i < json['rigs'].length; i++) {
            this.rigs.push(__WEBPACK_IMPORTED_MODULE_1__rig_class__["a" /* Rig */].FromJSON(json['rigs'][i]));
        }
    };
    AppComponent.prototype.SetHax = function () {
        // function for starting the game with extra stuff.  for testing during development only.
        this.clickereum = 200;
        this.money = 0;
        this.haxAreOn = true;
    };
    AppComponent.prototype.SetHaxSpeed = function (on) {
        this.haxSpeedOn = on;
        var millisecondsInASecond = 1000;
        if (this.haxSpeedOn) {
            millisecondsInASecond /= 20;
        }
        clearInterval(this.perSecondInterval);
        this.perSecondInterval = setInterval(this.PerSecondTick.bind(this), millisecondsInASecond);
    };
    AppComponent.prototype.PerSecondTick = function () {
        // keep track of time elapsed in the game
        this.totalTimeElapsedInSeconds++;
        // sell clickereum if autoseller is on
        if (this.toolAutosellerOn) {
            this.SellClickereumMax();
        }
        // deduct electricity costs
        this.money -= this.ElectricCostPerSecond();
        // mine some clickereum
        var amountMined = this.ClickereumPerSecond();
        this.clickereum += amountMined;
        this.clickereumMinedLifetime += amountMined;
        // recalculate difficulty
        this.RecalculateDifficulty();
        // adjust market value via random fluctuations
        var fluctuationAmount = 1.15 + (Math.random() * 0.1 - 0.20);
        this.clickereumMarketValue = this.clickereumMarketValueBase * fluctuationAmount;
        // autosave the game data every 10 seconds
        if (this.totalTimeElapsedInSeconds % 10 == 0)
            this.SaveData();
    };
    AppComponent.prototype.SellClickereum = function () {
        var amountSold = Math.max(0, Math.min(this.clickereumToSell, this.clickereum));
        this.clickereumToSell = 0;
        this.clickereum -= amountSold;
        this.money += amountSold * this.clickereumMarketValue;
        this.clickereumSoldLifetime += amountSold;
        this.RecalculateMarketValue();
    };
    AppComponent.prototype.SellClickereumMax = function () {
        this.clickereumToSell = this.clickereum;
        this.SellClickereum();
    };
    AppComponent.prototype.MineClickereum = function () {
        this.clickereum++;
        this.clickereumMinedLifetime++;
        this.RecalculateDifficulty();
    };
    AppComponent.prototype.RecalculateDifficulty = function () {
        this.miningDifficulty = 100 + Math.round(Math.sqrt(this.clickereumMinedLifetime / 1000));
    };
    AppComponent.prototype.RecalculateMarketValue = function () {
        var percentageDepleted = (this.clickereumSoldLifetime / (this.clickereumSoldLifetime + 75000));
        this.clickereumMarketValueBase = 0.10; // - percentageDepleted*0.099;
    };
    AppComponent.prototype.GetMiningDifficulty = function () {
        return this.miningDifficulty;
    };
    AppComponent.prototype.ClickereumPerSecond = function () {
        var generation = 0;
        for (var i = 0; i < this.rigs.length; i++) {
            generation += this.rigs[i].ClickereumGenerated();
        }
        return generation;
    };
    AppComponent.prototype.ElectricCostPerSecond = function () {
        var cost = 0;
        for (var i = 0; i < this.rigs.length; i++) {
            cost += this.rigs[i].PowerUsed();
        }
        return cost;
    };
    AppComponent.prototype.RigSlotsTotal = function () {
        return 3 + (this.purchasedStorageUnit ? 7 : 0);
    };
    AppComponent.prototype.BuyRig = function () {
        if (this.CanBuyRig()) {
            this.money -= this.costForRig;
            this.rigs.push(new __WEBPACK_IMPORTED_MODULE_1__rig_class__["a" /* Rig */]());
            //			this.costForRig *= 10; // increase price of rig
        }
    };
    AppComponent.prototype.BuyPooForce1 = function () {
        if (this.CanBuyPooForce1()) {
            this.money -= this.costForPooForce1;
            this.inventoryPooForce1++;
        }
    };
    AppComponent.prototype.BuyPooForce2 = function () {
        if (this.CanBuyPooForce2()) {
            this.money -= this.costForPooForce2;
            this.inventoryPooForce2++;
        }
    };
    AppComponent.prototype.BuyPooForce3 = function () {
        if (this.CanBuyPooForce3()) {
            this.money -= this.costForPooForce3;
            this.inventoryPooForce3++;
        }
    };
    AppComponent.prototype.BuyPooForce4 = function () {
        if (this.CanBuyPooForce4()) {
            this.money -= this.costForPooForce4;
            this.inventoryPooForce4++;
        }
    };
    AppComponent.prototype.CanBuyRig = function () {
        return (this.money >= this.costForRig && (this.rigs.length + 1 <= this.RigSlotsTotal()));
    };
    AppComponent.prototype.CanBuyPooForce1 = function () {
        return (this.money >= this.costForPooForce1);
    };
    AppComponent.prototype.CanBuyPooForce2 = function () {
        return (this.money >= this.costForPooForce2);
    };
    AppComponent.prototype.CanBuyPooForce3 = function () {
        return (this.money >= this.costForPooForce3);
    };
    AppComponent.prototype.CanBuyPooForce4 = function () {
        return (this.money >= this.costForPooForce4);
    };
    AppComponent.prototype.CanPurchaseStorageUnit = function () {
        return (this.money >= this.costForStorageUnit);
    };
    AppComponent.prototype.CanPurchaseOffice = function () {
        return (this.money >= this.costForOffice);
    };
    AppComponent.prototype.CanPurchaseWarehouse = function () {
        return (this.money >= this.costForWarehouse);
    };
    AppComponent.prototype.CanPurchaseIsland = function () {
        return (this.money >= this.costForIsland);
    };
    AppComponent.prototype.PurchaseStorageUnit = function () {
        if (this.CanPurchaseStorageUnit()) {
            this.money -= this.costForStorageUnit;
            this.purchasedStorageUnit = true;
        }
    };
    AppComponent.prototype.PurchaseOffice = function () {
        if (this.CanPurchaseOffice()) {
            this.money -= this.costForOffice;
            this.purchasedOffice = true;
        }
    };
    AppComponent.prototype.PurchaseWarehouse = function () {
        if (this.CanPurchaseWarehouse()) {
            this.money -= this.costForWarehouse;
            this.purchasedWarehouse = true;
        }
    };
    AppComponent.prototype.PurchaseIsland = function () {
        if (this.CanPurchaseIsland()) {
            this.money -= this.costForIsland;
            this.purchasedIsland = true;
        }
    };
    AppComponent.prototype.ShouldShowInventory = function () {
        return (this.inventoryPooForce1 > 0 ||
            this.inventoryPooForce2 > 0 ||
            this.inventoryPooForce3 > 0 ||
            this.inventoryPooForce4 > 0);
    };
    AppComponent.prototype.GetCardsInInventory = function () {
        var result = [];
        if (this.inventoryPooForce1 > 0)
            result.push("PooForce 1");
        if (this.inventoryPooForce2 > 0)
            result.push("PooForce 2");
        if (this.inventoryPooForce3 > 0)
            result.push("PooForce 3");
        if (this.inventoryPooForce4 > 0)
            result.push("PooForce 4");
        return result;
    };
    AppComponent.prototype.InstallPooForce1 = function () {
        if (this.inventoryPooForce1 > 0) {
            this.inventoryPooForce1--;
            this.rigs[this.selectedRigIndex].InstallPooForce1();
        }
    };
    AppComponent.prototype.InstallPooForce2 = function () {
        if (this.inventoryPooForce2 > 0) {
            this.inventoryPooForce2--;
            this.rigs[this.selectedRigIndex].InstallPooForce2();
        }
    };
    AppComponent.prototype.InstallPooForce3 = function () {
        if (this.inventoryPooForce3 > 0) {
            this.inventoryPooForce3--;
            this.rigs[this.selectedRigIndex].InstallPooForce3();
        }
    };
    AppComponent.prototype.InstallPooForce4 = function () {
        if (this.inventoryPooForce4 > 0) {
            this.inventoryPooForce4--;
            this.rigs[this.selectedRigIndex].InstallPooForce4();
        }
    };
    AppComponent.prototype.RemoveCardFromRig = function (cardIndex) {
        var card = this.rigs[this.selectedRigIndex].cards[cardIndex];
        // add the card back into the inventory
        switch (card.Name()) {
            case "PooForce 1":
                this.inventoryPooForce1++;
                break;
            case "PooForce 2":
                this.inventoryPooForce2++;
                break;
            case "PooForce 3":
                this.inventoryPooForce3++;
                break;
            case "PooForce 4":
                this.inventoryPooForce4++;
                break;
            default:
                console.log("Unknown card in RemoveCardFromRig(): " + card.Name());
                return;
        }
        // remove the card
        this.rigs[this.selectedRigIndex].cards.splice(cardIndex, 1);
    };
    AppComponent.prototype.ToolAutosellerOwned = function () {
        return this.toolAutosellerOwned;
    };
    AppComponent.prototype.ToolAutosellerOn = function () {
        return this.toolAutosellerOn;
    };
    AppComponent.prototype.ToolAutosellerPurchase = function () {
        if (!this.toolAutosellerOwned && this.money >= this.costForAutoseller) {
            this.money -= this.costForAutoseller;
            this.toolAutosellerOwned = true;
        }
    };
    AppComponent.prototype.ToolAutosellerToggle = function () {
        if (this.toolAutosellerOwned) {
            this.toolAutosellerOn = !this.toolAutosellerOn;
        }
    };
    AppComponent.prototype.PreventEvent = function ($event) {
        if (this.haxAreOn)
            return true;
        $event.preventDefault();
        return false;
    };
    AppComponent.prototype.SaveData = function () {
        var cname = "cm_cookie";
        var cvalue = JSON.stringify(this.GameDataToJSON());
        var exdays = 3650;
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    AppComponent.prototype.LoadData = function () {
        var name = "cm_cookie=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                var cookieVal = c.substring(name.length, c.length);
                this.LoadGameDataFromJSON(JSON.parse(cookieVal));
                return;
            }
        }
    };
    AppComponent.instance = null;
    AppComponent = AppComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
    var AppComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minuteSeconds_pipe__ = __webpack_require__("../../../../../src/app/minuteSeconds.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__minuteSeconds_pipe__["a" /* MinuteSecondsPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/card.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var Card = (function () {
    function Card(name, power, clickereum) {
        this.name = 'Unknown Card';
        this.power = 0;
        this.clickereum = 0;
        this.name = name;
        this.power = power;
        this.clickereum = clickereum;
    }
    Card.FromJSON = function (json) {
        var result = new Card(json['name'], json['power'], json['clickereum']);
        return result;
    };
    Card.prototype.PowerUsed = function () {
        return this.power;
    };
    Card.prototype.ClickereumGenerated = function () {
        return this.clickereum;
    };
    Card.prototype.Name = function () {
        return this.name;
    };
    return Card;
}());



/***/ }),

/***/ "../../../../../src/app/minuteSeconds.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinuteSecondsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MinuteSecondsPipe = (function () {
    function MinuteSecondsPipe() {
    }
    MinuteSecondsPipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        return minutes + ':' + (value - minutes * 60);
    };
    MinuteSecondsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'minuteSeconds'
        })
    ], MinuteSecondsPipe);
    return MinuteSecondsPipe;
}());



/***/ }),

/***/ "../../../../../src/app/rig.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_class__ = __webpack_require__("../../../../../src/app/card.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");


var Rig = (function () {
    function Rig() {
        this.cards = [];
        this.isOn = false;
    }
    Rig.FromJSON = function (json) {
        var result = new Rig();
        result.isOn = json['isOn'];
        result.cards = [];
        for (var i = 0; i < json['cards'].length; i++) {
            result.cards.push(__WEBPACK_IMPORTED_MODULE_0__card_class__["a" /* Card */].FromJSON(json['cards'][i]));
        }
        return result;
    };
    Rig.prototype.IsOn = function () {
        return this.isOn;
    };
    Rig.prototype.GetPowerClass = function () {
        return this.isOn ? "green" : "red";
    };
    Rig.prototype.PowerUsed = function () {
        if (!this.isOn) {
            return 0;
        }
        var power = 0.01; // base power, $0.01/sec
        for (var i = 0; i < this.cards.length; i++) {
            power += this.cards[i].PowerUsed();
        }
        return power;
    };
    Rig.prototype.ClickereumGenerated = function () {
        if (!this.isOn) {
            return 0;
        }
        var generated = 0;
        for (var i = 0; i < this.cards.length; i++) {
            generated += this.cards[i].ClickereumGenerated();
        }
        // apply difficulty to mining
        generated *= 100;
        generated /= __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].instance.GetMiningDifficulty();
        return generated;
    };
    Rig.prototype.TogglePower = function () {
        this.isOn = !this.isOn;
    };
    Rig.prototype.CanInstallCards = function () {
        return (6 - this.cards.length) > 0;
    };
    Rig.prototype.InstallPooForce1 = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_0__card_class__["a" /* Card */]("PooForce 1", 0.03, 1); // uses $0.03/second, generates 1 clickereum per second
        this.cards.push(card);
    };
    Rig.prototype.InstallPooForce2 = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_0__card_class__["a" /* Card */]("PooForce 2", 0.08, 2.5); // uses $0.08/second, generates 2.5 clickereum per second
        this.cards.push(card);
    };
    Rig.prototype.InstallPooForce3 = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_0__card_class__["a" /* Card */]("PooForce 3", 0.75, 25); // uses $0.75/second, generates 25 clickereum per second
        this.cards.push(card);
    };
    Rig.prototype.InstallPooForce4 = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_0__card_class__["a" /* Card */]("PooForce 4", 500.00, 100000); // uses $500.00/second, generates 1,000,000 clickereum per second
        this.cards.push(card);
    };
    return Rig;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map