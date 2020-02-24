

var resultArray = [];
var total = 0;
var store1 = {
    name: "Seattle",
    min: 23,
    max: 65,
    avg: 6.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    randomCustomer: 0,

    randomFun: function (min, max) {
        this.randomCustomer = getRandomcookies1(min, max);
    },
    cookiesNum: function () {

        for (var j = 0; j < this.hours.length; j++) {
            resultArray.push(getRandomcookies1(this.min, this.max));
            total += resultArray[j];
            console.log(resultArray[j]);
        }
        console.log(total);
    },
    render: function () {
        var container = document.getElementById('demo');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = store1.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i <= store1.hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${this.hours[i]} : ${resultArray[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `Total : ${total} cookies`;
    }
};


function getRandomcookies1(min, max) {
    min = Math.ceil(min *store1.avg);
    max = Math.floor(max *store1.avg);
    return Math.floor(Math.random() * (max - min)) + min;
}

store1.cookiesNum();
store1.render();



//new store--------------------------------------------//
var resultArray2 = [];//iwill store the random nuber of customer per our//
var total2 = 0; //the final sum of the cookies

var store2 = {
    name: "tokyo",
    min: 3,
    max: 24,
    avg: 1.2,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    //creata a function to count the number of cookies//
    cookiesNum: function () {
        for (var j = 0; j <= store2.hours.length; j++) {
            resultArray2.push(getRandomcookies2(this.min, this.max));
            total2 += resultArray2[j];
        }
        console.log(total2);

    },
    //start render-----//
    render: function () {

        var container = document.getElementById('demo');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = store2.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i <= store2.hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${this.hours[i]} : ${resultArray2[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `Total : ${total2} cookies`;
    }//end render function//
};



function getRandomcookies2(min, max) {
    min = Math.ceil(min *store2.avg);
    max = Math.floor(max *store2.avg);
    return Math.floor(Math.random() * (max - min)) + min;
}
store2.cookiesNum();
store2.render();


//new store--------------------------------------------//
var resultArray3 = [];//iwill store the random nuber of customer per our//
var total3 = 0; //the final sum of the cookies

var store3 = {
    name: "Dubai",
    min: 11,
    max: 38,
    avg: 3.7,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    //creata a function to count the number of cookies//
    cookiesNum: function () {
        for (var j = 0; j <= store3.hours.length; j++) {
            resultArray3.push(getRandomcookies3(this.min, this.max));
            total3 += resultArray3[j];
        }
        console.log(total3);

    },
    //start render-----//
    render: function () {

        var container = document.getElementById('demo3');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = store3.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i <= store3.hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${this.hours[i]} : ${resultArray3[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `Total : ${total3} cookies`;
    }//end render function//
};




function getRandomcookies3(min, max) {
    min = Math.ceil(min *store3.avg);
    max = Math.floor(max *store3.avg);
    return Math.floor(Math.random() * (max - min)) + min;
}
store3.cookiesNum();
store3.render();


//end store ----------------------//







//new store--------------------------------------------//
var resultArray4 = [];//iwill store the random nuber of customer per our//
var total4 = 0; //the final sum of the cookies

var store4 = {
    name: "Paris",
    min: 20,
    max: 38,
    avg: 2.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    //creata a function to count the number of cookies//
    cookiesNum: function () {
        for (var j = 0; j <= store4.hours.length ; j++) {
            resultArray4.push(getRandomcookies4(this.min, this.max));
            total4 += resultArray4[j];
        }
        console.log(total4);

    },
    //start render-----//
    render: function () {

        var container = document.getElementById('demo3');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = store4.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i <= store4.hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${this.hours[i]} : ${resultArray4[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `Total : ${total4} cookies`;
    }//end render function//
};



function getRandomcookies4(min, max) {
    min = Math.ceil(min *store4.avg);
    max = Math.floor(max *store4.avg);
    return Math.floor(Math.random() * (max - min)) + min;
}
store4.cookiesNum();
store4.render();







//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk//
//new store--------------------------------------------//
var resultArray5 = [];//iwill store the random nuber of customer per our//
var total5 = 0; //the final sum of the cookies

var store5 = {
    name: "Lima",
    min: 2,
    max: 16,
    avg: 4.6,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    //creata a function to count the number of cookies//
    cookiesNum: function () {
        for (var j = 0; j <= store5.hours.length ; j++) {
            resultArray5.push(getRandomcookies5(this.min, this.max));
            total5 += resultArray5[j];
        }
        console.log(total5);

    },
    //start render-----//
    render: function () {

        var container = document.getElementById('demo3');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = store5.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i <= store5.hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${this.hours[i]} : ${resultArray5[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `Total : ${total5} cookies`;
    }//end render function//
};



function getRandomcookies5(min, max) {
    min = Math.ceil(min *store5.avg);
    max = Math.floor(max *store5.avg);
    return Math.floor(Math.random() * (max - min)) + min;
}
store5.cookiesNum();
store5.render();



