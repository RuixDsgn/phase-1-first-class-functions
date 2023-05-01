function addToAFunction () {
    console.log("Hello");
}


function receivesAFunction(addToAFunction) {
    addToAFunction();
}

function returnsANamedFunction() {
   return function porterRobinson() {
    console.log("Is anyone there?");
   }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hello Rui.");
    }
}