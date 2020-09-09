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
