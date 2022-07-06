const mongoose = require('mongoose')

require('dotenv').config();
const { KEY } = process.env;

const uri = process.env.KEY

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const conexion = mongoose.connection

module.exports = conexion
