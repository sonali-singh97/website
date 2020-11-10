const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const nodemailer=require('nodemailer');

//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const mysql = require('mysql');
// const database = mysql.createConnection({
//   host: 'localhost', 
//   user: 'root',      
//   password: 'Sonali@12',      
//  database: 'website'  
// }); 
// database.connect(function(err) {
//   if (err) throw err;
//   console.log('Database is connected successfully !');
// });



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
  // let sql ="SELECT image,Date(date), event_name , event_info FROM pastEvents  ORDER BY Date(date) DESC";
  // database.query(sql ,(error, results)=>
  // {
  //   if(error)
  //   throw error;
  //   console.log(results);
  // res.render("pages/events.ejs");
  // }
  // )

  res.render("pages/events.ejs");

});

app.get("/event", function (req, res) {
	res.render("pages/event.ejs");
});

app.get("/faq", function (req, res) {
	res.render("pages/faq.ejs");
});

app.get("/contact", function (req, res) {
	res.render("pages/contact.ejs", {msg:null});
});

app.post("/send", (req,res) => {

  const output = `<p>You have a new query</p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name:${req.body.Name}</li>
  <li>Email:${req.body.Email}</li>
  <li>Phone:${req.body.Phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.Message}</p>  `;


  let transport = nodemailer.createTransport({
   service:"gmail",
    auth: {
      user: "sendmail676@gmail.com", //generated by Mailtrap
      pass: "DSCwebsite" //generated by Mailtrap
    },
    tls: {
      rejectUnauthorized : false
    }
  });

  let mailOptions = {
    from: 'sendmail676@gmail.com', 
    to: 'sonali122000@gmail.com',
    subject: 'Nodemailer contact details',
    text: 'Wooohooo it works!!',
    html: output
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  res.render("pages/contact.ejs", {msg:"email has been sent"});
});

  
});