const Videos = require('../../models/Video');
const APIFeatures = require('../../features/features');
const { query } = require('express');

const videoController = {
    // get all music
    getVideos: async(req, res) => {
        try {
            const videos = await Videos.find({});
            return res.status(200).json({videos});
        } catch (error) {
         res.status(500).json({msg: error.message});
        }
        //res.json({msg: "get all product"})
    },
    // add music
    addVideo: async(req, res) => {
        try {
            console.log(req.body)
            const newVideo = new Videos({
                title: req.body.title,
                path: req.body.path,
                image:req.body.image
            });
            await newVideo.save();
            res.status(200).json({message: "add successful"});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
        //res.json({msg: "add new product"})
    },

    deleteVideo: async(req, res) => {
        try {
            const video = await Videos.findById(req.params.id);

            if (!video) {
                res.status(404).json({msg: "this video doesn't exist"});
            }

            video = await Videos.findByIdAndRemove(req.params.id)

            res.status(200).json({msg: "delete successful"});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
        //res.json({msg: `delete a product by id ${req.params.id}`})
    }
}

module.exports = videoController;