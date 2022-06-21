function pigLatin(string) {

    phrase = string.toLowerCase();

    vowel = ["a", "e", "i", "o", "u"];
    consonants = ["ch", "thr", "sch", "qu"]
    newPhrase = '';

    if (vowel.includes(phrase.charAt(0))) {

        return phrase + 'ay';

    }

    else {

        for (let i =  0; i < phrase.length ; ++i) {
            
            newPhrase += phrase.charAt(i)

            if (consonants.includes(newPhrase)){

                index = consonants.indexOf(newPhrase)
                consonantStart = consonants[index]
            }              
            
        }
    
    console.log(newPhrase)



    return newPhrase.split(consonantStart)
                    .reverse() 
                    .join(consonantStart) + 'ay'

    }
};
  
// Do not edit below this line
module.exports = pigLatin;
