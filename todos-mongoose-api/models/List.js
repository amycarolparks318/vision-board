import { Schema, model } from 'mongoose';
import Task from './Task.js';

const listSchema = new Schema({
    id: String,
    name: String, 
    tasks: [Task],
    image: { type: String, default: `f`},
    date: {type: Date, default: new Date()},
    editing: {type: Boolean, default: false}
});

export default model('List', listSchema);

