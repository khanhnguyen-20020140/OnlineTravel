const Music = require('../../models/Music');
const Feature = require('../../models/Feature');
const Playlist = require('../../models/Playlist');
const APIFeatures = require('../../features/features');
const req = require('express/lib/request');
const res = require('express/lib/response');

const musicController = {


    //get one | playing
    getMusic: async(req, res) => {
        try {
            const music = await Music.findById(req.body.id);
            if(!music) {
                res.status(404).json({msg: "this music doesn't exist"});
            }

            await Feature.updateOne(
                { user: req.user.id },
                { $pull: { history: req.body.id } }
            )

            await Feature.updateOne(
                { user: req.user.id },
                { $push: { history: req.body.id } }
             )

            // await Feature.updateOne(
            //     { user: req.user.id},
            //     { $addToSet: { history: req.body.id}}
            // );
            
            await Feature.updateOne(
                { user: req.user.id}, 
                { $push: { history:{ $each: [], $slice: -6} } }
            );
            res.status(200).json({message: `play music ${music.name}`});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
        //res.status(500).json("get one");
    },
    //get history of user
    getHistory: async(req, res) => {
        try {
            const history = await Feature.find({user: req.user.id});
            const musics = [];
            for( let i = 0; i < history[0].history.length; i++) {
                musics.push(await Music.findById(history[0].history[i]))
            }
            res.status(200).json({musics});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },


    // add music to user list
    addMToYourList: async(req, res) => {
        try {
            const music = await Music.findById(req.body.id);
            if(!music) {
                res.status(404).json({msg: "this music doesn't exist"});
            }

            await Feature.updateOne(
                { user: req.user.id},
                { $addToSet: { waiting: req.body.id}}
            );
            
            // await Feature.updateOne(
            //     { user: req.user.id}, 
            //     { $push: { waiting:{ $each: [], $slice: -6} } }
            // );
            res.status(200).json({message: `add ${music.name} to your list`});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },

    //delete music in user list
    deleteMusicYourList: async(req, res) => {
        try {
            const music = await Music.findById(req.body.id);
            await Feature.updateOne(
                { user: req.user.id },
                { $pull: { waiting: req.body.id } }
            )

            res.status(200).json({message: `delete ${music.name} in your list`})
        } catch(error) {
            console.log(error)
        }
    },
    //get user list
    getYourList: async(req, res) => {
        try {
            const history = await Feature.find({user: req.user.id});
            const musics = [];
            for( let i = 0; i < history[0].waiting.length; i++) {
                musics.push(await Music.findById(history[0].waiting[i]))
            }
            res.status(200).json({musics});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },


    addPlaylist: async(req, res) => {
        try {
            const playlist = new Playlist({
                user: req.body.id,
                name: req.body.name
            });
            await playlist.save();
            res.status(200).json({playlist});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },

    addMusicToPlaylist: async(req, res) => {
        try {
            await Playlist.updateOne(
                {$and: [
                    {user: req.body.id},
                    {name: req.body.name}
                ]},
                { $addToSet: { song: req.body.song}}
            );
            res.status(200).json({msg: "addMusicToPlaylist success"});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },

    getPlaylist: async(req, res) => {
        try {
            const playlist = await Playlist.find({user: req.user.id});
            // res.status(200).json({playlist});
            if(playlist.length == 0) {
                return res.status(200).json({message:"Ban chua co playlist"})
            }
            return res.status(200).json({playlist});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}

module.exports = musicController;

