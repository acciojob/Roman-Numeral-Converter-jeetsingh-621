function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = '';

    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];
        
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test cases
console.log(convertToRoman(36));   // Output: XXXVI
console.log(convertToRoman(798));  // Output: DCCXCVIII

// Do not edit below this line
module.exports = convertToRoman;
