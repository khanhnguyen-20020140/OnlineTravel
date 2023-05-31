const Users = require('../../models/User');
const Playlists = require('../../models/Playlist');
const Feature = require('../../models/Feature');
const APIFeatures = require('../../features/features');
const bcrypt = require('bcrypt');


const userController = {
    //get all users
    getUsers: async(req, res) => {
        try {
            const features = new APIFeatures(Users.find(), req.query).searching();
            const users = await features.mongooseQuery;
            res.status(200).json({users});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
        //res.json({msg: "get all user"})
    },
    //add user
    addUser: async(req, res) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        try {
            const newUser = new Users({
                username: req.body.username,
                password: hash,
            });
            const user = await newUser.save();
            const newFeature = new Feature({
                user: user._id
            })
            await newFeature.save();
            res.status(200).json({msg: "add successful"});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
        //res.json({msg: "add new user"})
    },
    //delete user
    deleteUser: async(req, res) => {
        try {
            var user = await Users.findById(req.params.id)
            if (!user) {
                return res.status(404).json({msg: "this user doesn't exist"});
            }
            //delete playlist
            const playlist = await Playlists.deleteMany({user: user._id});
            const feature = await Feature.deleteMany({user: user._id});

            user = await Users.findByIdAndDelete(req.params.id)
            res.status(200).json({msg: "delete successful", user: user, playlist: playlist, feature: feature});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
        //res.json({msg: `delete a user by id ${req.params.id}`})
    }
}

module.exports = userController;