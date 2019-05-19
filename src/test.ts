import { pp, init, terminate } from './pp'

async function test() {
  await init()
  await pp({
    a: {
      object: {
        props: {
          onChange: () => {},
        },
      },
    },
  })

  setTimeout(terminate, 1000)
}

test()
