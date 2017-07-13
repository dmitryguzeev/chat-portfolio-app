/**
 * @file index.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

const path = require('path');
const fs = require('fs');

const express = require('express');
const winston = require('winston');

const app = express();

const DEV = true;
const PORT = 8000;

const ROOT_DIR_PATH = path.resolve(__dirname, '..');
const CLIENT_ROOT_DIR_PATH = path.resolve(ROOT_DIR_PATH, 'client');
const CLIENT_BUILD_DIR_PATH = DEV ?
                              path.resolve(CLIENT_ROOT_DIR_PATH, 'build/dev') :
                              path.resolve(CLIENT_ROOT_DIR_PATH, 'build/release');
const INDEX_PAGE_FILE_PATH = path.resolve(CLIENT_BUILD_DIR_PATH, 'index.html');

const INDEX_PAGE = fs.readFileSync(INDEX_PAGE_FILE_PATH).toString();

/**
 * @summary
 * The index handler.
 *
 * @return {string}.
 */
app.get('/', (req, res) => {
  res.send(INDEX_PAGE);
});

// Set the static file path
app.use(express.static(CLIENT_BUILD_DIR_PATH));

// Run the application
app.listen(PORT, () => {
  winston.log('info', `listening on ${PORT}`);
});
