const connectToMongo = require('./config/db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("API is alive and connected to MongoDB!");
});

// Available Routes
app.use('/api/auth', require('./route/auth'))
//app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})