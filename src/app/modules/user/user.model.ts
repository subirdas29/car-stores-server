import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt"
import config from "../../config";

const userSchema = new Schema<TUser>(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique:true
      },
      password: {
        type: String,
        required: true,
        select:0
      },
      role: {
        type: String,
        default: 'user',
      },
    })

    userSchema.pre('save', async function(next) {
        this.password = await bcrypt.hash(this.password,Number(config.bcrypt_salt_rounds))
        next()
    })
    
    userSchema.post('save', async function(doc,next){
        doc.password = ''
        next()
    })

    export const User = model<TUser>('User', userSchema);