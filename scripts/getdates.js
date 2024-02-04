//Current year
document.getElementById("year").innerHTML = new Date().getFullYear();
//Last modified 
document.getElementById('lastModified').innerHTML = new Date(document.lastModified);

//navigation bar
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
}
);
