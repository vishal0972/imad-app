var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title:'Article-one | Vishal',
    heading: 'Why work hard in life?', 
    content:`<p1 color:grey width:100%>
            Because I haven't seen any successful person in the world who doesn't work hard. If you want to be successful you have to wok hard. Stop procastinating and start right now. It may take a lot of time to reach at your destination or it may be quick but you have to start. 
             </p1>`
};
function createTemplate (data) {
    var title = data.title;
    var header = data.heading;
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
             body {background-color:#3c9eff}
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

app.get('/article-one',function (req, res) {
  res.send(createTemplate(ArticleOne));
});

app.get('/article-two',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
