`use strict`;

document.getElementById('hi').addEventListener("change", function(){
    document.querySelector('.center1').style.background = "white";
});
document.getElementById('hi').addEventListener("click", function() {
    document.querySelector('.center1').style.background = "rgba(0,0,0,.3)";
    body.style.background='red'
});


var content =document.getElementById("content");
var button =document.getElementById("show");

button.onclick=function(){

if(content.className== "open"){
    //shrink the box
    content.className="";
    button.innerHTML="Show More";

}else{

    //expand the box
    content.className= "open";
    button.innerHTML="Show Less"
}


}


// var ssImageArray =[
//     'blue.jpg',
//     'fish-logo.png',
//     'hi.jpeg'

// ];

// var myImages = [];
// var theImage =document.getElementById('theImage');
// var fishpic =document.getElementById('fishpic');

// function FishBus(name){
//     this.name=name.split('.')[0];
//     this.urlImage =`img/${urlImage}`;
//     myImages.push(this);
// }



// for(var i=0 ;i< ssImageArray.length ;i++){
//     console.log(ssImageArray[i]);
//     new FishBus(ssImageArray[i]);
// }

// var ssImageArray =[];
// ssImageArray[0] = 'blue.jpg' ;
// ssImageArray[1] = 'hi.jpeg' ;
// ssImageArray[2] = 'fish.logo.png';

// var j=0;
// var time =3000 ;
// function changeImage(){
//     document.slide.src =ssImageArray[i];
//     if(j< ssImageArray.length -1){
//         j++;
//     }else{
//         j=0
//     }
//     setTimeout("changeImage()" ,time);
// }

// window.onload = changeImage ;

// function clickImage(event){
//   event.preventDefault();
// changeImage();

// }


// fishpic.addEventListener('click' ,clickImage);