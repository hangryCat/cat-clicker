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
  let cat = catsArray[i].name;

  const catInfo = document.createElement('section');
  catInfo.classList.add('cat-info');
  container.appendChild(catInfo);

  const catName = document.createElement('h1');
  catName.innerText = catsArray[i].name;
  catInfo.appendChild(catName);

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

  const catClicks = document.createElement('h1');
  catInfo.appendChild(catClicks);

  const catValue = document.createElement('h1');
  catClicks.innerText = "Number of Clicks:"
  catValue.innerText = 0;
  catInfo.appendChild(catValue);
};
