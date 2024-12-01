function convertToRoman(num) {
    // Define the Roman numeral symbols and their corresponding values, including subtractive combinations
    const romanSymbols = [
        ['M', 1000], 
        ['CM', 900], 
        ['D', 500], 
        ['CD', 400], 
        ['C', 100], 
        ['XC', 90], 
        ['L', 50], 
        ['XL', 40],
        ['X', 10], 
        ['IX', 9], 
        ['V', 5], 
        ['IV', 4], 
        ['I', 1]
    ];

    let result = '';

    // Loop through the Roman symbols array
    for (let i = 0; i < romanSymbols.length; i++) {
        // Get the symbol and its value
        const [symbol, value] = romanSymbols[i];
        
        // Determine how many times the Roman numeral can fit into the number
        while (num >= value) {
            // Append the symbol to the result string
            result += symbol;
            // Subtract the value from the number
            num -= value;
        }
    }

    return result;
}

// Test cases
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(36));   // Output: XXXVI
console.log(convertToRoman(798));  // Output: DCCXCVIII

// Do not edit below this line
module.exports = convertToRoman;
