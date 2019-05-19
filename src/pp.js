const WebSocket = require('ws')

class PP {
  constructor() {
    this.ws = null
    this.init = this.init.bind(this)
    this.pp = this.pp.bind(this)
    this.terminate = this.terminate.bind(this)
  }

  pp(args) {
    if (this.ws.readyState === 0) {
      console.warn('Error: WebSocket is not open.')
      return
    }
    this.ws.send(JSON.stringify(args, undefined, 2))
  }

  init() {
    this.ws = new WebSocket('ws://localhost:3344')

    return new Promise(resolve => {
      this.ws.on('open', () => {
        this.ws.send('Hello')
        resolve()
      })
    })
  }

  terminate() {
    this.ws.send('close')
  }
}

const pp = new PP()

exports.init = pp.init
exports.pp = pp.pp
exports.terminate = pp.terminate

global.pp = pp.pp
