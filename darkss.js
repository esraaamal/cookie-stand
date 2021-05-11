`use strict`;

// document.getElementById('hi').addEventListener("change", function(){
//     document.getElementById('note').style.visibility = "visible"
// });
document.getElementById('hi').addEventListener("click", function() {
    document.getElementById('note').style.visibility = "visible";
   
});



// var content =document.getElementById("content");
// var button =document.getElementById("show");

// button.onclick=function(){

// if(content.className== "open"){
//     //shrink the box
//     content.className="";
//     button.innerHTML="Show More";

// }else{

//     //expand the box
//     content.className= "open";
//     button.innerHTML="Show Less"
// }


// }


function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
}

function playSound(e){
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio)return ;//stop the function running;
    audio.currentTime=0;//rewind the sound from start
    key.classList.add('playing');
    audio.play()
   console.log(e)
}
const keys=document.querySelectorAll('.key')
keys.forEach(key=>key.addEventListener('transitionend',removeTransition))

window.addEventListener('keydown',playSound)

function writeNote(e){
    // console.log(e.keyCode)
    const note1=document.getElementById('note');
    if(e.keyCode===8){
     note1.textContent=note1.textContent.substring(1,note1.textContent.length-1)
    }
    else{
    note1.textContent= note1.textContent+e.key}
}
window.addEventListener('keyup',writeNote)

// var timeout = setTimeout("location.reload(true);",5000);
// function resetTimeout() {
//   clearTimeout(timeout);
//   timeout = setTimeout("location.reload(true);",5000);
//   console.log(timeout)
// }















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