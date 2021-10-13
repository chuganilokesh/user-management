const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


// userSchema.methods.toJSON = function () {
//     const user = this
//     const userObject = user.toObject()//*
    
//     delete userObject.password //security purpose use this method 
//     delete userObject.tokens
//     delete userObject.avatar

//     return userObject
// }



userSchema.statics.findByCredentials = async (email, password) => {   
    //use of this method check it 
    const user = await User.findOne({ email })
   
    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)  

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {//check it once
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
  
    next() //study next
})


const User = mongoose.model('User', userSchema)

module.exports = User