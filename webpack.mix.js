/*!
 * Copyright (c) 2021 Eclipse Foundation, Inc.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * Contributors:
 *   Christopher Guindon <chris.guindon@eclipse-foundation.org>
 *
 * SPDX-License-Identifier: EPL-2.0
*/

mix = require('laravel-mix');
require('laravel-mix-transpile-node-modules')
mix.transpileNodeModules(['eclipsefdn-solstice-assets']);
mix.options({uglify: {uglifyOptions: {compress: false, output: {comments: true}}}});
mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less('./less/styles.less', 'static/css/styles.css');

mix.webpackConfig({
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    },
  },
});

mix.js('js/main.js', './static/js/solstice.js');