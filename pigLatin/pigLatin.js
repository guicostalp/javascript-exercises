function pigLatin(string) {

    phrase = string.toLowerCase();

            vowel = ["a", "e", "i", "o", "u"];
            consonants = ["ch", "thre", "sch", "qu"]
            newPhrase = '';

            if (vowel.includes(phrase.charAt(0))) {

                newPhrase = phrase + 'ay';

                return newPhrase;

            }
            
            else{

            return phrase.split("").reverse().join("") + 'ay';

            }


};
  
// Do not edit below this line
module.exports = pigLatin;
