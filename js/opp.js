


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
    //  min = Math.ceil(min * ٍavg);
    //  max = Math.floor(max * Store.avg);


    return Math.floor(Math.random() * (max - min)) + min;
}


//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,



///////////////////////////////////////////


/*function headtable(){
    for(var i=0 ; i<=hours.length ;i++){

        var tdEl =document.createElement('td');
        tdEl.textContent= hours[i];
        trEl.appendChild(tdEl);
    }
}*/




var tableContainer = document.getElementById('demo');
var tableEl = document.createElement('table');
tableContainer.appendChild(tableEl);

var trEl = document.createElement('tr');
tableEl.appendChild(trEl);
//first col
var th1El = document.createElement('th');
th1El.textContent = ' ';
trEl.appendChild(th1El);
//show all the col on hours with for loop
for(var i=0 ; i< hours.length ;i++){
var th2El = document.createElement('th');
th2El.textContent = `${hours[i]}  `;
trEl.appendChild(th2El);
}

//first row FOR STORE1-----------------------------------------------
var tr2El = document.createElement('tr');
tableEl.appendChild(tr2El);
//first row
var td1El =document.createElement('td');
td1El.textContent=`${store1.name} `;
tr2El.appendChild(td1El);
for(var i=0 ; i< hours.length ;i++){
    var td2El = document.createElement('td');
    td2El.textContent = `${store1.resultArray[i]}  `;
    tr2El.appendChild(td2El);
    }
    
//second row-FOR STORE2-------------------------------------------
var tr3El = document.createElement('tr');
tableEl.appendChild(tr3El);
//first row
var td2El =document.createElement('td');
td2El.textContent=`${store2.name} `;
tr3El.appendChild(td2El);
for(var i=0 ; i< hours.length ;i++){
    var td2El = document.createElement('td');
    td2El.textContent = `${store2.resultArray[i]}  `;
    tr3El
.appendChild(td2El);
    }

//third row-FOR STORE3-------------------------------------------

    var tr4El = document.createElement('tr');
    tableEl.appendChild(tr4El);
    //first row
    var td3El =document.createElement('td');
    td3El.textContent=`${store3.name} `;
    tr4El.appendChild(td3El);
    for(var i=0 ; i< hours.length ;i++){
        var td3El = document.createElement('td');
        td3El.textContent = `${store3.resultArray[i]}  `;
        tr4El.appendChild(td3El);
        }

//fourth row-FOR STORE4-------------------------------------------
var tr5El = document.createElement('tr');
tableEl.appendChild(tr5El);
var td4El =document.createElement('td');
td4El.textContent=`${store4.name} `;
tr5El.appendChild(td4El);
for(var i=0 ; i< hours.length ;i++){
    var td4El = document.createElement('td');
    td4El.textContent = `${store4.resultArray[i]}  `;
    tr5El.appendChild(td4El);
    }



// row-FOR STORE5-------------------------------------------

    var tr6El = document.createElement('tr');
tableEl.appendChild(tr6El);
//first row
var td5El=document.createElement('td');
td5El.textContent=`${store5.name} `;
tr6El.appendChild(td5El);
for(var i=0 ; i< hours.length ;i++){
    var td5El= document.createElement('td');
    td5El.textContent = `${store5.resultArray[i]}  `;
    tr6El.appendChild(td5El);
    }

//TOTAL Row===========================
var tr7El = document.createElement('tr');
tableEl.appendChild(tr7El);
//first row
var td6El=document.createElement('td');
td6El.textContent='Total';
tr7El.appendChild(td6El);
for(var i=0 ; i< hours.length ;i++){
    var td6El= document.createElement('td');
    td6El.textContent = '';
    tr7El.appendChild(td6El);
    }



















/*

tableContainer.appendChild(tableEl);
var trEl = document.createElement('tr');
tableEl.appendChild(trEl);
var th1El = document.createElement('th');
th1El.textContent =`${hours[i]}`;

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
tr2El.appendChild(td3El);*/