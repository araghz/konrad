const express = require('express')
const app = express()
const port = 80
const path = require("path")
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //res.sendFile( "index.html", { root: path.join(__dirname + "/views") } )
  res.render('pages/index', {
    // username: 
  });
})

app.get('/artificialintelligence', (req, res) => {
  res.render('pages/ai', {
    
  });
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Started @ http://localhost:${port}`)
})