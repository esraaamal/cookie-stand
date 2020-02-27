


'use strict';
var endArr = 0;
var totalArr = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var locations = [];
function Store(name, min, max, avg) {
    //var store = {}
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.resultArray = [];
    this.total = 0;
    console.log(this);
    this.cookiesNum();//return the array of random number ;
    locations.push(this);


    //return store(return the random number of cookies)
}


Store.prototype.cookiesNum = function () {
    for (var j = 0; j <= hours.length; j++) {
        var randomcook = getRandomcookies(this.min, this.max);
        var nubmcookies = Math.floor(randomcook * this.avg);
        this.resultArray.push(nubmcookies);
        this.total += this.resultArray[j];
    }

    //console.log(this.resultArray);

};
//the random function ----
function getRandomcookies(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



//var store1 = 
new Store('Seattle', 23, 65, 6.3);

//store1.cookiesNum();


//var store2 = 
new Store('Tokyo', 3, 24, 1.2);
//store2.cookiesNum();
//store2.render();

//var store3 =
new Store('Dubai', 11, 38, 3.7);
//store3.cookiesNum();
//store3.render();

//var store4 = 
new Store('Paris', 20, 38, 2.3);
//store4.cookiesNum();
//store4.render();

//var store5 = 
new Store('Lima', 2, 16, 4.6);
//store5.cookiesNum();
//store5.render();


//to call the render:--------------





Store.prototype.render1 = function () {
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
}







//here we create a table
var tableContainer = document.getElementById('demo');
var tableEl = document.createElement('table');
tableContainer.appendChild(tableEl);





///---Funxtion for table header-------------
function renderHeader() {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    //first col
    var th1El = document.createElement('th');
    th1El.textContent = ' ';
    trEl.appendChild(th1El);
    //show all the col on hours with for loop---------------------
    for (var i = 0; i < hours.length; i++) {
        var th2El = document.createElement('th');
        th2El.textContent = `${hours[i]}  `;
        trEl.appendChild(th2El);
    }
    var th3El = document.createElement('th');
    th3El.textContent = ' Total';
    trEl.appendChild(th3El);
}

renderHeader();

//calculate total col by col


//function for data in tha table
//first row FOR STORE1-----------------------------------------------



Store.prototype.render = function () {

    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    //first row
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for (var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.resultArray[i];
        trEl.appendChild(tdEl);
    }
    var tdTotalEl = document.createElement('td');
    tdTotalEl.textContent = this.total;
    trEl.appendChild(tdTotalEl);
}



for (var i = 0; i < locations.length; i++) {
    locations[i].render();
   
    
}







/*

    //second row-FOR STORE2-------------------------------------------
    var tr3El = document.createElement('tr');
    tableEl.appendChild(tr3El);

    var tdEl = document.createElement('td');
    tdEl.textContent = `${store2.name} `;
    tr3El.appendChild(tdEl);
    for (var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = `${store2.resultArray[i]}  `;
        tr3El
            .appendChild(tdEl);
    }
    //to find the total for first row----------
    var tdTotal2El = document.createElement('td');
    tdTotal2El.textContent = `${store2.total} `;
    tr3El.appendChild(tdTotal2El);

    //third row-FOR STORE3-------------------------------------------

    var tr4El = document.createElement('tr');
    tableEl.appendChild(tr4El);
    //first row
    var td3El = document.createElement('td');
    td3El.textContent = `${store3.name} `;
    tr4El.appendChild(td3El);
    for (var i = 0; i < hours.length; i++) {
        var td3El = document.createElement('td');
        td3El.textContent = `${store3.resultArray[i]}  `;
        tr4El.appendChild(td3El);
    }
    var tdTotal3El = document.createElement('td');
    tdTotal3El.textContent = `${store3.total} `;
    totalArr.push(store3.total);
    tr4El.appendChild(tdTotal3El);


    //fourth row-FOR STORE4-------------------------------------------
    var tr5El = document.createElement('tr');
    tableEl.appendChild(tr5El);
    var td4El = document.createElement('td');
    td4El.textContent = `${store4.name} `;
    tr5El.appendChild(td4El);
    for (var i = 0; i < hours.length; i++) {
        var td4El = document.createElement('td');
        td4El.textContent = `${store4.resultArray[i]}  `;
        tr5El.appendChild(td4El);
    }
    //find the total of the row
    var tdTotal4El = document.createElement('td');
    tdTotal4El.textContent = `${store4.total} `;
    totalArr.push(store4.total);
    tr5El.appendChild(tdTotal4El);


    //  5 ---row-FOR STORE5-------------------------------------------

    var tr6El = document.createElement('tr');
    tableEl.appendChild(tr6El);
    //first row
    var td5El = document.createElement('td');
    td5El.textContent = `${store5.name} `;
    tr6El.appendChild(td5El);
    for (var i = 0; i < hours.length; i++) {
        var td5El = document.createElement('td');
        td5El.textContent = `${store5.resultArray[i]}  `;
        tr6El.appendChild(td5El);
    }


    //find the total of the row
    var tdTotal5El = document.createElement('td');
    tdTotal5El.textContent = `${store5.total} `;
    tr6El.appendChild(tdTotal5El);

*/


    //TOTAL Row===========================
    function renderfooter(){
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Total';
    trEl.appendChild(tdEl);
    var metaTotal=0;
    for(var j=0 ;j < hours.length;j++){
        var totalOfCol = 0;
    for (var i = 0; i < locations.length; i++) {
        var tdEl = document.createElement('td');
        totalOfCol += locations[i].resultArray[j];
    }
        tdEl.textContent = totalOfCol;
        trEl.appendChild(tdEl);
        metaTotal +=totalOfCol ;
    } 
    //find the total of the total
    var tdTotal6El = document.createElement('td');
    
    tdTotal6El.textContent = metaTotal ;
    trEl.appendChild(tdTotal6El);
    }

    
    

renderfooter();

/*var myForm = document.getElementById('myForm');

myForm.addEventListener('submit' , function(event){
  event.preventDefault();
  console.log(event.target);
  var storeName = event.target.name.value;
  var min= event.target.min.value;
  var max= event.target.max.value;
  }*/