// const catElement1 = document.querySelector('h1#cat-name1');
// const catElement2 = document.querySelector('h1#cat-name2');
//
// const clickDiv = document.getElementsByClassName('clickDiv');
//
// const clickValue = document.querySelector('#clickValue');
//
// const catName1 = 'Dormammu';
// const catName2 = 'Jake';
//
// catElement1.innerText = catName1;
// catElement2.innerText = catName2;
//
// for (var i = 0; i < clickDiv.length; i++) {
//   clickDiv[i].addEventListener('click', function() {
//   console.log("click");
//   clickValue.innerText++;
//   });
// };

// Second Requirements - v2
const container = document.querySelector('.container');

const catsArray = [
  {name: 'Dormammu', src: 'images\757904009_521561154_l.jpg'},
  {name: 'Jake', src: 'images\cat.jpg'},
  {name: 'Tomas', src: 'images\cute-cat-pictures-fluffy-cat-licking-its-paws.jpg'},
  {name: 'Kuro', src: 'images\hamiltoncatqmode.jpg'},
  {name: 'Tama', src: 'images\maxresdefault.jpg'},
  {name: 'Unko', src: 'images\Top-plus-beaux-chats-9.jpg'}
]

for (var i = 0; i < catsArray.length; i++) {
  const catDiv = document.createElement('div');
  catDiv.classList.add('clickable');
  container.appendChild(catDiv);

  const catName = document.createElement('h1');
  catName.innerText = catsArray[i].name;

  const catImg = document.createElement('img');

  const catClicks = document.createElement('h1');
  const catValue = document.createElement('h1');
  catClicks.innerText = "Number of Clicks:"
  catValue.innerText = 0;

  catDiv.appendChild(catName);
  catDiv.appendChild(catImg);
  catDiv.appendChild(catClicks);
  catDiv.appendChild(catValue);
}
