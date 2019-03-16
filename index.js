const array = [1,2,"3",{a:1}, [{a:2}],undefined, -Infinity];


// Array.pop will not work. I did tried it. :D when array becomes empty it reutns undefined but undefined can be a element of array


const findArrayLength = (input) => {
    let length = 0;
    input.forEach(() => length++ );

    return length;
}

console.log(findArrayLength(array));