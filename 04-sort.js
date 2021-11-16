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



//***SORT***
//1. Sort by mass

const byMass = characters.sort((a, b) => {
    return a.mass - b.mass;
});

console.log('1.\n', byMass)


//2. Sort by height

const byHeight = characters.sort((a, b) => {
    return a.height - b.height;
})

console.log('2.\n', byHeight)
//3. Sort by name

const byName = characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    return 1
});

console.log('3.\n', byName)

//4. Sort by gender

const byGender = characters.sort((a, b) => {
    if(a.gender === 'female') return -1;
    return 1
})

console.log('4.\n', byGender)

