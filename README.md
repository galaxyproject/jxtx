# JXTX Foundation Website
https://jxtxfoundation.org


## Developer Workspace Setup

### Requirements

* `Node.js` ([https://nodejs.org/en/](https://nodejs.org/en/)), version 14.16.0.

* We recommend using `n` ([https://github.com/tj/n](https://github.com/tj/n)) as the Node.js version manger.

* `npm` ([https://www.npmjs.com/](https://www.npmjs.com/)) is bundled with `Node.js` and is required to manage application dependencies.

### Setup
 
#### Clone the `jxtx` repo:

	git@github.com:galaxyproject/jxtx.git


#### Install Gatsby Command Line Tool

The Gatsby command line tool is used to develop, build and serve (locally) the JXTX Site.

    npm install --global gatsby-cli

#### Install npm Packages

Run the following command from the project's root directory to install the required packages:

	npm install

### Start the Development Server

Run the following command from the project root directory:

`npm start`

The development server can be viewed at:

`localhost:8000`

### Building

Run the following command to build the application:

`npm run build`

### Local Production Version

Run the following command to view a built version of the application, locally:

`gatsby serve`

The built version can be viewed at:

`localhost:9000`

## Deployment

The application is auto deployed on Netlify by pushing changes to the `main` branch. 




