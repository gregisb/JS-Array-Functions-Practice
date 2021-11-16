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



//***SOME***
//1. Is there at least one male character?

const male = characters.some((character) => {
    return character.gender === 'male'
})

console.log(male)

//2. Is there at least one character with blue eyes?

const blueEyes = characters.some((character) => {
    return character.eye_color === 'blue'
})

console.log(blueEyes)

//3. Is there at least one character taller than 210?

const tallerThan210 = characters.some((character) => {
    return character.height >= 210;
})

console.log(tallerThan210)

//4. Is there at least one character that has mass less than 50?

const massLessThan50 = characters.some((character) => {
    return character.mass <= 50
})

console.log(massLessThan50)
