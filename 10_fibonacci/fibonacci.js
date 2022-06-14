const fibonacci = function(n) {

    if (n < 0) {
        return 'OOPS'
    }

    else if (n <= 1)
            return parseInt(n);




        return fibonacci(n - 1) + fibonacci(n - 2);

};





/*  FIRST TRY
    number = 5;
    array = [1, 2];
    lastElement = array.length - 1;
    secondLastElement = array.length - 2;

    console.log(lastElement)

    for (let i = 0; i < number; i++){


        
        element = array[lastElement] + array[secondLastElement];
        console.log(array[lastElement])
        console.log(array[secondLastElement])
        console.log (element);
        array.push(element);

    }

 */
    
// Do not edit below this line
module.exports = fibonacci;
