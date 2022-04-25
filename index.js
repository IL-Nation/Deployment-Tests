const { parentPort, workerData } = require('worker_threads')

require('dotenv').config({
    path: workerData.envPath,
})

const express = require('express')

const app = express()

app.get('/', (_req, res) => {
    res.send('WORKING without bugs on ' + process.env.ENV)
})

parentPort.on('message', (msg) => {
    if (msg === 'stop') {
        // Do Stop Stuff
    }
})

app.listen(process.env.EXPRESS_PORT, () => {
    parentPort.postMessage('ready')
})
