import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    
    title: { type: String, required: true },
   
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    deadline: { type: Date, required: true } 
    
    
});

const dateValidator = (date) => {
    return date > new Date();
  }
  TaskSchema.path("deadline").validate(dateValidator);
  

export default mongoose.model('Task', TaskSchema);
