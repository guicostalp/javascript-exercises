const palindromes = function (str) {
      
    str = str.toLowerCase().replace(/[^a-z]/g, "");
    reverseStr = "";
    strLength = str.length;

    for (let i = (strLength - 1); i >= 0 ; --i) {

        reverseStr += str.charAt(i);
        
    }

    for (let i = (strLength - 1); i >= 0 ; --i) {

        if (str.charAt(i) != reverseStr.charAt(i)) {

            return false;
        }
        
    }

    
    return true;



};

// Do not edit below this line
module.exports = palindromes;
