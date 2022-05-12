var div, 
  container = document.getElementById("container");
console.log(container);
for(let i = 0; i < 20; i++) {
  div = document.createElement("div");
  div.className = 'box';
  console.log(div);
  div.onclick = function() {
    alert("this is a box " + (i+1))  
  }

  container.appendChild(div)
}

function defaultParams(name = "Bello Ibrahim", activity = "skiing") {
  console.log(`${name} loves ${activity}`);
}

defaultParams('Bello Alli', 'Football');
defaultParams('Zainab', 'Speaking');
defaultParams('Abdul', 'Programming');
defaultParams();

var defaultPerson = {
  name: {
    first: 'Ibrahim',
    last: 'Bello'
  },
  favActivity: 'skiing'
}

function logActivity(p=defaultPerson) {
  console.log(`${p.name.first} loves ${p.favActivity}`)
}

logActivity();

// Arrow Function
const lodify = (firname = 'Alli') => `${firname} of Nigeria`
console.log(lodify('Ibrahim'));
console.log(lodify());

var _lodify = (firstName, land) => {
  if (!firstName) {
    throw new Error('A firstname is required to lordify');
  }

  if (!land) {
    throw new Error('A lord must have a land');
  }

  return `${firstName} of ${land}`
}

_lodify('Ib', 'Lagos');

let resorts = ['Ib', 'Ra', 'hIM']

var tohoe = {
  resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
  print: (delay=1000) => {

    setTimeout(
      console.log(this === window)
    ,delay);
  }
}

tohoe.print(50000);