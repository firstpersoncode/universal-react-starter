import express from 'express';
import React from "react";
import { renderToString } from "react-dom/server";
import Helm from 'react-helmet';
import App from "../../src/App";

const router = express.Router();
const application = renderToString(<App />);

const head = Helm.rewind();


const html = `<!DOCTYPE html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    ${head.title.toString()}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://localhost:50044/style.css" />
    ${head.meta.toString()}
    ${head.link.toString()}
  </head>
  <body>
    <div id="root">${application}</div>
    ${head.script.toString()}
    <script src="http://localhost:50044/bundle.js"></script>
  </body>
</html>`;

router.get('/', (req, res) => {
  res.send(html);
});

export default router;
