// Defining the functions

// Task1
function isArrayLengthOdd(numbers) {
   state = false;
   if (numbers.length % 2) state = true;
   console.log(state);
}

// Task2
function isArrayLengthEven(numbers) {
    state = true;
    if (numbers.length % 2) state = false;
    console.log(state);
}

// Task3
function addLailaToArray(instructors) {
    instructors.push("Laila");
    // To verify
    console.log(instructors);
  }

// Task4
function eliminateTeam(teams) {
    teams.pop();
    // To verify
    console.log(teams);
}

// Challenge1
function secondHalfOfArrayIfItIsEven(fruits) {
    let range = fruits.length
    if (range % 2) fruits = [];
    else fruits = fruits.slice(range/2);
    console.log(fruits);

}

// Challenge2
function youGottaCalmDown(shout) {
    last_char = shout.indexOf("!") + 1;
    shout = (shout.indexOf("!") === -1) ? shout : shout.slice(0,last_char);
    console.log(shout);
}

// Calling the functions

// Task1 
isArrayLengthOdd([1, 2, 3]);
isArrayLengthOdd([1, 2, 3, 4]);

//Task2
isArrayLengthEven([1, 2, 3]);
isArrayLengthEven([1, 2, 3, 4]);

// Task3
addLailaToArray(["Mshary", "Hasan"]);

// Task 4
eliminateTeam(["Brazil", "Germany", "Italy", "France"]);

// Challenge1
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana"]);
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry", "watermelon"])

// Challenge2
youGottaCalmDown("HI!!!!!!!!!!")
youGottaCalmDown("Taylor Schwift!!!!!!!!!!!")
youGottaCalmDown("Hellooooo")