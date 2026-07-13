# JXTX Foundation Website
https://jxtxfoundation.org


## Developer Workspace Setup

### Requirements

* `Node.js` ([https://nodejs.org/en/](https://nodejs.org/en/)), version 22.

* `npm` ([https://www.npmjs.com/](https://www.npmjs.com/)) is bundled with `Node.js` and is required to manage application dependencies.

### Setup

#### Clone the `jxtx` repo:

	git@github.com:galaxyproject/jxtx.git

#### Install npm Packages

Run the following command from the project's root directory to install the required packages:

	npm install

### Start the Development Server

Run the following command from the project root directory:

`npm start`

The development server can be viewed at:

`localhost:5598`

### Building

Run the following command to build the application:

`npm run build`

The built site is written to `dist/`.

### Local Production Version

Run the following command to view a built version of the application, locally:

`npm run serve`

The built version can be viewed at:

`localhost:5598`

## Deployment

The application is auto deployed on Netlify by pushing changes to the `main` branch. Build settings are
defined in `netlify.toml`.
