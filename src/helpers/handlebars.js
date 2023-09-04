// dùng để làm view và làm  2 cái helpers Anonymous functions
module.exports = {
    
    sum: (a, b) => a + b,
    substring: (str, start, end) => {
        const subStr = str.substring(start, end);
        return subStr + '...'
    },
    

}