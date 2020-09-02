//Task
//Write a 'welcome' function that takes a parameter 'language' (always a string),
// and returns a greeting - if you have it in your database. It should default
// to English if the language is not in the database, or in the event of an
// invalid input.

function greet(language) {

	let obj = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }

  return obj[language] || obj.english
}

//Tests
Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
