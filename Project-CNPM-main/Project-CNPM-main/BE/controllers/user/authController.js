const User = require('../../models/User');
const Feature = require('../../models/Feature');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { status } = require('express/lib/response');

const authController = {


    // register

    register: async (req, res) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        try {
            console.log(req.body);

            const checkUser = await User.findOne({ username: req.body.username });
            if (checkUser) {
                return res.status(200).json({error: 'Username already exists'});
            }

            const password = req.body.password;
            const passwordAgain = req.body.passwordAgain;

            if (password !== passwordAgain) {
                return res.status(200).json({error: 'Passwords do not match'});
            }

            const newUser = new User({
                username: req.body.username,
                password: hash
            });

            const user = await newUser.save();

            const newFeature = new Feature({
                user: user._id
            })

            await newFeature
                            .save()
                            .then(() => {
                                return res.status(200).json({message : 'Successfully registered'});
                            })
                            // .catch(err => res.status(400).send(err));
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },

    //login
    login: async (req, res,) => {
        try {
            const user = await User.findOne({username: req.body.username});
            if (!user) {
                return res.status(200).json('Email or Password is not');
            }

            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            );

            if(!validPassword) {
                return res.status(200).json('Email or Password is not correct');
            }
            if (user && validPassword) {
                const token = jwt.sign({
                    id: user.id,
                }, process.env.JWT_KEY_TOKEN);
                user.token = token
                await user.save()
                        .then(() => res.status(200).json(
                            {
                            message: "Success", 
                            user: user        
                        }
                        ))
                        .catch(err => res.status(400).json(err));
            }

        } catch (error) {
            res.status(500).json({msg: error.message});
        } 
    },
    //logout
    logout: async(req, res) => {
            const id = req.body.id;
            const user = await User.findById(id);
            user.token = null;
            console.log(user);
            await user
                .save()
                .then(() => {
                    res.status(200).json({"token": user.token});
                })
                .catch(err => res.status(500).json({error: err.message}));
                
    }
}

module.exports = authController;