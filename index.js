const robots = {
    youtube: require('./robots/youtube.js'),
    video: require('./robots/video.js'),
    input: require('./robots/user-input.js'),
    text: require('./robots/text.js'),
    image: require('./robots/image.js'),
    state: require('./robots/state.js')
}

async function start () {  
    robots.input()    
    await robots.text()
    await robots.image()
    await robots.video()
    //await robots.youtube()
    
}


start()