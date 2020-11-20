const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const nodemailer=require('nodemailer');
const fileUpload = require('express-fileupload');
const kebabCase = require('lodash/kebabCase');

//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine ' , 'ejs');
app.use(express.static(__dirname + '/public'));

//file upload
app.use(fileUpload());

//db connection
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





app.listen(8000, function(){
    console.log("server is running on port 8000");
});

app.get("/", function (req, res) {
	res.render("pages/home_page.ejs");
});

app.get("/about", function (req, res) {
	res.render("pages/about.ejs");
});


app.get("/events", function (req, res) {
  let sql ="SELECT event_name, DATE_FORMAT(date , '%d') as date, DATE_FORMAT(date , '%b') as month, event_image ,event_info FROM past_events  ORDER BY date(date) DESC";
  database.query(sql ,(error, results)=>
  {
    if(error)
    throw error;
 //   console.log(results);
  res.render("pages/events.ejs" , {events : results});

});

});


app.get("/events/:eventName", function(req, res) {
  const requestedTitle = kebabCase(req.params.eventName);

  let sql ="SELECT event_name, DATE_FORMAT(date , '%a %D %b %Y') as date, event_banner ,time, duration,event_details, event_ppt, event_video ,speaker_name1 , speaker_img1 , speaker_name2 , speaker_img2 , speaker_name3 , speaker_img3 FROM past_events  ORDER BY date(date) DESC";
  database.query(sql ,(error, results)=>
  {
    if(error)
    throw error;

    results.forEach(function(result) {
      const eventName= kebabCase(result.event_name);
      if (eventName === requestedTitle) {
        res.render("pages/event.ejs", {
          eventName : result.event_name,
          eventDate : result.date,
          eventTime : result.time,
          eventDuration : result.duration,
          eventBanner :result.event_banner,
          eventDetails : result.event_details,
           eventVideo :result.event_video,
           eventPPT:result.event_ppt,
         speakerName : result.speaker_name1,
         speakerImage: result.speaker_img1
          
        });
      }
    });

  

});

 
});


// app.get("/event", function (req, res) {
//   let sql ="SELECT event_name, DATE_FORMAT(date , '%a %D %b %Y') as date, event_banner ,time, duration,event_details, event_ppt, event_video ,speaker_name1 , speaker_img1 , speaker_name2 , speaker_img2 , speaker_name3 , speaker_img3 FROM past_events  ORDER BY date(date) DESC";
//   database.query(sql ,(error, results)=>
//   {
//     if(error)
//     throw error;
//  //   console.log(results);
//   res.render("pages/event.ejs" , {results : results});

// });

// });


app.get("/form", function (req, res) {
	res.render("pages/form.ejs");
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
      user: "sendmail676@gmail.com",
      pass: "DSCwebsite" 
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
  res.render("pages/contact.ejs", {msg:"Email has been sent"});
});

  
})

app.post("/submit" , (req,res) => {

  const imgArr = [];
imgArr.push(req.files.event_image);
imgArr.push(req.files.event_banner);
imgArr.push(req.files.speaker_img1);
imgArr.push(req.files.speaker_img2);
imgArr.push (req.files.speaker_img3);

let values={
  event_name: req.body.event_name,
  date : req.body.event_date,
  time: req.body.event_time,
  event_image : req.files.event_image.name,
 event_banner : req.files.event_banner.name,
  duration: req.body.event_duration,
  event_info: req.body.event_info,
  event_details: req.body.event_details,
  event_video: req.body.event_video,
  event_ppt: req.body.event_ppt,
  speaker_name1: req.body.speaker_name1,
  speaker_img1: req.files.speaker_img1.name,
  speaker_name2: req.body.speaker_name2,
  speaker_img2: req.files.speaker_img2,
  speaker_name3: req.body.speaker_name3,
  speaker_img3: req.files.speaker_img3
}
console.log(values);


imgArr.forEach(function(img){
 if(img!=undefined) {img.mv('./public/images/upload/'+ img.name, function(err) {
                             
    if (err)
  
      return res.status(500).send(err); })}
})


database.query('INSERT INTO past_events SET ?', values, function(err,req,res){
  if(err){
    console.log('Connection result error '+err);
   
  }
      else{
  console.log('Success');     

      }
});


res.render("pages/form.ejs");
});