const express           = require('express');
const app               = express();
const port              = 3000 || process.env.PORT;

//INDEX ROUTE
app.get('/',(req,res) =>res.send("Home Page"));

app.listen(port,()=>console.log(`listening to port: ${port}`));

