//function to add numbers give in string
function add(numbers){
    //condition check for empty string
    if(numbers === "")
        return 0;

    //implentation logic for input string having single number or two numbers comma seperated as input 

    //splitting and parsing the array to get input number/s as int [Delimiters allowed currently are "\n" & ","]
    if(numbers.startsWith("//")){
        var delimiter = numbers[2];
        numbers = numbers.split("//" + delimiter + "\n").join("");
        var numArray = numbers.split(delimiter);
        numArray = numArray.map(n => parseInt(n,10));

        return numArray.reduce((sum, val) => sum + val, 0);
    }
    var numArray = numbers.replace(/\n/g, ',').split(',');
    numArray = numArray.map(n => parseInt(n,10));

    return numArray.reduce((sum, val) => sum + val, 0);
}

module.exports={ add }; 