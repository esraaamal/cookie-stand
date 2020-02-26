


'use strict';
var endArr=0;
var totalArr =[];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, min, max, avg) {
    //var store = {}
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.resultArray = [];
    this.total = 0;

    //return store(return the random number of cookies)
}


Store.prototype.cookiesNum = function () {
    for (var j = 0; j <= hours.length; j++) {
        var randomcook=getRandomcookies(this.min, this.max);
        var nubmcookies = Math.floor(randomcook * this.avg);
        this.resultArray.push(nubmcookies);
        this.total += this.resultArray[j];
    }
    
    //console.log(this.resultArray);
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
    liEl.textContent = `Total : ${this.total} cookies`;
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
    min = Math.ceil(min);
    max = Math.floor(max);
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
//show all the col on hours with for loop---------------------
for(var i=0 ; i< hours.length ;i++){
var th2El = document.createElement('th');
th2El.textContent = `${hours[i]}  `;
trEl.appendChild(th2El);
}
var th3El = document.createElement('th');
th3El.textContent = ' Total';
trEl.appendChild(th3El);

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
    var tdTotalEl =document.createElement('td');
tdTotalEl.textContent=`${store1.total} `;
tr2El.appendChild(tdTotalEl);

    
//second row-FOR STORE2-------------------------------------------
var tr3El = document.createElement('tr');
tableEl.appendChild(tr3El);

var td2El =document.createElement('td');
td2El.textContent=`${store2.name} `;
tr3El.appendChild(td2El);
for(var i=0 ; i< hours.length ;i++){
    var td2El = document.createElement('td');
    td2El.textContent = `${store2.resultArray[i]}  `;
    tr3El
.appendChild(td2El);
    }
    //to find the total for first row----------
    var tdTotal2El =document.createElement('td');
    tdTotal2El.textContent=`${store2.total} `;
    tr3El.appendChild(tdTotal2El);
    
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
        var tdTotal3El =document.createElement('td');
        tdTotal3El.textContent=`${store3.total} `;
        totalArr.push(store3.total);
        tr4El.appendChild(tdTotal3El);


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
//find the total of the row
var tdTotal4El =document.createElement('td');
    tdTotal4El.textContent=`${store4.total} `;
    totalArr.push(store4.total);
    tr5El.appendChild(tdTotal4El);
    

//  5 ---row-FOR STORE5-------------------------------------------

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


//find the total of the row
var tdTotal5El =document.createElement('td');
    tdTotal5El.textContent=`${store5.total} `;
    tr6El.appendChild(tdTotal5El);




//TOTAL Row===========================
var totalOfTotal =0;
var tr7El = document.createElement('tr');
tableEl.appendChild(tr7El);
//
var td6El=document.createElement('td');
td6El.textContent='Total';
tr7El.appendChild(td6El);
for(var i=0 ; i< hours.length ;i++){
    var td6El= document.createElement('td');
    var sumAll=store1.resultArray[i]+store2.resultArray[i]+store3.resultArray[i]+store4.resultArray[i]+store5.resultArray[i];

    totalOfTotal +=sumAll;

    td6El.textContent = `${sumAll}`;
    tr7El.appendChild(td6El);
    }  console.log(totalOfTotal)
    //find the total of the total
var tdTotal6El =document.createElement('td');
/*for(var k=0 ;k<=totalArr.length ;k++){
 endArr += totalArr[k];
 console.log(endArr);
}*/
var tota12345 =store1.total +store2.total +store3.total+ store4.total +store5.total ;
console.log(tota12345);
var totalOfTotal2 =totalOfTotal + tota12345 ;
tdTotal6El.textContent= `${totalOfTotal2}`;
tr7El.appendChild(tdTotal6El);



















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