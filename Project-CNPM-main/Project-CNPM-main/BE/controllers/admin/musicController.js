const Musics = require('../../models/Music');
const APIFeatures = require('../../features/features');
const { query } = require('express');

const musicController = {
    // get all music
    getMusics: async(req, res) => {
        try {
            // const features = new APIFeatures(Musics.find(), req.query).paginating().searching();
            // const musics = await features.mongooseQuery;
            const musics = await Musics.find({});
            return res.status(200).json({musics});
        } catch (error) {
         res.status(500).json({msg: error.message});
        }
        //res.json({msg: "get all product"})
    },
    // add music
    addMusic: async(req, res) => {
        try {
            console.log(req.body)
            const newMusic = new Musics({
                name: req.body.name,
                singer: req.body.singer,
                path: req.body.path,
                image:req.body.image
            });
            await newMusic.save();
            res.status(200).json({message: "add successful"});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
        //res.json({msg: "add new product"})
    },
    // update music
    updateMusic: async(req, res) => {
        try {
            const {id, song, duration , author, genres} = req.body;
            const music = await Musics.findOneAndUpdate({id: req.params.id}, {
                id, song, duration , author, genres
            }, {new: true});

            if(!music) {
                res.status(404).json({msg: "this music doesn't exist"});
            }
            
            res.status(200).json({msg: "update successful"});

        } catch (error) {
            res.status(500).json({msg: error.message});
        }
        //res.json({msg: `update a product by id ${req.params.id}`})
    },
    deleteMusic: async(req, res) => {
        try {
            const music = await Musics.findById(req.params.id);

            if (!music) {
                res.status(404).json({msg: "this music doesn't exist"});
            }

            music = await Musics.findByIdAndRemove(req.params.id)

            res.status(200).json({msg: "delete successful"});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
        //res.json({msg: `delete a product by id ${req.params.id}`})
    }
}

module.exports = musicController;