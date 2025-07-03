//function to add numbers give in string
function add(numbers){
    //condition check for empty string
    if(numbers === "")
        return 0;

    //implementation logic for string including a single decimal number
    if(!numbers.includes(','))
        return parseInt(numbers, 10);

    //implementation for strings with two single numbers which are comma seperated
    if(numbers.includes(',')){
        return (parseInt(numbers[0],10) + parseInt(numbers[2],10));
    }
}

module.exports={ add }; 