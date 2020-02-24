


'use strict';
var total = 0;

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, min, max, avg) {
    //var store = {}
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.resultArray = [];

    //return store(return the random number of cookies)
}


Store.prototype.cookiesNum = function () {
    for (var j = 0; j <= hours.length; j++) {
        this.resultArray.push(getRandomcookies(this.min, this.max));
        total += this.resultArray[j];
    }
    console.log(this.resultArray);
};





  

Store.prototype.render = function () {
    var container = document.getElementById('demo');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i <= hours.length; i++) {
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
    liEl.textContent = `${hours[i]} : ${this.resultArray[i]} cookies`;
    }
    liEl.textContent = `Total : ${total} cookies`;
    var brEl = document.createElement('br');
    ulEl.appendChild(brEl);
};




var store1 = new Store('Seattle', 23, 65, 6.3);
store1.cookiesNum();
store1.render();

var store2 = new Store('Tokyo', 3, 24, 1.2);
store2.cookiesNum();
store2.render();

 var store3 = new Store('Dubai', 11, 38, 3.7);
 store3.cookiesNum();
 store3.render();

 var store4 = new Store('Paris', 20, 38, 2.3);
 store4.cookiesNum();
 store4.render();

 var store5 = new Store('Lima', 2, 16, 4.6);
 store5.cookiesNum();
 store5.render();


function getRandomcookies(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}


//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,



///////////////////////////////////////////







var tableContainer = document.getElementById('demo');
var tableEl = document.createElement('table');

tableContainer.appendChild(tableEl);
for(var i=0;i<=hours.length ;i++){
var trEl = document.createElement('tr');
tableEl.appendChild(trEl);
var th1El = document.createElement('th');
th1El.textContent =`${hours[i]}`;}



trEl.appendChild(th1El);
var th2El = document.createElement('th');
th2El.textContent = 'good with dogs';
trEl.appendChild(th2El);
var th3El = document.createElement('th');
th3El.textContent = 'good with kids';
trEl.appendChild(th3El);

//the second right tree

var tr2El = document.createElement('tr');
tableEl.appendChild(tr2El);
var td1El = document.createElement('td');
td1El.textContent = store1.name;
tr2El.appendChild(td1El);

var td2El = document.createElement('td');
td2El.textContent = store1.name;
tr2El.appendChild(td2El);

var td3El = document.createElement('td');
td3El.textContent = store1.name;
tr2El.appendChild(td3El);