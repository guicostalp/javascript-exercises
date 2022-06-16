const findTheOldest = function(people) {
    carly = people[0];
    carlyAge = carly.yearOfDeath - carly.yearOfBirth;

    ray = people[1];
    rayAge = ray.yearOfDeath - ray.yearOfBirth;

    jane = people[2];
    janeAge = jane.yearOfDeath - jane.yearOfBirth;

    const d = new Date();
    let year = d.getFullYear();
    

    const getMissingYear = people.find(people => people.yearOfDeath === undefined);

    if (getMissingYear === carly) {
        carlyAge = year - carly.yearOfBirth;
    }

    if (getMissingYear === ray) {
        rayAge = year - ray.yearOfBirth;
    }

    if (getMissingYear === jane) {
        janeAge = year - jane.yearOfBirth;
    }


    oldest = Math.max(carlyAge, rayAge, janeAge);


        if (oldest == rayAge) {
            return ray;
        }

        else if (oldest == janeAge){
            return jane;
        }

        else (oldest == carlyAge) 
            return carly;


};

// Do not edit below this line
module.exports = findTheOldest;
