const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];



//***FILTER***
//1. Get characters with mass greater than 100

const massGreaterThan100 = characters.filter( character => {
    return character.mass > 100;
})
console.log('1. ', massGreaterThan100);

//2. Get characters with height less than 200

const heightLessThan200 = characters.filter( character => {
    return character.height < 200;
})

console.log('2. ', heightLessThan200)


//3. Get all male characters

const maleCharacters = characters.filter( character => {
    return character.gender === 'male';
})

console.log('3. ', maleCharacters)

//4. Get all female characters

const femaleCharacters = characters.filter( character => {
    return character.gender === 'female'
})

console.log('4. ', femaleCharacters)
