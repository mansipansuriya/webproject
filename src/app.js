const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { error } = require("console");
const app = express();
const port = process.env.PORT || 3000;

//public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partilas_path = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set("views",template_path);
hbs.registerPartials(partilas_path)

app.use(express.static(static_path));



//routing
app.get("/",(req, res)=>{
    res.render("index");
});

app.get("/about",(req, res)=>{
    res.render("about");
});

app.get("/weather",(req, res)=>{
    res.render("weather");
});

// app.get("*",(req, res)=>{
//     res.send("404 error page oopss");
// });

app.use((req,res)=>{
    res.render("404error",{
        errorMsg : 'Opps! Page Not Found ,Click Here to go back'
    });
});


app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
});