# WiFind (nwHacks 2018)

## By Luminescence v2 
WiFind is a crowdsourced open Wifi network platform that allow users to hop across public Wifi networks.

## Setup

Run:

```console
npm run build
```

And open up the file `index.html`.

## The Inspiration and Problem
Canada ranks among the [most expensive countries](https://crtc.gc.ca/eng/publications/reports/compar/compar2016.pdf) for Mobile Data within the [G7](https://www.cfr.org/backgrounder/group-seven-g7). Mobile data has become unaffordable for most people. 

## The Solution
The application allows for automatic Wifi management. When the user connects to an open network through the application, the credentials and GPS location are stored online and shared across all users of the same app. Any subsequent user with the application will automatically connect to the original open network within range. This creates a crowdsourced set of open Wifi networks.

### The System and Technologies
The application is built in Android and uses [Firebase](https://firebase.google.com/) as the database to store Wifi networks.
