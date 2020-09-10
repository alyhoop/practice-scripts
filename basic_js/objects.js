const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};

const person3 = {
  name: {
    first: 'Bob',
    last: 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  }
};

let person9 = {
    name: 'poop',
    greeting: function() {
      alert(`Hi i'm ${this.name}`);
    }
}

let myDataName = 'height';
let myDataValue = '1.75m';
person3[myDataName] = myDataValue;

person.name
person.name.first
person.age
person.interests[1]
person.bio()
person.greeting()
person['age']
person['name']['first']
person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }
person.height
person9.greeting()



let cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'black',
  greeting: function() {
    console.log('Meow!');
  }
}

// Put your code here

let catName = cat.name;
cat.greeting();

// Don't edit the code below here
//
// The cat's name is Bertie.
//
//The cat's color is black.



let band = {
    name: 'poop',
    nationality: 'the states of poop',
    genre: 'folk',
    members: 'infinite',
    formed: 2020,
    split: false,
    albums: [
    {name: 'poop1', released: 2020},
    {name: 'poo2', released: 2020}
    ]
  };


  let bandInfo = 'My fav band is ' + band.name + ' they\'re from the ' + band.nationality + ', you should really check them out'


// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);

let cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${cat.name} the ${cat.breed}`);
  }
}

let cat2 = {
  name : 'Fluffy',
  breed : 'Fluff',
  color : 'orange',
  greeting: function() {
    console.log(`Hello, said ${cat2.name} the ${cat2.breed}`);
  }
}

cat.greeting()
cat2.greeting()
