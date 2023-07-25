import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        trim : true
    },
    lastname : {
        type : String,
        trim : true
    },
    username : {
        type : String,
        trim : true,
        unique : true,
        index : true,
        lowercase : true
    },
    password : {
        type : String,
        trim : true
    }
})

const users = mongoose.model('users', userSchema);

export default users;