const express           = require('express');
const app               = express();
const port              = 3050 || process.env.PORT;

//INDEX ROUTE
app.get('/',(req,res) =>res.send("Home Page"));

// ABOUT ROUTE
app.get('/about',(req,res)=>res.send("About Page"));

app.listen(port,()=>console.log(`listening to port: ${port}`));

