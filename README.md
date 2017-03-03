# Truffle with Webpack Boilerplate

[![Build Status](https://travis-ci.com/FreddieLindsey/truffle-webpack-boilerplate.svg?token=2txBfbss4toxp7qpR4fW&branch=master)](https://travis-ci.com/FreddieLindsey/truffle-webpack-boilerplate)

## Purpose

There are quite a number of truffle boilerplates out there, but none that really completely worked out of the box.

Here, just run the following:

```bash
yarn run services
yarn start
```

This should get you going with a testrpc instance running on Docker. Starting yarn then brings up webpack which migrates and hot-reloads your contracts as you edit them.

Have fun!

## Docker

I couldn't find the Docker image referenced in the [testrpc repository](https://github.com/ethereumjs/testrpc). I have therefore built it and pushed it publicly to Docker. Please kindly recognise that this work is not my own, but that of [ethereumjs](https://github.com/ethereumjs).
