import { Schema, model} from 'mongoose';

const taskSchema = new Schema({

      id: String, 
    summary: String,
    checked: Boolean,
    editing: Boolean
    
})


export default taskSchema;