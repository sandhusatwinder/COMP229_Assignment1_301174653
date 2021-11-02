
/*  COMP229_ASSIGNMENT1_301174653 --------- Satwinder kaur -------  30174653  -------- 10th october*/

const path = require('path');
const express = require('express')
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index',{
      title : "Home",
      name: "Satwinder Kaur"
  });
})

app.get('/about.hbs', function (req, res) {
    res.render('about',{
          title:"AboutPage"
    });
  })
  
  app.get('/project.hbs', function (req, res) {
    res.render('project',{
          title:"ProjectPage"
    });
  })
  app.get('/contact.hbs', function (req, res) {
    res.render('contact',{
          title:"ContactPage"
    });
  })
  app.get('/service.hbs', function (req, res) {
    res.render('service',{
          title:"ServicePage"
    });
  })
app.listen(3000, () => {
        console.log("The server is running on the port 3000");
    })