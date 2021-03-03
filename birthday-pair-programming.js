// GOAL: To display a table in the console of people's half birthdays.
// We are going to sort this file by variables, functions, and execution.

// VARIABLES
const gameGroup = [
  {
    birthday: "April 16, 1991",
    name: {
      first: "Anna",
      last: "Brekke",
    },
    init: function() {
      this.age = getAge(this.birthday);
      delete this.init;
      return this;
    }
  }.init(),
  {
    birthday: "February 27, 1990",
    name: {
      first: "Andrew",
      last: "Brenner",
    },
    init: function() {
      this.age = getAge(this.birthday);
      delete this.init;
      return this;
    }
  }.init(),
  {
    birthday: "July 22, 1989",
    name: {
      first: "Felicia",
      last: "Brenner",
    },
    init: function() {
      this.age = getAge(this.birthday);
      delete this.init;
      return this;
    }
  }.init(),
  {
    birthday: "December 8, 1987",
    name: {
      first: "Dan",
      last: "Richmond",
    },
    init: function() {
      this.age = getAge(this.birthday);
      delete this.init;
      return this;
    }
  }.init(),
  {
    birthday: "January 30, 1989",
    name: {
      first: "Justin",
      last: "Veres",
    },
    init: function() {
      this.age = getAge(this.birthday);
      delete this.init;
      return this;
    }
  }.init()
];

// FUNCTIONS
  function getAge(birthdate) {
  const birthday = new Date(birthdate).getTime();
  const now = Date.now();
  const age = Math.floor((now - birthday) / 31536000000);
  
  return age;
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Look up sorting algorithms 
function sortByAge(a, b) {
  if(a.age < b.age) {
    return -1
  }
  if(a.age > b.age) {
    return 1
  }
  return 0
}

function createHalfBirthdayTable(groupMembers) {
  return groupMembers.map((member) => {
    // Create a new object so we aren't mutating key-value pairs in the original object.
    // I used let because we are modifying this object, and even though const lets us do this, the let gives clarity to the fact that we are modifying parts of the object.
    let halfBirthdayObject = {};
    // set the first name to be the first name from the original object.
    // This is at the top level because console.table will format more nicely this way.
    halfBirthdayObject.firstName = member.name.first;
    // set the last name to be the last name from the original object.
    halfBirthdayObject.lastName = member.name.last;
    // set the age to be the age from the original object. 
    halfBirthdayObject.age = member.age;
    // Create a new Date object from the birthday so we have access to methods on the Date constructor.
    const halfBirthday = new Date(member.birthday);
    // getMonth starts with 0 for January, up to 11 for December, so we are checking this against 11 instead of 12.
    // if halfBirthday.getMonth returns greater than 11, it is in the second half of the year
    halfBirthday.getMonth() + 6 > 11
      ? // if in the second half of the year, we subtract 6
        halfBirthday.setMonth(halfBirthday.getMonth() - 6)
      : // otherwise we add 6
        halfBirthday.setMonth(halfBirthday.getMonth() + 6);
    // Set the halfBirthday value to the halfBirthday
    halfBirthdayObject.halfBirthday = halfBirthday
      // as a date string
      .toLocaleDateString("en-US", { month: "long", day: "numeric" });
    // Return the newly created object
    return halfBirthdayObject;
    // chain .sort to .map and create a custom sorting algorithm to sort by age. 
  }).sort(sortByAge);
}

// EXECUTION OF THE JAVASCRIPT
// Initial table of the game group for debugging purposes.
// I'm using the string so it's easy to track this among the other values we might be console.logging along the way.
// Log out a table of people with their birthday
console.table(gameGroup.sort(sortByAge));
// Take that array of people
// For each person, we want to calculate their half-birthday
// Log out a new table of people with their half-birthday
console.table(createHalfBirthdayTable(gameGroup));
