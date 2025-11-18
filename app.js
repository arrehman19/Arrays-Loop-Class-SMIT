// var pets = [];

// pets[0] = "Dog";
// pets[1] = "fog";
// pets[2] = "cat";
// pets[3] = "fish";
// pets[4] = "parrot";

// console.log("Pets Before", pets);

// pets.splice(2,4, "Homstur", "Rabbit");
// console.log("Pets After", pets);

// LOOPS START HORHE HAIN
var cleanestCities = [
  "Cheyenne",
  "Santa Fe",
  "Tucson",
  "Great Falls",
  "Honolulu",
  "Huntsville",
  "Salt Lake City"
];

var cityFromUser = prompt("Enter your city name:");

// Loop         Condition
for (var i = 0; 1 <= cleanestCities.length - 1; i++) {
    if (cityFromUser === cleanestCities[i]) {
      var rank = i + 1;
    alert(
      cityFromUser + " is one of the cleanest cities and ranked at number " + rank);
  }
}

// i == 0 ==> true ==> i++, i = 1;
// i == 1 ==> true ==> i++, i = 2; 