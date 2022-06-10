/*...Rest operator to include all arguments*/

const removeFromArray = function(...arg) { 
    
/*Store array (arg[0])*/
    
    array = arg[0]; /*Array, first arg of the function*/
    
    newArray = []; /*Empty new Array */
  
    array.forEach((item) => {   /* forEach item* on array = arg[0])*/
/*! operator inverts result (in this case means don't include) */

        if(!arg.includes(item)) {   /*if arg.dontinclude item been looked*/

            
        newArray.push(item);    /*.push in the newArray*/
        }

        /*newArray will receive each itens from array=arg[0] (our main array)
          that ITS NOT INCLUDED (!)in other args from main function
          (itens to be removed)*/

    });
    
    return newArray

};

/*Copy array arguments and add to principalArray 
    const principalArray = [].slice.call(array); 

/*Push element to be removed (number) to last position of the array.
    Identify element index by content (indexOf)

    principalArray.push(principalArray.splice(principalArray.indexOf (arg2), 1)[0]);
/*Remove last elemnt of the Array   
    principalArray.pop();
   


    
    return principalArray;

*/

/*pop() function try 
const removeFromArray = function(arg, number) {
    
    const principalArray = [].slice.call(arg); /*Copy array arguments and add to principalArray 
    principalArray.push(principalArray.splice(principalArray.indexOf (number), 1)[0]); /*Push elemnt to be removed (number) to last position of the array. Identify element index by content (indexOf)
    principalArray.pop();

    
    return principalArray;


};
 

/**END COMMENT */




// Do not edit below this line
module.exports = removeFromArray;
