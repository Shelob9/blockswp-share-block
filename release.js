const copy = require('recursive-copy');
const zipdir = require('zip-dir');
const path = require('path');
const through = require('through2');
const package = require("./package.json");

const  rimraf = require('rimraf');
const options = {
    overwrite: true,
    expand: true,
    dot: false,
    junk: true,
    filter: [
        '**/*',
        '!build',
        '!build/**/*',
        '!releases',
        '!releases/**/*',
        '!node_modules',
        '!node_modules/**/*',
        '!components',
        '!components/**/*',
        '!build-scripts',
        '!build-scripts/**/*',
        '!release.js',
        '!block.js',
        '!front.js',
        '!front-end.js',
        '!webpack.config.js',
        '!package.json',
        '!package-lock.json',
        '!README.md',

    ],
    rename: function(filePath) {
        return filePath;
    },

};

const buildPath = `./build/${package.name}/`;
copy('./', buildPath, options)
    .then(function(results) {
    console.info('Copied ' + results.length + ' files');
        zipdir(buildPath,{ saveTo: './releases/blockswp-share-block.zip' },function (err, buffer) {
            //hi
        })
        rimraf('./build', () =>{})

    })
    .catch(function(error) {
        console.error('Copy failed: ' + error);
    });


