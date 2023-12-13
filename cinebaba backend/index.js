const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const Movie = require('./models/movie')
const Person = require('./models/person')
const Language = require('./models/language')


const movieRoutes = require('./routes/movieRoutes')
const personRoutes = require('./routes/personRoutes')
const languageRoutes = require('./routes/languageRoutes')
const castRoutes = require('./routes/castRoutes')
const theatreRoutes = require('./routes/theatreRoutes')
const screenRoutes = require('./routes/screenRoutes')
const showRoutes = require('./routes/showRoutes'); 
const router = require('./routes/movieRoutes');

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use('/movies', movieRoutes)
app.use('/persons', personRoutes)
app.use('/languages',languageRoutes)
app.use('/casts',castRoutes)
app.use('/theatres', theatreRoutes)
app.use('/screens', screenRoutes)
app.use('/shows', showRoutes)







main().then(()=>console.log("db connected")).catch(err => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

  async function main() {
    await mongoose.connect('mongodb+srv://admin:ieyN6lKDPs5J6yZM@cluster0.irwkfbt.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  