const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , med_price] = item;

console.log(`A medium ${coffee} costs ${med_price}`);


// const address = ['55, O\'Connell Street', 'North Parramatta', 'New South Wales', '2151' ];

// const [, , state = 'NSW'] = address;

// console.log(state);



// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher


// console.log(`Publisher name is ${publisherName}.`);



// const person = {
//     name: 'Kewal',
//     age: 27,
//     location: {
//         city: 'Sydney',
//         temp: 28
//     }
// };

// const {name = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);

// console.log(`Located in ${city} and weather is ${temperature}`);


