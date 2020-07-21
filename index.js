const robots = {
    input: require('./robots/user-input.js'),
    text: require('./robots/text.js')
}

async function start () {
      
    robots.input()    
    await robots.text()
}

start()