//////////////////////////////////////////////////////////////////////
// Demo 1 - 

// Create an ARRAY of 3 strings
let bovines = ["Jersey", "Guernsey", "Longhorn"];

// Display the 3rd type
console.log(bovines[2]);

// for (original)
for (let i = 0; i < bovines.length; i++) {
   console.log(bovines[i]);
}

// for of
for (let eachItem of bovines) {
   console.log(eachItem)
}

// for (original) using subscript
// for (let i = 0; i < bovines.length; i++) {
//    console.log(`${i} - ${bovines[i]}`);
// }

// for (original) using subscript
for (let i = 0; i < bovines.length; i++) {
   console.log(`${i+1} - ${bovines[i]}`);
}


//////////////////////////////////////////////////////////////////////
// Demo 2 - 

// Create a single OBJECT that descrbes my pet Longhorn 
// named Buckee that knows his breed and age
let pet = {
  name : "Buckee",
  breed: "Longhorn",
  age: 27
};

// Display his name and age
console.log(`${pet.name} ${pet.age}`);

// Use loop to display properties
for (let propertyName in pet) {
   console.log(propertyName + " " + pet[propertyName]);
       // normally, we access a property in an object like pet.name or pet.age
       // but JavaScript lets us use array like notation with the subscript being the
       // proprty name (ex:  pet["name"] or pet["age"])
}



//////////////////////////////////////////////////////////////////////
// Demo 3 - 

// Create an OBJECT called 'trip' that has the trip leader's name in it, 
// the trip destination, and an ARRAY of the people that went on the trip
let trip = {
   leader : "Dana",
   destination : "Movies",
   attendees: ["Ron", "Shawn"]
};

// Display the leader and destination
console.log(`${trip.leader} ${trip.destination}`);

// Display the attendees with a **FOR** loop
for (let i = 0; i < trip.attendees.length; i++) {
   console.log(trip.attendees[i]);
}

// Display the attendees with a **FOR-Of** loop
// Note: in this case you dob't know the index of
//       the 'current' element
for (let name of trip.attendees) {
   console.log(name);
}

// Write a function to display the name of an attendee
// and then call it for each attendee
function displayItem(name) {
   console.log(name);
 }

// Note: not a very flexible idea
displayItem(trip.attendees[0]);
displayItem(trip.attendees[1]);

// Display the attendees with a **forEach** using the function above
// Note:  forEach creates an invisible loop for you
trip.attendees.forEach(displayItem)

// Same as example above but with an arrow function instead of
// the displayItem function

// HOW TO:  How to create the array function?
//    move the function into the parameter, 
//    rip off the word function and the name of the function,
//    and put => before the {}
// Note:  I kept the { } in this example 
trip.attendees.forEach( (name) => {
   console.log(name);
 });

// HOW TO (again):  How to create the array function?
//    move the function into the parameter, 
//    rip off the word function and the name of the function,
//    and put => before the {}
// Note:  I removed the { } because it was a 1 line function
//        but that also means I had to remove the ; at the end 
//        of the one line
 trip.attendees.forEach( (name) => 
   console.log(name)
 );


//////////////////////////////////////////////////////////////////////
// Demo 4 - 

// Create an ARRAY of snacks where each stack (object) has a name 
// and a calorie count
let snacks = [
   {
      name : "Snickers",
      calorieCount : 300
   },
   {
      name : "Reese's Peanut Butter Cups",
      calorieCount : 400
   }
];

//console.log(snacks[0].name);
//console.log(snacks[1].name);

// Display each of the snacks
for (let snack of snacks) {
   console.log(`${snack.name} costs ${snack.calorieCount} calories`);
}



///////////////////////////////////////////////////////////
// RANDOM EXAMPLE OF AN ARROW FUNCTION WITH NO PARAMETERS

/*
let hello = () => console.log("Hello")
hello();

function hello() {
   console.log("Hello");
}
*/
