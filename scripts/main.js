let myImage = document.querySelector('img');
let images = ['squatting', 'bench', 'deadlift'];
let indice = 0;
myImage.onclick = function () {
    myImage.setAttribute('src', 'images/' + images[++indice % 3] + '.png');
    console.log(indice);
} 
let myButton = document.querySelector('button');
function setUserName() {
    userName = prompt("Enter user name");
    if(!userName) setUserName();
    localStorage.setItem('name', userName);
    document.querySelector('name').textContent = ' ' + userName;
}
myButton.onclick = setUserName;
myName = localStorage.getItem('name');
console.log(myName);
if(!myName || myName == null) {
    console.log('is null');
    setUserName();
}
else document.querySelector('name').textContent = localStorage.getItem('name');
