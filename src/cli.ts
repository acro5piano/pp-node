import { start } from './server'

export async function runserver(argv = process.argv) {
  if (argv.includes('start')) {
    start()
  }
}
