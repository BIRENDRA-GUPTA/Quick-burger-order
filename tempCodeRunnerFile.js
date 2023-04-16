const express = require('express')
const app = express()
const ejs = require(ejs)
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000

app.get('/', (req, res) =>{
    res.render('home')
})

// set Template engine
app.use(expressLayout)
app.set('Views', path.join(__dirname, '/Resources/Views'))
app.set('View engine', 'ejs')

app.listen(PORT, () => {
    console.log('Listening on port xyz 3300')
})