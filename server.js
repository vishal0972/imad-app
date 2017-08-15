var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
   'article-one' : {
  title:'Article-one | Vishal',
  heading: 'Why work hard in life?', 
  content: `
    <p1 color:grey width:100%>
        Because I haven't seen any successful person in the world who doesn't work hard. If you want to be successful you have to wok hard. Stop procastinating and start right now. It may take a lot of time to reach at your destination or it may be quick but you have to start. 
    </p1>`
    },
    
   'article-two' : {
  title:'Article-two | Vishal',
  heading: 'What is Success?', 
  content: `
    <p1 color:green width:100%>
        Success is when you start doing what to love to do. i.e Your passion.
    </p1> `
    },
    
   'article-three' : {
  title:'Article-three | Vishal',
  heading: 'When to be successful?', 
  content: `
        <p1 color:yellow width:100%>
           lets talk.
        </p1> `
    }
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content; 

    var htmlTemplate = `
    <html>
      <head>
         <title>
             ${title}
         </title>
         <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
      </head>
      <body>
          <div class="container">
          <div>
             <ol>
             <li><a href='/'>Home</a></li>
             <li><a href='/article-one'>Article-one</a></li>
             <li><a href='/article-two'>Article-two</a></li>
             <li><a href='/article-three'>Article-three</a></li>
             </ol>
          </div>
          <hr/>
          <style>
             body {background-color:#e8daef}
             h1 {color:black}
             h1 {text-align:center}
          </style>
          <center>
          <div>
          <h1>
          ${heading}
          </h1>
          </div>
          <br/>
          <div>
          ${content}
          </div>
          </center>
          </div>
      </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req, res) {
    // articleName == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/namaste.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'namaste.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
