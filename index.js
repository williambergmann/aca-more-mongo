const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const TicketRoutes = require('./express/routes/tickets')

mongoose.connect('mongodb+srv://william:tru3unuu!@cluster0-oesdf.mongodb.net/test?retryWrites=true&w=majority')

const port = process.env.PORT || 4001
const app = express()

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'))
}

app.use(bodyParser.json())
app.use('/api/tickets', TicketRoutes)

app.get('/', (req, res) => res.send('Default route!'))

app.listen(port, () => {
  console.log(`Express app running on localhost:${port}`)
})