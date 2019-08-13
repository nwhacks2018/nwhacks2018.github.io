# WiFind (nwHacks 2018)

HTML, CSS, and Bulma website for **WiFind**, an Android application to automanage and autoconnect to crowdsourced public Wi-Fi networks.

View the website here: https://nwhacks2018.github.io

## Software Stack

| Purpose | Technology |
| --- | --- |
| Content Development | HTML, CSS |
| Styling Framework | [Bulma](https://bulma.io/) |
| Package Manager | [NPM](https://www.npmjs.com/) |
| Module Bundler | [webpack](https://webpack.js.org/)

## Setup

First, install [NPM](https://www.npmjs.com/).

Clone the repository:
```console
git clone https://github.com/nwHacks2018/nwHacks2018.github.io.git
```

Enter the directory:
```console
cd nwHacks2018.github.io/
```

Install the relevant dependencies:
```console
npm install
```

Build the SCSS and CSS files into a single JS bundle using Webpack:
```console
npm run build
```

The built files will be in the `dist/` directory. Re-run the build command anytime the styling is modified.

View the page by opening the file `index.html` in a browser.

## The Inspiration and Problem
Canada ranks among the [most expensive countries](https://crtc.gc.ca/eng/publications/reports/compar/compar2016.pdf) for Mobile Data within the [G7](https://www.cfr.org/backgrounder/group-seven-g7). Mobile data has become unaffordable for most people. 

## The Solution
The application allows for automatic Wifi management. When the user connects to an open network through the application, the credentials and GPS location are stored online and shared across all users of the same app. Any subsequent user with the application will automatically connect to the original open network within range. This creates a crowdsourced set of open Wifi networks.

### The System and Technologies
The application is built in Android and uses [Firebase](https://firebase.google.com/) as the database to store Wifi networks.
