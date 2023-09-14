const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

// app.use(session({
//     secret : "matrix",
//     resave : false,
//     saveUninitialized : false
// }))

// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect("mongodb://127.0.0.1:27017/matrixDB", {useNewUrlParser : true, useUnifiedTopology:true}).then(()=>{
//     console.log("Successfully connected to mongoDB");
// }).cathc((err)=>{
//     console.log(err)
// })

// const userSchema = new mongoose.Schema({
//     email : String,
//     password : String 
// })

// userSchema.plugin(passportLocalMongoose);

// const User = new mongoose.model("User", userSchema);

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


app.get("/", (req,res)=>{
    res.render("home", {currentPage:'home'})
})
app.get("/login", (req,res)=>{
    res.render("login", {currentPage:'login'})
})
app.get("/register", (req,res)=>{
    res.render("register", {currentPage:'register'})
})
app.get("/contact",(req,res)=>{
    res.render("contact", {currentPage:'contact'});
})
app.get("/community", (req,res)=>{
    res.render("community", {currentPage:'community'})
})
app.get("/logix", (req,res)=>{
    res.render("logix", {currentPage:'logix'});
})
app.get("/about",(req,res)=>{
    res.render("about", {currentPage:'about'});
})

app.listen(3000, ()=>{
    console.log("Hello world;")
})