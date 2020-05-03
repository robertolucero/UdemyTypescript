import { User } from './models/user';
import axios from 'axios';


// const user = new User({ name: 'Ramiro', age: 13, id: 2 });

const user = new User({ id: 1, name: 'newer name', age: 0});

user.on('save', () => {
    console.log(user);
});

user.save();
