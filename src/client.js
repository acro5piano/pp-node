const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:3344')

ws.on('open', () => {
  ws.send('Hello')
})

ws.on('message', data => {
  console.log(data.toString())
})
