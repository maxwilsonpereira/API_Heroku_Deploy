// npm install express
// RUN WITH NODE (on terminal): node app
// NODEMON TO AUTO REFRESH:
// npm install nodemon
// RUN WITH NODEMON (on terminal): nodemon app

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
