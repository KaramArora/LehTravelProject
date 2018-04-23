var findMore = document.querySelector('.callout')
var maincontent = document.querySelector('.main-content')
var togglelist = document.getElementById('togglelist')
var attractions = document.querySelector('.attractions')
var imgPage = document.getElementById('img-page');
var homePage = document.getElementById('home');
var addname = document.querySelector('input.addnames');
var addnamebutton = document.querySelector('button.addnamebutton');


//findMore.addEventListener('click',  () => {
//    if (maincontent.style.display == 'none') {
//            findMore.textContent = 'Hide content';
//            maincontent.style.display = 'block';
//        }else {
//            findMore.textContent = 'Find out more';
//            maincontent.style.display = 'none';
//        };
//});

imgPage.addEventListener('click', () => {
    alert('Sorry, no content available');
});

//homePage.addEventListener('click', () => {
//    alert('This is home');
//});

//togglelist.addEventListener('click', () => {
//    if (attractions.style.display == 'none') {
//            togglelist.textContent = 'Hide list'
//            attractions.style.display = 'block';
//        }else {
//            togglelist.textContent = 'Show list'
//            attractions.style.display = 'none';
//        }
//    
//});

addnamebutton.addEventListener('click', () => {
    var ul = document.getElementsByClassName('names')[0];
    var li = document.createElement('li');
    li.textContent = addname.value;
    ul.appendChild(li);
   
});





