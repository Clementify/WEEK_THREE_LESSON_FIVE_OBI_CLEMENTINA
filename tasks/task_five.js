
// Filter elements in an array
// Create an array with multiple elements.
// Use the filter() method to create a new array containing only specific elements based on a condition.
// Log the filtered array to the console.

const days= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredDays = days.filter( num =>{
    if (num ===3 || num ===6) {
        return num
    }
}) 
console.log(filteredDays)
// output [3, 6]