const bcrypt = require('bcrypt')
const User = require("../model/User")
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if(!name || !email || !password) return res.status(400).json({message: 'Name, Email and Password are required.'})
        const foundUser = await User.findOne({ email })
        if(foundUser) return res.status(409).json({message: 'User with this email already exists.'})
        const hashPwd = await bcrypt.hash(password, 10)
        const result  = await User.create({
            name, 
            email, 
            password: hashPwd
        })
        res.status(201).json(result)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if(!email || !password) return res.status(400).json({message: 'Email and Password are required.'})
        const foundUser = await User.findOne({ email })
        if(!foundUser) return res.status(401).json({message: 'User with this email does not exists.'})
        const match = await bcrypt.compare(password, foundUser.password)
        if(match) {
            const accessToken = jwt.sign(
                { 
                    "userInfo" : {
                        "name" : foundUser.name,
                        "email": foundUser.email
                    }
                },
                process.env.ACCESS_TOKEN_PRIVATE_KEY,
                { expiresIn: '30d'}
            )

            res.json({
                uesr: {
                    name: foundUser.name,
                    email: foundUser.email
                },
                accessToken
            })
        }
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = { loginUser, registerUser }