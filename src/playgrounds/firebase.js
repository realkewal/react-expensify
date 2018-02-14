import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: "process.env.FIREBASE_API_KEY",
    authDomain: "expensify-99.firebaseapp.com",
    databaseURL: "https://expensify-99.firebaseio.com",
    projectId: "expensify-99",
    storageBucket: "expensify-99.appspot.com",
    messagingSenderId: "789859025910"
};

firebase.initializeApp(config);

const database = firebase.database();

// // child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// const getExpenses = () => database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     getExpenses();
// }, (e) => {
//     console.log('Error fetching data!');
// })

// const expenses = [{
//     description: 'Rent',
//     note: 'Paid to new account',
//     amount: 220,
//     createdAt: moment().format()
// }, 
// {
//     description: 'BeatsX',
//     note: 'Myers',
//     amount: 168,
//     createdAt: moment().format()
// },
// {
//     description: 'Groceries',
//     note: 'Woolworths',
//     amount: 42,
//     createdAt: moment().format()
// }];

// database.ref('expenses').push(expenses[2]);

// database.ref('notes/-L57JrS3HHcwfhMgIbKU').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'iOS, React, Python'
// })

// const firebaseNotes = {
//     notes: {

//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     // const data = snapshot.val();
//     // console.log(data);
//     const myString = `${data.name} is a ${data.job.title} at ${data.job.company}.`
//     console.log(myString);
// }, (e) => {
//     console.log('Error fetching data!');
// })

// setTimeout(() => {
//     database.ref('name').set('Frank Martin');
// }, 3500);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 6500);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 9500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })


// database.ref().set({
//     name: 'Kewal Wadibhasme',
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: 'Web Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Sydney',
//         country: 'Australia'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Melbourne'
// }).then(() => {
//     console.log('Data updated!');
// }).catch((e) => {
//     console.log('Could not update data!', e);
// });





// database.ref('isMarried123')
//     .remove()
//     .then(() => {
//         console.log('Data removed!!');
//     })
//     .catch((e) => {
//         console.log('Could not remove data', e);
//     });



// database.ref().set('This is my data');
// database.ref('age').set(28);
// database.ref('location/city').set('Melbourne');



// database.ref('attributes').set({
//     height: 178,
//     weight: 74
// }).then(() => {
//     console.log('Attributes added!')
// }).catch((e) => {
//     console.log('Failed to add attributes!')
// })