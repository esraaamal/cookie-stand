// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like (eg: cuddling, chasing string, napping, food)
// - an image
// good with kids
// good with dogs
// good with other cats
// breed (e.g: Egyptian Mau, Persian,British Shorthair)
var cats = [];
function Cat(name , likes , image , goodWithKids , goodWithDogs , goodWithOtherCats, breed ){
  //var cat = {}
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.img = image;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;
  this.breed = breed;
  cats.push(this);
  //return cat
}
Cat.prototype.getAge = function(min , max){
  this.age = getRandomAge(min , max);
};
Cat.prototype.render = function(){
  this.getAge(1, 9);
  var container = document.getElementById('kittenProfiles');
  var articleEl = document.createElement('article');
  container.appendChild(articleEl);
  var imgEl = document.createElement('img');
  imgEl.setAttribute('src' , this.img);
  articleEl.appendChild(imgEl);
  var h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.name;
  var pEl = document.createElement('p');
  pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
  articleEl.appendChild(pEl);
  var ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for(var i = 0 ; i < this.likes.length ; i++){
    var liEl = document.createElement('li');
    liEl.textContent = this.likes[i];
    ulEl.appendChild(liEl);
  }
  // 1 create table
  var tableEl = document.createElement('table');
  // 2 create first row
  var headerRowEl = document.createElement('tr');
  // 3 create second row
  var dataRowEl = document.createElement('tr');
  // 4 create the 3 table headers and assign values to the textContent
  var th1El = document.createElement('th');
  th1El.textContent = 'good with cats';
  var th2El = document.createElement('th');
  th2El.textContent = 'good with kids';
  var th3El = document.createElement('th');
  th3El.textContent = 'good with dogs';

  // 5 append the table headers to the first row
  headerRowEl.appendChild(th1El);
  headerRowEl.appendChild(th2El);
  headerRowEl.appendChild(th3El);
  // 6 creat 3 table data and assign values to the textContent
  // 7 append the table data to the second row
  var td1El = document.createElement('td');
  td1El.textContent = this.goodWithOtherCats;
  dataRowEl.appendChild(td1El);
  var td2El = document.createElement('td');
  td2El.textContent = this.goodWithKids;
  dataRowEl.appendChild(td2El);
  var td3El = document.createElement('td');
  td3El.textContent = this.goodWithDogs;
  dataRowEl.appendChild(td3El);
  // 8 append the two rows to the table
  tableEl.appendChild(headerRowEl);
  tableEl.appendChild(dataRowEl);
  // 9 append the table to the article
  articleEl.appendChild(tableEl);

};
var catForm = document.getElementById('CatForm');
catForm.addEventListener('submit' , function(event){
  event.preventDefault();
  console.log(event.target);
  var catName = event.target.name.value;
  var likes = event.target.likes.value.split(',');
  var breed = event.target.breed.value;
  var goodWithDogs = event.target.goodWithDogs.checked;
  var goodWithcats = event.target.goodWithcats.checked;
  var goodWithKids = event.target.goodWithKids.checked;
  var newCat = new Cat(catName , likes ,'images/frankie.jpeg',goodWithKids,goodWithDogs,goodWithcats, breed);
  console.log(cats);
  newCat.render();
});

new Cat('Frankie' , ['cuddling' , 'chasing string' ] ,'images/frankie.jpeg',true,false,true, 'Egyptian Mau');

new Cat('Serena',['nourmet food' , 'petting' , 'obedience'],'images/serena.jpeg',true, false, false,'Egyptian Mau');


new Cat('Jumper',['nourmet food' , 'obedience'],'images/jumper.jpeg', true, true, true , 'Persian');

for(var i = 0 ; i< cats.length ; i++){
  cats[i].render();
}

function getRandomAge(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}