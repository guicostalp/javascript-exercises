const getTheTitles = function(books) {

        
  firstTitle = books[0];
  secondTitle = books[1];

  newArray = [];
  
  newArray.push(firstTitle.title, secondTitle.title);

  return newArray; 

};

// Do not edit below this line
module.exports = getTheTitles;
