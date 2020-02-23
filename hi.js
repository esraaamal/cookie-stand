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

var cat1 = {
    name : 'Frankie',
    age : 0,
    likes : ['cuddling' , 'chasing string' ],
    img : 'images/frankie.jpeg',
    goodWithKids : true,
    goodWithDogs : false,
    goodWithOtherCats : true,
    breed :'Egyptian Mau',
    getAge : function(min , max){
      this.age = getRandomAge(min , max);
    },
    render : function(){
      var container = document.getElementById('kittenProfiles');
      var articleEl = document.createElement('article');
      container.appendChild(articleEl);
      var imgEl = document.createElement('img');
      // console.log(imgEl);
      // console.log(cat1.img);
      imgEl.setAttribute('src' , cat1.img);
      // console.log(imgEl);
      articleEl.appendChild(imgEl);
      var h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = cat1.name;
      var pEl = document.createElement('p');
      pEl.textContent = `${cat1.name} is adorable, and is ${cat1.age} months old.`;
      articleEl.appendChild(pEl);
      var ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(var i = 0 ; i < cat1.likes.length ; i++){
        var liEl = document.createElement('li');
        liEl.textContent = cat1.likes[i];
        ulEl.appendChild(liEl);
      }
    }
  };
  var cat2 = {
    name : 'Serena',
    age : 0,
    likes : ['nourmet food' , 'petting' , 'obedience'],
    img : 'images/serena.jpeg',
    goodWithKids : true,
    goodWithDogs : false,
    goodWithOtherCats : true,
    breed :'Egyptian Mau',
    getAge : function(min , max){
      this.age = getRandomAge(min , max);
    },
    render : function(){
      var container = document.getElementById('kittenProfiles');
      var articleEl = document.createElement('article');
      container.appendChild(articleEl);
      var imgEl = document.createElement('img');
      // console.log(imgEl);
      // console.log(cat1.img);
      imgEl.setAttribute('src' , this.img);
      // console.log(imgEl);
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
    }
  };
  console.table(cat1);//frankie age here will be 0
  console.log(cat1.getAge(1, 9));//frankie age here will be a random number
  console.table(cat1);
  cat1.render();
  
  console.log(cat2.getAge(1, 9));//serene age here will be a random number
  cat2.render();
  //1 create object that will contain all properties and a method to getAge
  
  
  //3 call getAge after creating the object to set the age property to the random age
  
  //2 helper function to calculate random age within range
  function getRandomAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  
  
  // it's always good to have the dom manipulation in a render method in the object
  // we need to:
  // get (from the DOM) who the parent element is going to be. where am I attaching this new element
  // // create image and set the src  attribute to frankie image path then append it to the article
  
  //3 call getAge after creating the object to set the age property to the random age
  
  
  
  
  /* <article>
  <img src="images/frankie.jpeg" />
  <h2>frankie</h2>
  <p>Frankie is adorable, and is 4 months old.</p>
  <ul>
    <li>cuddling</li>
    <li>chasing string</li>
  </ul>
  </article>
  <article>
  <img src="images/serena.jpeg" />
  <h2>Serena</h2>
  <p>This adorable kitty is 9 months old</p>
  <ul>
    <li>nourmet food</li>
    <li>petting</li>
    <li>obedience</li>
  </ul>
  </article> */
  