const caesar = function(words, index) {

      
  phrase = words.toLowerCase();

      

  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
              "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
              "u", "v", "w", "x", "y", "z"];

  punctuation = [" ", "!", ","]                    

  cipher = "";

  /*for - Run through each element on phrase and return ciphered in chiper*/
  /*if - looks punctuations on phrase and insert 
         on cipher straight away*/
  /*else - findPosition of original element on alphabet
           cipherLetter capture element ciphered on alphabet
           insert cipherLetter to cipher               */

  for (let i = 0; i <= (phrase.length - 1) ; ++i) {

    if (punctuation.includes(phrase.charAt(i))) {  

        cipher += phrase.charAt(i);

    }
    
    else { 
      
      findPosition = alphabet.indexOf(phrase.charAt(i));
      
      finalIndex = findPosition + index;
      
      cipherLetter = alphabet[finalIndex];

      if (finalIndex > (alphabet.length - 1)) {

            finalIndex = (findPosition + index) % alphabet.length
            
            cipherLetter = alphabet[finalIndex];               

      }

      if (finalIndex < 0) {

            finalIndex = (findPosition + index) + alphabet.length;       

      }

             
      cipherLetter = alphabet[finalIndex];

        cipher += cipherLetter;

    }

  }

prepCipher = cipher.charAt(0) + cipher.slice(1); 

finalCipher = "";


/*Aplly toUpperCase() accordingly with original *words
 Compare *words with *phrase*/   

for (let i = 0; i <= (words.length - 1) ; ++i) {      

  if (words.charAt(i) == phrase.charAt(i)) {

      finalCipher += prepCipher.charAt(i);             
  }
  else {

     finalCipher += prepCipher.charAt(i).toUpperCase();
  }

}

return finalCipher

};

// Do not edit below this line
module.exports = caesar;