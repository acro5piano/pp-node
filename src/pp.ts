import WebSocket from 'ws'

class PP {
  ws!: WebSocket

  constructor() {
    this.init = this.init.bind(this)
    this.pp = this.pp.bind(this)
    this.terminate = this.terminate.bind(this)
  }

  pp(args: any) {
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

const _pp = new PP()

export const init = _pp.init
export const pp = _pp.pp
export const terminate = _pp.terminate
