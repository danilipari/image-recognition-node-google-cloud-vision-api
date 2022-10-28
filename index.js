import express from "express";
import cors from "cors";
import helmet from "helmet";
import os from "os";
import morgan from "morgan";
import { config } from "dotenv";
config();

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
  const PORT = process.env.PORT || 8081;
  app.use(express.json());

  app.use(cors());

  /* Homepage Backend */
  app.get('/', (req, res) =>
    res.send(`<h2">Image Recognition Google Cloud Vision API System</h2>`)
  );


  const port = process.env.PORT || 8081;
  app.listen(port, () => { console.log(`Server is running on port ${port}.`) });