
const repeatString = function(str, multi) {


    let multiStr = '';

    if (multi < 0) {

        return 'ERROR';
    }
    
    else {

        return multiStr = str.repeat(multi) ;
    
    }

}




/*
const repeatString = function(str, multi) {
    multi = 0;
    str = 'hey';

    let multiStr = '';

    return multiStr = str.repeat(multi) ;
    

};


/**Do not edit below this line*/
module.exports = repeatString;


