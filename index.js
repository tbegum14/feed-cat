const app = require('./src/app')

const APP_PORT = 3000

app.listen(APP_PORT, ()=>{
    console.log(`listening on port ${APP_PORT}`)
})