/*require('dotenv').config()

console.log(__dirname)
console.log(process.env.EXPRESS_PORT)
console.log(process.env)

const { parentPort } = require('worker_threads')
const express = require('express')

const app = express()

app.get('/', (_req, res) => {
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
*/

setInterval(() => {
    console.log('WORKER => ' + process.env.EXPRESS_PORT)
}, 1000)
