//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
    if (name === 'Tyler') {
        return true;
    } else {
        return false;
    }
};


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function(name) {
    name = prompt("Give me your name");
    return name;
};



//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function () {
    var userName = getName();
    alert('Welcome ' + userName);
};


//Next problem




//What is the difference between arguments and parameters?

// Parameters are variables that are processed by a function when it runs. Arguments are passed into the function according to the parameters stated.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // Falsey values = NaN, null, undefined, 0, '', false



//Next Problem



//Create a function called myName that returns your name

var myName = function () {
    return "Michael";
};

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
