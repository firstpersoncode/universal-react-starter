import fs from 'node-fs-extra';
import path from 'path';
import express from "express";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import favicon from 'serve-favicon';


import db from './db';
import index from './source/index.js';
import headers from './source/headers.js';

const app = express();

db('mongodb://localhost/basicIsomorphic');

app.use("*", cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon("/public/favicon.ico"));
// fs.copy(path.resolve(__dirname, '../.build/bundle.js'), path.resolve(__dirname, '../public/javascripts/bundle.js'));
// fs.copy(path.resolve(__dirname, '../.build/style.css'), path.resolve(__dirname, '../public/stylesheets/style.css'));

app.use("/headers", headers);

app.use("*", index);

app.get("/api", (req, res) => {
  res.send({ message: "I am a server route and can also be hot reloaded!" });
});


export default app;
