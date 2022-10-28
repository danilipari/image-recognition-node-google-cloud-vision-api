const express = require('express');
const cors = require("cors");
const helmet = require('helmet');
require('dotenv').config();
const os = require('os');
const morgan = require('morgan');
const vision = require('@google-cloud/vision');

/*
  https://medium.com/analytics-vidhya/setting-up-google-cloud-vision-api-with-node-js-db29d1b6fbe2
*/

  /**
   * @description Init Express
  */
  const app = express();
  app.use(helmet());
  app.disable('x-powered-by');
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  app.use(morgan('combined'));
  app.use(express.json());

  app.use(cors());

  async function quickstart() {
    const client = new vision.ImageAnnotatorClient({
      keyFilename: "./vision-366914-97afb4cde767.json",
    });

    /* const [result] = await client.labelDetection('./images/poker.jpeg');
    const labels = result.labelDetection;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description)); */

    /* const image = './images/poker.jpeg'; */
    const image = './images/carte-gioco.jpeg';
    /* const image = './images/test.png'; */
    let [result] = await client.textDetection(image);
    console.log('----------------------');
    console.log('Text:', result.textAnnotations[0]);
    console.log('----------------------');
    console.log('Description:', result.textAnnotations[0].description);
  }

  quickstart();


  app.get('/', (req, res) =>
    res.send(`<h2">Image Recognition Google Cloud Vision API System</h2>`)
  );


  const port = process.env.PORT || 8081;
  app.listen(port, () => { console.log(`Server is running on port ${port}.`) });