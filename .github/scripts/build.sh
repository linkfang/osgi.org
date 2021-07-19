#!/usr/bin/env bash
node --version
yarn -version
hugo version

yarn install --frozen-lockfile
hugo --gc --minify --buildFuture
