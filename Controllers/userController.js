const User = require("../Models/userModel");
const path = require('path');

exports.createUser = async (req, res) => {
    const { name, country } = req.body;

    try {
        if (!name) {
            const filePath = path.join(__dirname, '../voice-notes/missing-name.mp3');
            res.set({
                'X-Message': 'Kiun bay tera koi name nhi hai?',
            });
            return res.sendFile(filePath); 
        }

        if (!country) {
            const filePath = path.join(__dirname, '../voice-notes/no-country.mp3');
            res.set({
                'X-Message': 'Arctic Circle pe rehta hai kia? Country bata', 
            });
            return res.sendFile(filePath)
        }

        const newUser = new User({ name, country });
        await newUser.save();

        res.status(201).send({
            success: true,
            message: `Kese Aana hua? ${newUser.name}`,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Error while creating a User",
        });
    }
};
