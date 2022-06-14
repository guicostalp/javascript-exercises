const findTheOldest = function(people) {
    carly = people[0];
    carlyAge = carly.yearOfDeath - carly.yearOfBirth;

    ray = people[1];
    rayAge = ray.yearOfDeath - ray.yearOfBirth;

    jane = people[2];
    janeAge = jane.yearOfDeath - jane.yearOfBirth;

    const d = new Date();
    let year = d.getFullYear();


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
