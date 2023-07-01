# Climate Change Api
This is a web scraper that returns climate change articles in JSON format. 
## Local Demo
1. To run, enter ```node index.js``` in terminal
2. Go to browser and enter ```localhost:8000```
3. Enter any endpoint and parameter in browser after ```localhost:8000``` 
### Endpoints: 
- ```/news``` - gets all articles with 'climate change' in the title (title, url, source)
- ```/news/sources``` - gets all news sources (name, url) 
- ```/news/{source name}``` - gets all articles with 'climate change' in the title from a specified source (latimes, bbc, thetimes, telegraph, theguardian, nytimes, smh)

## Live Demo
https://climate-change-api-dzwj.onrender.com/
