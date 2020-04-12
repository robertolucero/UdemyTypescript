import { User } from './models/user';
import axios from 'axios';


// const user = new User({ name: 'Ramiro', age: 13, id: 2 });

const user = new User({ age: 42, name: 'Roberto' });

user.save();
