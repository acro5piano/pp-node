const { start } = require('./server')

async function run() {
  if (process.args[1] === 'server') {
    start()
  }
}

module.exports = run
