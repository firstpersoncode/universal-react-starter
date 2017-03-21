import fs from 'fs';
import fse from 'node-fs-extra';
import path from 'path';
import express from "express";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import favicon from 'serve-favicon';


import db from './db';
import index from './source/index.js';

const app = express();

// db('mongodb://localhost/basicIsomorphic');

app.use("*", cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(process.cwd(), './public')));

if (process.env.NODE_ENV === "production") {
  app.use(favicon(path.resolve(process.cwd(), './public/favicon.ico')))
  fse.copy(path.resolve(process.cwd(), './.build/bundle.js'), path.resolve(process.cwd(), './public/javascripts/bundle.js'));
  fse.copy(path.resolve(process.cwd(), './.build/style.css'), path.resolve(process.cwd(), './public/stylesheets/style.css'));
}

app.get("*", index);


export default app;
