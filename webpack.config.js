'use strict';

var config = {
  target: 'web',
  module: {
    loaders: [{
      test: /index\.html$/,
      loader: 'copy'
    }, {
      test: /\.mp3|\.ogg|\.wav|\.fnt$/,
      loader: 'file'
    }, {
      test: /\.js$/,
      loader: 'babel'
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/,
      loader: 'file!image'
    }, {
      test: /phaser.js|phaser.min.js/,
      loader: 'script'
    }],
  },
  entry: {
    game: './src/game.js'
  },
  output: {
    path: './dist',
    publicPath: '',
    filename: 'game.js'
  }
};

module.exports = config;
