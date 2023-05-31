const musicRoute = require('./admin/musicRoute');
const userRoute = require('./admin/userRoute');
const homeRoute = require('./user/home')
const videoRoute = require('./admin/videoRoute')

const routes = [
    musicRoute,
    userRoute,
    homeRoute,
    videoRoute
]

module.exports = routes;