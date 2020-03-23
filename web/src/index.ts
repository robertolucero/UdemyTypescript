import { User } from './models/user';
import axios from 'axios';


// const user = new User({ name: 'Ramiro', age: 13, id: 2 });

const user = new User({ age: 9, name: 'Octavio' });

user.save();

// setTimeout(() => {
//     console.log(user);
// },4000)

// user.on('change', () => {
//     console.log('Change #1');
// });
// user.on('change', () => {
//     console.log('Change #1');
// });

// user.on('save', () => {
//     console.log('Save was triggered.');
// });

// user.trigger('save');

// user.set({name: 'Octavio', age: 7});
// user.set({ age: 9});


// console.log(user.get('age'));
