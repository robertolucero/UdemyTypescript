import { User } from './models/user';
import axios from 'axios';


// const user = new User({ name: 'Ramiro', age: 13, id: 2 });

const user = User.buildUser({ id: 1});

user.on('change', () => {
    console.log(user);
});

user.fetch();
