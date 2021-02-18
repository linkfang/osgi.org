#!/usr/bin/env bash
node --version
npm -version
hugo version

npm ci
hugo --gc --minify --buildFuture
