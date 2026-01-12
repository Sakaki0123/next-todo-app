import mongoose, { Document } from 'mongoose';

export interface Task {
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;
}

export interface TaskDocument extends Task, Document {
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema = new mongoose.Schema<TaskDocument>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    isCompleted: { type: Boolean, required: true, default: false },
}, { timestamps: true });

const TaskModel = mongoose.models.Task || mongoose.model<TaskDocument>('Task', taskSchema);

export default TaskModel;