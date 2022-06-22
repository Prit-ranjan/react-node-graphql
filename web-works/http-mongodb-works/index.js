import express from "express";

import bodyParser from "body-parser";
import routes from './src/routes/employee-route';

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({type: 'application/json'}));

routes(app);

// app.get("/",(req,res)=>{
//     res.json({"message":"welcome"});
// })

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})