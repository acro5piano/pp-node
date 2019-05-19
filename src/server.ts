import WebSocket from 'ws'

export function start() {
  const wss = new WebSocket.Server({ port: 3344 })

  wss.on('connection', ws => {
    ws.on('message', data => {
      if (data.toString() === 'close') {
        wss.clients.forEach(socket => {
          socket.close()
          process.nextTick(() => {
            if ([socket.OPEN, socket.CLOSING].includes(socket.readyState)) {
              socket.terminate()
            }
          })
        })
      }
      console.log(data.toString())
    })
  })
}
