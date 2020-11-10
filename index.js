const express = require('express');
const app = express();

const mysql = require('mysql');
const database = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: 'Sonali@12',      
 database: 'website'  
}); 
database.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});



app.set('view engine ' , 'ejs');
app.use(express.static(__dirname + '/public'));

app.listen(8000, function(){
    console.log("server is running on port 8000");
});

app.get("/", function (req, res) {
	res.render("pages/home_page.ejs");
});

app.get("/about", function (req, res) {
	res.render("pages/about.ejs");
});

//CREATE TABLE
app.get("/events", function (req, res) {
  let sql ="SELECT image,Date(date), event_name , event_info FROM pastEvents  ORDER BY Date(date) DESC";
  database.query(sql ,(error, results)=>
  {
    if(error)
    throw error;
    console.log(results);
  res.render("pages/events.ejs",{results: results});
  }
  )

});

app.get("/event", function (req, res) {
	res.render("pages/event.ejs");
});

app.get("/faq", function (req, res) {
	res.render("pages/faq.ejs");
});

app.get("/contact", function (req, res) {
	res.render("pages/contact.ejs");
});