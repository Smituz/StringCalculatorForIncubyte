//function to add numbers given in string
function add(numbers){
    //Return 0 for an empty field
    if(numbers === "")
        return 0;
    // Check for string having a single negative number
    // if(numbers.includes("-")){
    //         let negativeNumber = -(parseInt(numbers[numbers.indexOf('-',0) + 1 ]));
    //         throw new Error("negatives not allowed: "+ negativeNumber + ".");    
    // }

    //checkNegatives Helper function now handles the above case

    //If input starts with custom delimiter, extract it and split accordingly.
    if(numbers.startsWith("//")){
        var delimiter = numbers[2];
        numbers = numbers.split("//" + delimiter + "\n").join("");
        var numArray = numbers.split(delimiter);
        return sumParsednumbers(numArray);
    }

    // Split and parse the input into integers using the allowed delimiters: "," and "\n".
    var numArray = numbers.replace(/\n/g, ',').split(',');
    return sumParsednumbers(numArray);
}

//Helper function to apply same logic to both the available cases
function sumParsednumbers(numArray){
    var numArray = numArray.map(n => parseInt(n,10));

    //Checking presence of negative numbers
    checkNegatives(numArray);

    return numArray.reduce((sum, val) => sum + val, 0);
}

//Helper function to throw exception for negatives
function checkNegatives(numArray){
    const negatives = numArray.filter(n => n<0);

    if(negatives.length > 0){
        throw new Error("negatives not allowed: "+ negatives + ".");   
    }
    return;
}
module.exports={ add }; 