const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        require('postcss-import'),
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        // require("cssnano"),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ],
};