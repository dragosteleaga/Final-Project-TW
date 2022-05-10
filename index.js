const fs = require("fs");
const express = require('express');
const path = require('path');
// STEP 1: Reading JSON file
const data = require("./data");
const titles=require("./home");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/'));
app.get("/", (req, res) => {
	res.render("home", { titles });
})
app.get("/register", (req, res) => {
	res.render("register");
})
app.get("/eqsPage", (req, res) => {
	res.render("eqsPage");
})

app.post("/register", async (req, res) => {

	console.log(req.body.username);
	// Defining new user
	let user = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	};

	data.push(user);

	fs.writeFile("data.json", JSON.stringify(data), err => {

		if (err) throw err;
	});
	
})
app.get('*', (req, res)=>{
	res.render("eror404");
});
  
app.listen(8000);





