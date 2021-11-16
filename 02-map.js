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

//***MAP***
//1. Get array of all names

const names = characters.map((character) => {
    return character.name;
})

console.log('1. \n', names)


//2. Get array of all heights

const heights = characters.map((character) => {
    return character.height;
})

console.log('2. \n', heights)

//3. Get array of objects with just name and height properties

const nameAndHeight = characters.map((character) => {
    return {name: character.name, height: character.height}
})

console.log('3. \n', nameAndHeight)

//4. Get array of all first names

const firstNames = characters.map((character) => {
    return character.name.split(" ")[0]
})

console.log(firstNames)

//5. Get array of all last names

const lastNames = characters.map((character) => {
    return character.name.split(" ")[1]
})

console.log(lastNames);