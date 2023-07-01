# Climate Change Api
This is a web scraper that returns climate change articles in JSON format. 
## [Live Demo](https://climate-change-api-dzwj.onrender.com)
## Prerequisites
- Node.js *v16.16.0*
- Axios *v1.1.3*
- Cheerio *v1.0.0-rc.12*
- Express *v4.18.2*
- Nodemon *v2.0.20*
## Installation
1. Install [Node.js](https://nodejs.org/en): For creating a server for the browser to connect to.
2. Install [Axios](https://axios-http.com/docs/intro): For fetching articles from the api using the browser.
   ```
   npm install axios
   ```
3. Install [Cheerio](https://cheerio.js.org/): For parsing and manipulating HTML.
   ```
   npm install cheerio
   ```
4. Install [Express](https://expressjs.com/): For performing HTTP operations(GET, POST, etc.).
   ```
   npm install express
   ```
5. (Optional) Install [Nodemon](https://nodemon.io/): For automatic app restart when changes are saved.
   ```
   npm install nodemon
   ```
## Usage
1. To run, enter in terminal...
   ```
   node index.js 
   ```
   or to use nodemon, in ```package.json``` include ```"start": "nodemon index.js"``` under ```"scripts"```
   ```json
   "scripts": {
    "start": "nodemon index.js"
   }
   ```
   then run...
   ```
   nodemon index.js
   ```
3. Go to the browser and enter ```localhost:8000```
   
   ![image](https://github.com/rainmaker514/climate-change-api/assets/36095171/e712cd2c-abd3-4a6c-b640-fb27cab89096)

5. Enter any endpoint and parameter in browser after ```localhost:8000```

   ![image](https://github.com/rainmaker514/climate-change-api/assets/36095171/d4656e27-cde3-450e-a002-03040fb9d57d)

   ![image](https://github.com/rainmaker514/climate-change-api/assets/36095171/bd2c41c4-4fb6-4bea-9d57-29bddda7118c)


### Endpoints: 
- ```/news``` - gets all articles with 'climate change' in the title (title, url, source)
- ```/news/sources``` - gets all news sources (name, url) 
- ```/news/{source name}``` - gets all articles with 'climate change' in the title from a specified source (latimes, bbc, thetimes, telegraph, theguardian, nytimes, smh)
