Gulp experiment
===============

Experiment comparing Gulp with Grunt

#### Installation
Run the commands below in the project root directory.
#####1. Install Grunt and Bower

    $ sudo npm install -g gulp
    
#####2. Install project dependencies

    $ npm install

## Useful commands

####Compile LESS files
The build version is located in the `dist` directory.

    $ gulp css

####Compile JS files

    $ gulp js

####Watch for file changes
When a *.less file is changed, the `css` task will get executed.

    $ gulp watch
    
