# Climate Change Api
This is a web scraper that returns climate change articles in JSON format. 
## [Live Demo](https://climate-change-api-dzwj.onrender.com)
## Prerequisites
- [Node.js](https://nodejs.org/en) *v16.16.0*: For creating a server for the browser to connect to.
- [Axios](https://axios-http.com/docs/intro) *v1.1.3*: For fetching articles from the api using the browser.
- [Cheerio](https://cheerio.js.org/) *v1.0.0-rc.12*: For parsing and manipulating HTML.
- [Express](https://expressjs.com/) *v4.18.2*: For performing HTTP operations(GET, POST, etc.).
## Installation
Install all dependencies with ```npm install```.
## Usage
1. To run, enter ```node index.js``` in the terminal. 
3. Go to the browser and enter ```localhost:8000```.
   
   ![image](https://github.com/rainmaker514/climate-change-api/assets/36095171/e712cd2c-abd3-4a6c-b640-fb27cab89096)

5. Enter any endpoint and parameter in the browser after ```localhost:8000```.

   ![image](https://github.com/rainmaker514/climate-change-api/assets/36095171/d4656e27-cde3-450e-a002-03040fb9d57d)

   ![image](https://github.com/rainmaker514/climate-change-api/assets/36095171/bd2c41c4-4fb6-4bea-9d57-29bddda7118c)


### Endpoints: 
- ```/news``` - gets all articles with 'climate change' in the title (title, url, source).
- ```/news/sources``` - gets all news sources (name, url).
- ```/news/{source name}``` - gets all articles with 'climate change' in the title from a specified source (latimes, bbc, thetimes, telegraph, theguardian, nytimes, smh).
