const express = require('express');
const boyParser = require('body-parser');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());