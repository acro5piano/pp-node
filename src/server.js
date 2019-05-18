const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3344 })

wss.on('connection', ws => {
  ws.on('message', data => {
    console.log(data.toString())

    setTimeout(() => {
      ws.send('something')
    }, 1000)
  })
})
