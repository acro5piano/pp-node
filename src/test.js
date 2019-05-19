const { init, terminate } = require('./pp')

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

  terminate()
}

test()
