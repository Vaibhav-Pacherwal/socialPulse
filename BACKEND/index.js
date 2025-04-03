const express = require("express");
const axios = require("axios");
const path = require("path");
const ejs = require("ejs");
const chart = require("chart");

const app = express();
let port = 8080;

require("dotenv").config(); 
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public/css/")));
app.use(express.static(path.join(__dirname, "/public/js/")));
app.use(express.static(path.join(__dirname, "/public/images/")));

app.listen(port, ()=>{
    console.log(`server is running on https://localhost:${port}`);
});

async function userDetails(user) {
    try {
        let res = await axios.get(`https://api.github.com/users/${user}`, {
            headers: {Authorization: `token ${GITHUB_TOKEN}`}
        });
        return res.data;
    } catch(err) {
        console.log(`Can't Fetch User Data!`);
        return null;
    }
}

async function userRepo(user) {
    try {
        let res = await axios.get(`https://api.github.com/users/${user}/repos`, {
            headers: {Authorization: `token ${GITHUB_TOKEN}`}
        });
        return res.data;
    } catch(err) {
        console.log('Invalid User Details!');
    }

}

app.get("/github", async (req, res)=>{
    const user = req.query.user;
    const userData = await userDetails(user);

    if(!userData) {
        res.status(404).send("GitHub User Not Found!");
    }

    const userRepos = await userRepo(user);
    let stars = 0;
    for(let i = 0; i < userRepos.length; i++) {
        stars += userRepos[i].stargazers_count;
    }
    let languageCount = {};
    for(let repo of userRepos) {
        if(repo.language) {
            languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
        }
    }
    let total = 0
    let count = 0;
    for(key in languageCount) {
        total += languageCount[key];
        count++;
    }

    let languageUsed = [count];
    let languages = [count];
    let index = 0
    for(key in languageCount) {
        languageUsed[index] = (languageCount[key]/total)*100;
        languages[index] = key;
        index++;
    }

    let colors = [];
    for(let i = 0; i < languages.length; i++) {
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        colors[i] = `rgb(${r}, ${g}, ${b})`;
    }
    
    res.render("github", {userData, userRepos, stars, languageCount, total, languageUsed, languages, colors});
})

