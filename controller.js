// register.js

const userRegister = require('./registerSchema');

const register = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        const user = await userRegister.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        });

        if (user) {
            res.status(200).json({ message: 'User created successfully' });
        } else {
            res.status(400).json({ message: "Failed to create the user" });
        };
    } catch (err) {
        console.log("error", err);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = register;
