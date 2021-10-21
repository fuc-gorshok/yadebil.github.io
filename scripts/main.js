var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This is ' + myName + '`s YOBA';
}
myButton.onclick = setUserName();
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is ' + storedName + '`s YOBA';
}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yoba.png') {
        myImage.setAttribute ('src', 'images/yoba2.png');
    } else {
        myImage.setAttribute ('src','images/yoba.png');
    }
}