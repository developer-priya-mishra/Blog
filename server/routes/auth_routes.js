const router = require("express").Router();
const bcrypt = require("bcrypt");
const Auth = require("../models/auth");
const jwt = require("jsonwebtoken")

router.post('/register', async (req, res) => {
    try {
        let { name, email, password, checkpassword } = req.body
        if (!name || !email || !password || !checkpassword) {
            return res.status(400).json({ msg: "All fields are required" })
        }
        if (password.length < 5) {
            return res.status(400).json({ msg: "Password must be more than 5 characters" })
        }
        if (password !== checkpassword) {
            return res.status(400).json({ msg: "Password and check password must be same" })
        }
        const user = await Auth.findOne({ email: email })
        if (user) {
            return res.status(400).json({ msg: "Email already exist" })
        }
        const salt = await bcrypt.genSalt();
        const hashPass = await bcrypt.hash(password, salt);
        const newUser = new Auth({
            name,
            email,
            password: hashPass
        })
        const onSave = await newUser.save();
        res.json({ msg: "Registered successfully" });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "All fields are required" })
        }
        const user = await Auth.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" })
        }
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({
            msg: "Login sucessfully",
            token,
            user: {
                id: user._id,
                name: user.name
            }
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})


module.exports = router;