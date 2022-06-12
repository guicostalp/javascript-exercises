const palindromes = function (str) {
      
    str = str.toLowerCase();
    reverseStr = "";

    let strLength = str.length;

    for (let i = (strLength - 1); i >= 0 ; --i) {

        reverseStr += str.charAt(i);

    }

    if (str.equals(reverseStr)) {

        return true

    }

    return false;




};

// Do not edit below this line
module.exports = palindromes;
