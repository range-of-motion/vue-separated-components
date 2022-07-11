const mix = require('laravel-mix');

mix
    .js('resources/js/app.js', 'public/js')
    .js('resources/js/components/counter.js', 'public/js/components')
    .vue();
