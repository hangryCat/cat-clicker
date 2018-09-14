// Second Requirements - v2
const container = document.querySelector('#container');

const catsArray = [
  {name: 'Dormammu', image: 'images/757904009_521561154_l.jpg'},
  {name: 'Jake', image: 'images/cat.jpg'},
  {name: 'Tomas', image: 'images/cute-cat-pictures-fluffy-cat-licking-its-paws.jpg'},
  {name: 'Kuro', image: 'images/hamiltoncatqmode.jpg'},
  {name: 'Tama', image: 'images/maxresdefault.jpg'},
  {name: 'Unko', image: 'images/Top-plus-beaux-chats-9.jpg'}
];

for (var i = 0; i < catsArray.length; i++) {
  // variable that stores current cat's name to use with event listener
  let cat = catsArray[i].name;
  // creates a section
  // adds class to section
  // appends section to container
  const catInfo = document.createElement('section');
  catInfo.classList.add('cat-info');
  container.appendChild(catInfo);
  // same as above
  const catName = document.createElement('h1');
  catName.innerText = catsArray[i].name;
  catInfo.appendChild(catName);
  // same as above, but..
  // adds event listener for each div that's being created
  // uses the cat variable above to use within console.console.log
  // function increments element's content that started as the number 0
  const catDiv = document.createElement('div');
  catDiv.classList.add('clickable');
  catInfo.appendChild(catDiv);
  catDiv.addEventListener('click', function() {
    console.log(cat + '\'s image was clicked!');
    catValue.innerText++;
  });

  const catImg = document.createElement('img');
  catImg.setAttribute('src', catsArray[i].image);
  catDiv.appendChild(catImg);
  // the class 'inline' is used to make the last 2 h1 be inline
  // I only know how to change the innerText of an element if it's all numbers
  // not sure what to do if they're mixed with strings yet
  const catClicks = document.createElement('h1');
  catClicks.classList.add('inline');
  catClicks.innerText = "Clicks: "
  catInfo.appendChild(catClicks);

  const catValue = document.createElement('h1');
  catValue.classList.add('inline');
  catValue.innerText = 0;
  catInfo.appendChild(catValue);
};
