const express = require("express");
const cors = require('cors');
const app = express();
const router = express.Router();
const SpeedController  = require('./speed');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let handleGetRequest = (req, res, controller) => {
  controller(req.params)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(err.code || 500).send(err);
    });
};

let handlePostRequest = (req, res, controller) => {
  console.log("les donnes",);
   let url = req.body.url
  controller(url)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err)
      if (err && err.code) {
        res.status(err.code).send(err);
      } else {
        res.status(500).send(err);
      }
    });
};


router.post(
  "/test-speed", (req, res) => handlePostRequest(req, res, SpeedController.Speed)
);
app.use('/api/v1', router);
app.listen(4000, () => {
  console.log("App listening in port: "+ 4000)
});

