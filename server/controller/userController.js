import users from "../model/userSchema.js"

export const signUpDetails = async (request, response) => {
    try {
        const existingUser = await users.findOne({ username: request.body.username })
        if (existingUser) {
            response.status(401).json({ message: 'Username already exists' })
        }
        const user = request.body;
        const validatedUser = new users(user);
        validatedUser.save();

        response.status(200).json({ message: user })
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

export const loginDetails = async (request, response) => {
    try {
        const loginUser = request.body.username;
        const loginPassword = request.body.password;

        const user = await users.findOne({username: loginUser, password: loginPassword})
        if(user)
        {
            response.status(200).json({message: user})
        }
        else {
            response.status(401).json({message : 'user not found'})
        }

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}