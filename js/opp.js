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
    // console.log(this);
    this.cookiesNum();//return the array of random number ;
    locations.push(this);


    //return store(return the random number of cookies)
}


Store.prototype.cookiesNum = function () {
    for (var j = 0; j <hours.length; j++) {
        var randomcook = getRandomcookies(this.min, this.max);
        var nubmcookies = Math.floor(randomcook * this.avg);
        this.resultArray.push(nubmcookies);
        this.total += this.resultArray[j];
        // console.log(`${hours[j]}:${nubmcookies}cookies`)
    }

    console.log(locations);

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

new Store('jordan' ,3,22,2.9);
//to call the render:--------------





Store.prototype.render1 = function () {
    var container = document.getElementById('demo');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    var h6El = document.createElement('h6');
    articleEl.appendChild(h6El);
    h6El.textContent = "New";
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
    var mybutton=document.createElement('button');
    mybutton.textContent=`more information about ${this.name} Store`
    articleEl.appendChild(mybutton);
}







//here we create a table
var tableContainer = document.getElementById('demoTable');
var index, tableEl = document.createElement('table');
tableEl.setAttribute('id','tableEl')
var tableId=document.getElementById('tableEl')
tableContainer.appendChild(tableEl);



///---Funxtion for table header-------------
function renderHeader() {
    let headTable=document.createElement('thead');
    tableEl.appendChild(headTable)
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    //first col
    var th1El = document.createElement('th');
    th1El.textContent = ' ';
    trEl.appendChild(th1El);
    //show all the col on hours with for loop---------------------
    for (var i = 0; i < hours.length; i++) {
        var th2El = document.createElement('th');
        th2El.textContent = `${hours[i]}`;
        trEl.appendChild(th2El);
    }
    var th3El = document.createElement('th');
    trEl.appendChild(th3El);
    th3El.textContent = ' Total';
    var tdel4=document.createElement('th');
    trEl.appendChild(tdel4)
    tdel4.textContent="Delete"
    
}

renderHeader();

//calculate total col by col


//function for data in tha table
//first row FOR STORE1-----------------------------------------------



Store.prototype.render = function () {

    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    trEl.setAttribute('id',`${this.name}`)

    //first row
    var tdEl = document.createElement('td');
    // tdEl.setAttribute("rowspan",2)
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

    var tdDelete = document.createElement('td');
    trEl.appendChild(tdDelete);
    var buttonEl=document.createElement('button');
    buttonEl.setAttribute('class','btn')
    tdDelete.appendChild(buttonEl);
    buttonEl.setAttribute('type','button')
    var iElem = document.createElement('i');
  buttonEl.appendChild(iElem);
    iElem.setAttribute('class','fas fa-trash-alt')

    

    
}



for (var i = 0; i < locations.length; i++) {
    locations[i].render();
    locations[i].render1();
   
    
}








    //TOTAL Row===========================
    function renderfooter(){
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    trEl.setAttribute('class','total1')
    
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

    var tdDelete = document.createElement('td');
    // tdDelete.setAttribute('id','deleteRow')
    trEl.appendChild(tdDelete);
    var buttonEl=document.createElement('button');
    tdDelete.appendChild(buttonEl);
    buttonEl.setAttribute('type','button')
    var iElem = document.createElement('i');
  buttonEl.appendChild(iElem);
    iElem.setAttribute('class','fas fa-trash-alt')
    buttonEl.setAttribute('onclick','myFunction()')


}

renderfooter();
///////////////////////////////delete row function
function myFunction() {
    alert('you can\'t delete this Row')
   }



//////to delete specific rows///////
$('#tableEl').on('click','.btn',function(){
    $(this).closest('tr').remove();
    locations.splice(0,1)
    tableEl.deleteRow(tableEl.rows.length-1);
    renderfooter()
})



var myForm = document.getElementById('myForm');

myForm.addEventListener('submit' , function(event){
  event.preventDefault();
  console.log(event.target);
  var storeName = event.target.name.value;
  var min= Number(event.target.min.value);
  var max= Number(event.target.max.value);
  var avg=event.target.avg.value;
  if(min <max){
   var endfor =new Store(storeName, min, max, avg);
   tableEl.deleteRow(tableEl.rows.length-1);
   endfor.render();
   renderfooter();
  }else{
    
      alert('min is small than max');
  }
  });

//   window.oncontextmenu=function(e){
//       e.preventDefault();

//   }

    