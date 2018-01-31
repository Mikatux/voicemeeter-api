const express = require('express');
const bodyParser = require('body-parser');
const voicemeeter = require('voicemeeter-remote');

const app = express();
try {
  voicemeeter.login();
} catch (e) {
  console.error(e);
  return -1;
}
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.post('/strips/:id', function (req, res) {
  try {
    for (key in req.body) {
      const capitalizedName = key.charAt(0).toUpperCase() + key.slice(1);
      if (typeof (voicemeeter[`setStrip${capitalizedName}`]) === "function") {
        voicemeeter[`setStrip${capitalizedName}`](req.params.id, req.body[key]);
      } else {
        throw 'Parameter name not found';
      }
    }

    res.json({
      error: false,
    });
  } catch (e) {
    res.json({
      error: true,
      message: e
    });
  }
});

app.post('/buses/:id', function (req, res) {
  try {
    for (key in req.body) {
      const capitalizedName = key.charAt(0).toUpperCase() + key.slice(1);
      if (typeof (voicemeeter[`setBus${capitalizedName}`]) === "function") {
        voicemeeter[`setBus${capitalizedName}`](req.params.id, req.body[key]);
      } else {
        throw 'Parameter name not found';
      }
    }

    res.json({
      error: false,
    });
  } catch (e) {
    res.json({
      error: true,
      message: e
    });
  }
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
  res.status(500).send("Sorry can't do that!")
})
app.listen(port);