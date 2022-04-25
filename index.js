const { parentPort, workerData } = require('worker_threads')

require('dotenv').config({
    path: workerData.envPath,
})

const { parentPort } = require('worker_threads')
const express = require('express')

const app = express()

app.get('/', (_req, res) => {
    res.send('WORKING on ' + process.env.ENV)
})

parentPort.on('message', (msg) => {
    console.log(msg)
    if (msg === 'stop') {
        require('fs').writeFileSync(
            '../../STOP+' + process.env.ENV + '.txt',
            'STOPPED'
        )
    }
})

app.listen(process.env.EXPRESS_PORT, () => {
    parentPort.postMessage('ready')
})
