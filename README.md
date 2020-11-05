# CO2 Birthdate Website

## About this project

This is the respository where the **[co2birth.date](https://co2birth.date)** website lives.  
**[co2birth.date](https://co2birth.date)** tells you the difference of atmospheric carbon dioxide (CO₂) measurement on any date since 1900 and today.

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
Navigate to [localhost:3000](http://localhost:3000) in your browser to see it in action/develop in the browser.

# To generate the site as static content

To generate the website with static resources
```
npm run export
```
Because of the number of static pages, this can take some time.

To preview the website loaded from static resources
```
npm start
```

### Deploy to github pages

Once everything works fine, deploy the website to GitHub Pages (branch: `gh-pages`)
```
npm run deploy
```
Because of the number of files, this can take some time.
