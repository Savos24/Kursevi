// array
var arr = [1, "2", true, "null"]; // 4
arr[0]; // 1
arr[1]; // '2'
arr[3]; // 'null'
arr.length = 4;

var arr2 = [[], []];
// Iterator/Iteratee
arr2[0]; // [[1], [2]]

//Object
var d = new Date();
var pers = new Person();
pers.name = "Aleksandar";
pers.height = 200;

var person = {
  // key (property) /value pair
  name: "Aleksandar", // prop
  height: 200,
  hobbies: ["Gaming"],
  spouse: {
    name: "Bojana",
    height: 190,
    hobbies: ["Inspirational"]
  }
};

obj.name; // 'Aleksandar'
obj.lastName; // undefined
obj.hobbies; // ['Gaming']
obj.pet; // undefined
obj.pet.breed; // Exception/Error - pet is undefined

// 0. Napraviti par knjiga koja ima svojstva:
// 1. Naziv
// 2. Autore
// 3. Godinu izdavanja
// 4. Broj Stranica
// 5. Izdavacku kucu

var book1 = {
  name: "Witcher",
  Author: Cetinski,
  Date: 2005,
  Pages: 777,
  Publisher: "9gag"
};

var book2 = {
  name: "Kad cvetaju Tikve",
  Author: Boban,
  Date: 1995,
  Pages: 77,
  Publisher: "Jovan Ducic"
};

var book3 = {
  name: "Star Wars",
  Author: "Old Republic",
  Date: 2077,
  Pages: 123456789,
  Publisher: "Jedi Order"
};

//

var books = [
  {
    name: "Star Wars",
    Authors: ["Old Republicand Co"],
    Date: 2077,
    Pages: 123456789,
    Publisher: {
      name: "Jedi Order"
    }
  },
  {
    name: "Kikimore",
    Authors: ["Old", "and Co"],
    Date: 237,
    Pages: 1234789,
    Publisher: {
      name: "Je Order"
    }
  }
];

var starWars = books[1];

// Loops
// 1. for - best for iterables
// 2. while
// 3. do/while
// Make an object iterable - Object.entries, Object.keys, Object.values

for (var i = 0; i < 10; i++) {
  console.log(i);
}

var a10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < a10.length; i++) {
  console.log(a10[i]);
}

// Iterate through all books.
for (var i = 0; i < books.length; i++) {
  //declare the book with the current index as the one we are accessing
  var book = books[i];
  // define a variable that we will combine the author name into.
  var authorsString = "";
  // access the authors in a local variable.
  var authors = book.authors;

  // iterate through all the authors in order to structure an authors string and define it as a property for the book object
  for (var j = 0; j < authors.length; j++) {
    authorsString = authorsString + authors[i];
    if (j !== authors.length) {
      authorsString += ", ";
    }
  }
  book.authorsString = authorsString;
}

//

function setAuthorsString(book) {
  // define a variable that we will combine the author name into.
  var authorsString = "";
  // access the authors in a local variable.
  var authors = book.authors;

  // iterate through all the authors in order to structure an authors string and define it as a property for the book object
  for (var j = 0; j < authors.length; j++) {
    authorsString = authorsString + authors[i];
    if (j !== authors.length) {
      authorsString += ", ";
    }
  }
  console.log(authorsString);
  book.authorsString = authorsString;
}

function foo() {
  // Function declaration / Hoisting
  console.log("bar");
}

const bar = function() {
  // Function expression
};

// 0. Napraviti Funkciju koja sabira dva broja
// 1. Napraviti funkciju koja oduzima dva broja
// 2. koja mnozi
// 3. koja deli

function add(x, y) {
  var sum = x + y;
  console.log(sum);
}

function subtract(x, y) {
  var sum = x - y;
  console.log(sum);
}

function multiply(x, y) {
  var sum = x * y;
  console.log(sum);
}

function devide(x, y) {
  var sum = x / y;
  console.log(sum);
}

// 0. Napraviti funkciju koja vraca apsolutnu vrednost.
// 1. Proveriti da li je vrednost manja od nule
// 2. Ako nije vratiti rezultat
// 3. Ako jeste onda sabrati sa pozitivnom vrednoscu koja je duplirana (-40 + 40 + 40)

function absolute(x) {
    for(x < 0;) {
        return x * -1;
    }
    return(x);
}

var x = 0;
//while
while (x < 100) {
    console.log(x);
    x++;
}

do {
    console.log(x);
    x++;
}

//for/of
for (var book of books) {
    console.log(book)
}