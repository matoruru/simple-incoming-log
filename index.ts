import express from 'express'
import morgan from 'morgan'

const port = process.env.PORT
if (!port) throw new Error('PORT is undefined.')

const app = express()

// Logging.
app.use(morgan('combined'))

// Return 200 for every requests.
app.use((_req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})