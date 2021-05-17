// console.log('hello world')

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

img1.addEventListener('click', runFunctionImage1);

img2.addEventListener('click', function(){
    console.log("I am image 2")
});

img3.addEventListener('click', function(){
    console.log("I am image 3");
})

function runFunctionImage1(){
    console.log('I am image 1');
}

//need an array for all of the images that contains the following
//1. path to image
//2. the totoal number of clicks that the image gets
//3. the number of times the image shows up
//4. needs an imageID for each image



let productArray = [
    {htmlID: 'bag', imgURL:'../images/bag.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'banana', imgURL:'../images/banana.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'bathroom', imgURL:'../images/bathroom.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'boots', imgURL:'../images/boots.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'breakfast', imgURL:'../images/breakfast.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'bubblegum', imgURL:'../images/bubblegum.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'chair', imgURL:'../images/chair.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'cthulhu', imgURL:'../images/cthulhu.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'dog-duck', imgURL:'../images/dog-duck.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'dragon', imgURL:'../images/dragon.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'pen', imgURL:'../images/pen.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'pet-sweep', imgURL:'../images/petsweep.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'scissors', imgURL:'../images/scissors.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'shark', imgURL:'../images/shark.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'sweep', imgURL:'../images/sweep.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'tauntaun', imgURL:'../images/tauntaun.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'unicorn', imgURL:'../images/unicorn.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'water-can', imgURL:'../images/water-can.jpg', totalViews: 0, totalVotes: 0},
    {htmlID: 'wine-glass', imgURL:'../images/wine-glass.jpg', totalViews: 0, totalVotes: 0},
]

//consolidate all the respons function (callbacks) into one function

function clickfunction(){
    
}

//display 3 images from array on startup
fuction renderImages(){
    
}