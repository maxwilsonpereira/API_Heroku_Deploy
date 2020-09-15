// Create package.json file:
// npm init -y
// npm install express
// RUN WITH NODE (on terminal): node app
// NODEMON TO AUTO REFRESH:
// npm install nodemon
// RUN WITH NODEMON (on terminal): nodemon app
// ADD to package.json (JUST "start": ... IF "scripts" already exists):
// "scripts": {
//     "start": "node app"
//   },

// DEPLOYMENT:
// 1st: Creat a Git Repository and push project to it;
// 2nd: On Heroku, create NEW, Connect to GitHub.
// Search for the GitHub repository and connect!
// Create file Procfile

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8877;

app.get("/projects", (req, res) => {
  res.json([
    {
      name: "Canal da Maria Santa",
      url: "http://canaldamariasanta.com/",
    },
    {
      name: "Photographer Website",
      url: "https://luizphotography.web.app/",
    },
    {
      name: "Real Estate Web App",
      url: "https://realestatemaxmix.web.app/",
    },
    {
      name: "Tax Declaration Web App",
      url: "https://taxdeclaration.web.app/",
    },
    {
      name: "Tenori Amici Website",
      url: "https://www.tenoriamici.com/",
    },
  ]);
});

app.get("/about", (req, res) => {
  res.json({
    name: "Max Wilson Pereira",
    email: "maxwilsonpereira@gmail.com",
    urls: [
      { type: "website", url: "http://www.maxmixdigital.com/" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/maxwilsonpereira/",
      },
      {
        type: "github",
        url: "https://github.com/maxwilsonpereira",
      },
    ],
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "API (GET) is working now!",
  });
});

app.listen(PORT, () => {
  console.log("Listening to PORT " + PORT);
});
