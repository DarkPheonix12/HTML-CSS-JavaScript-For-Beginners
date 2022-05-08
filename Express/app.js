const express = require("express");                             //Exporting express module
const path = require("path");
const app = express();                                          //Initialising app as express
const port = 80;

// For serving static files                                    //Installing nodemon--> Copy link given -- erase and keep until /npm/ and delete sp1 something file
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

app.get("/demo", (req, res)=>{                                               //This is our demo endpoint
    res.status(200).render('demo', { title: 'Hey Aman', message: 'Hello there and thanks for telling me how to use pug!' })
});

app.get("/", (req, res)=>{                                               //This will be printed if I write "localhost:80" get request in postman
    res.status(200).send("This is homepage of my first express app with Aman");
});

app.get("/about", (req, res)=>{                                          //Proving with instructions to be drawn at nodes
    res.send("This is about page of my first express app with Aman");
});

app.post("/about", (req, res)=>{                                               
    res.send("This is a post request page of my first express app with Aman");
});

app.post("/this", (req, res)=>{                                               
    res.status(404).send("This page is not found");
});

app.listen(port, ()=>{                                                       //never forget to listen the app along with the port in the end
    console.log(`The application started successfully on port ${port}`);
});
