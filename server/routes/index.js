// const React = require('react');
// const { renderToString } = require('react-dom/server');
const express = require('express');
// const App = require('../../client/App');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
  // res.send(`
  //   <!DOCTYPE html>
  //   <html>
  //     <head>
  //       <meta charset="utf-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <title>React / Redux</title>
  //       <link rel="stylesheet" href="public/stylesheets/style.css" />
  //     </head>
  //     <body>
  //       <div id="root">${renderToString(<App />)}</div>
  //       <script type="text/javascript" src="public/javascripts/bundle.js"></script>
  //     </body>
  //   </html>
  // `)
});

module.exports = router;
