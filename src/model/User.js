import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
    {
        
        email: {
            type: String,
            required: true,
            unique: true,
            ref: "EndUser",
            
        },
        password: {
            type: String,
        },
    },
    { timestamps: true }
);

export const User = models?.User || model('User', UserSchema);
