//function to add numbers given in a string
function add(numbers){
    //Return 0 for an empty field
    if(numbers === "")
        return 0;

    //Dealing with custom delimiters in different formats 
    if (numbers.startsWith("//")) {
    let delimiters = [];

    if (numbers.startsWith("//[")) {
        // Match all custom delimiters between square brackets
        const delimiterMatches = numbers.match(/\/\/(\[.*?\])+\n/);
        if (delimiterMatches) {
            // Extract all delimiters
            const delimiterPattern = /\[(.*?)\]/g;
            let match;
            while ((match = delimiterPattern.exec(delimiterMatches[0])) !== null) {
                delimiters.push(match[1]);
            }
        }
        numbers = numbers.split('\n').slice(1).join('\n'); // Remove delimiter declaration line
    } else {
        // Single-character delimiter (no brackets)
        delimiters.push(numbers[2]);
        numbers = numbers.slice(4); // Remove //x\n
    }

    // Build a regex to split using all delimiters
    const splitRegex = new RegExp(delimiters.map(d => escapeRegex(d)).join('|'), 'g');
    const numArray = numbers.split(splitRegex);
    return sumParsednumbers(numArray);
}
    // Split and parse the input into integers using the allowed delimiters: "," and "\n".
    var numArray = numbers.replace(/\n/g, ',').split(',');
    return sumParsednumbers(numArray);
}

//Helper function which parses and sums numbers from the string while filtering >1000 and checking for negatives.
function sumParsednumbers(numArray){
    var numArray = numArray.map(n => parseInt(n,10)).filter(n => n<=1000);

    //Checking presence of negative numbers
    checkNegatives(numArray);

    return numArray.reduce((sum, val) => sum + val, 0);
}

//Helper function to throw exception for negatives.
function checkNegatives(numArray){
    const negatives = numArray.filter(n => n<0);

    if(negatives.length > 0){
        throw new Error("negatives not allowed: "+ negatives + ".");   
    }
    return;
}

//Helper function to escape special regex characters in delimiters
function escapeRegex(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports={ add }; 