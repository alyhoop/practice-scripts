//Modify the function checkObj to test if an object passed to the function (obj)
//Mcontains a specific property (checkProp). If the property is found, return
//that property's value. If not, return "Not Found".


function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp))
    return obj[checkProp];
  else
    return "Not Found";
  // Only change code above this line
}

<!--------------------Challenge---------------------------------------------->

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Hozier",
    "title": "Cherry Wine",
    "release_year": 2001,
    "formats": [
      "CD",
      "8T",
      "LP"
    ]
  }
];

<!--------------------Challenge---------------------------------------------->
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line

<!--------------------Challenge---------------------------------------------->

// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

<!--------------------Challenge---------------------------------------------->
