require('dotenv').config({
    override: true,
})

const { parentPort } = require('worker_threads')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('WORKING on ' + process.env.ENV)
})

parentPort.on('message', (msg) => {
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
