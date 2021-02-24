// GOAL: To display a table in the console of people's half birthdays.
// We are going to sort this file by variables, functions, and execution.


// VARIABLES
const gameGroup = [
    {
        birthday: 'April 16, 1991',
        name: {
            first: 'Anna',
            last: 'Brekke'
        },
    },
    {
        birthday: 'February 27, 1990',
        name: {
            first: 'Andrew',
            last: 'Brenner'
        },
    },
    {
        birthday: 'July 22, 1989',
        name: {
            first: 'Felicia',
            last: 'Brenner'
        },
    },
    {
        birthday: 'December 8, 1987',
        name: {
            first: 'Dan',
            last: 'Richmond'
        },
    },
    {
        birthday: 'January 30, 1989',
        name: {
            first: 'Justin',
            last: 'Veres'
        },
    },
]

const birthdays 







// FUNCTIONS
function calculateHalfBirthday(birthday) {
    const [month, date, year] = new Date(birthday);
    // The birthday should account for both month and day.
    // Take the birthday that's coming in,
    // Find the day that is six months away from their full birthday.
    console.log('month', month)
    console.log('date', date)
    console.log('year', year)
    return'calculation goes here';
}

function createHalfBirthdayTable(groupMembers) {
    // groupMembers is the gameGroup variable declared above.
    // We want to take that table data, and replace birthdays with half-birthdays.
    // the array of group members is mapped to a new array
    const newTable = groupMembers.map(groupMember => {
        // each group member's half birthday is calculated with the calculateHalfBirthday function, and assigned to the halfBirthday key
        groupMember.halfBirthday = calculateHalfBirthday(groupMember.birthday)
        // each group member's name remains the same, so we assign it to itself, preserving it in the new array
        groupMember.name = groupMember.name;
        // we return each group member in the map so we don't end up with an array of undefined items
        return groupMember;
    })
    // The original array should not be mutated
    // return that new table data
    return newTable
}


// EXECUTION OF THE JAVASCRIPT
// Initial table of the game group for debugging purposes.
// I'm using the string so it's easy to track this among the other values we might be console.logging along the way.
// Log out a table of people with their birthday
console.table('gameGroup', gameGroup);
// Take that array of people
// For each person, we want to calculate their half-birthday
// Log out a new table of people with their half-birthday
console.table('halfBirthdayTable', createHalfBirthdayTable(gameGroup));