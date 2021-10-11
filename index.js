const server = require('./server')
const { MONGO_URI } = require('./config')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

mongoose.connect(MONGO_URI, {useNewUrlParser: true}).then(()=> {
    server.listen(PORT, () => {
        console.log("daaaaaaaaaale perro")
    })
}).catch(console.log)

