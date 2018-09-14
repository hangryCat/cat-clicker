const catElement1 = document.querySelector('h1#cat-name1');
const catElement2 = document.querySelector('h1#cat-name2');

const clickDiv = document.getElementsByClassName('clickDiv');

const clickValue = document.querySelector('#clickValue');

const catName1 = 'Dormammu';
const catName2 = 'Jake';

catElement1.innerText = catName1;
catElement2.innerText = catName2;

for (var i = 0; i < clickDiv.length; i++) {
  clickDiv[i].addEventListener('click', function() {
  console.log("click");
  clickValue.innerText++;
  });
};
