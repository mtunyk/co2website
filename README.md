# CO2 Birthdate Website

## About this project

This is the respository where the [co2birth.date](https://co2birth.date) website lives.  
[co2birth.date](https://co2birth.date) tells you the difference of atmospheric carbon dioxide (CO₂) measurement on date of your birth and today.




## Developer's notes

### Prerequisites

- [Node.js v14+](https://nodejs.org/en/download/current/)

### Run website locally

Once you've forked/cloned/downloaded/etc the repository, install project dependencies with
```
npm i
```
then run
```
npm run dev
```
which will get a localhost up and running for development.  
Navigate to localhost:3000 in your browser of choice to see it in action/develop in the browser.

# To generate the static content

To preview the website as static resources
```
npm run export
npm start
```

### Deploy to github pages

Once everything works fine, deploy the website to GitHub Pages
```
npm run deploy
```
