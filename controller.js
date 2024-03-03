const User = require('./registerSchema');
const bcrypt = require('bcrypt')

const register = async (req, res) => {  
    try {
        const { firstname, lastname, email, password } = req.body;
        const salt = await bcrypt.genSalt(10)
        const hashedPasssword = await bcrypt.hash(password, salt); 

        const user = await User.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashedPasssword
        });

        if (user) {
            res.status(200).json({ message: 'User created successfully' });
        } else {
            res.status(400).json({ message: "Failed to create the user" });
        }
    } catch (err) {
        console.log("error", err);
        res.status(500).json({ message: 'Server error' });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email: email });

        // Check if user exists
        if (!user) {
            return res.status(400).json({ message: "No user found with this email." });
        }

        // Compare email and password
        if (user) {
              const checkPassword = await bcrypt.compare(password, user.password);
              if (checkPassword) {
                res.status(200).json({ "message":"Successful login"})
              }
            res.status(400).json({ message: "Wrong Password!" })
        } else {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {register,loginUser};
