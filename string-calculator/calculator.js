//function to add numbers give in string
function add(numbers){
    //condition check for empty string
    if(numbers === "")
        return 0;
    //implementation logic for string including a single decimal number
    console.log(typeof(numbers))
    if(!numbers.includes(','))
        return parseInt(numbers, 10);
}

module.exports={ add }; 