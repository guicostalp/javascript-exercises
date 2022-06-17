const caesar = function(phrase, index) {

     
    phrase = phrase.toLowerCase();

      
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                "u", "v", "w", "x", "y", "z"];

    punctuation = [" ", "!", ","]                    

    cipher = "";



    for (let i = 0; i <= (phrase.length - 1) ; ++i) {

      if (punctuation.includes(phrase.charAt(i))) {  

          cipher += phrase.charAt(i);

      }

      else { 
        
        findPosition = alphabet.indexOf(phrase.charAt(i));    

        cipherLetter = alphabet[findPosition + index];

          if ((findPosition + index) > (alphabet.length - 1)) {

            wrappedPosition = (findPosition + index) - (alphabet.length - 1);

            cipherLetter = alphabet[wrappedPosition - 1];


          }


    
        cipher += cipherLetter;

      }

    }



    return cipher.charAt(0).toUpperCase() + cipher.slice(1);
};

// Do not edit below this line
module.exports = caesar;