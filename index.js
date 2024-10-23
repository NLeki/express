// Set up express
const express = require("express");
const app = express();
const port = 8000; 

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Handle the routes
app.get("/", (req, res) => res.send("Hello World!")); 
app.get('/about',(req,res)=>res.send('<h1>This is about page</h1>'));
app.get('/contact',(req,res)=>res.send('<h1>Contact me on 07926728596</h1>'));
app.get('/date',(req,res)=>res.send('<h1>Todays date is 23.10.2024</h1>'));

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
