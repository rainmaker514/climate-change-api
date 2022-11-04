const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const app = express()

const articles = []
const newsSites = [
    {
        name: 'bbc',
        address: 'https://www.bbc.com/news/science-environment-56837908',
        base: 'https://www.bbc.com'
    },
    {
        name: 'thetimes',
        address: 'https://www.thetimes.co.uk/environment/climate-change',
        base: ''
    },
    {
        name: 'telegraph',
        address: 'https://www.telegraph.co.uk/climate-change/',
        base: 'https://www.telegraph.co.uk'
    },
    {
        name: 'theguardian',
        address: 'https://www.theguardian.com/environment/climate-crisis',
        base: ''
    },
    {
        name: 'latimes',
        address: 'https://www.latimes.com/environment',
        base: ''
    },
    {
        name: 'nytimes',
        address: 'https://www.nytimes.com/section/climate',
        base: 'https://www.nytimes.com'
    },
    {
        name: 'smh',
        address: 'https://www.smh.com.au/environment/climate-change',
        base: 'https://www.smh.com.au'
    }
    
]

newsSites.forEach(newsSites => {
    axios.get(newsSites.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        $('a:contains("climate")', html).each(function(){
            const title = $(this).text()
            const url = $(this).attr('href')

            articles.push({
                title,
                url: newsSites.base + url,
                source: newsSites.name
            })
        })
    })
})

app.listen(PORT, () => console.log('Server running on PORT ${PORT}'))

app.get('/', (req, res) => {
    res.json('Welcome to my Climate Change News API')
})

app.get('/news', (req, res) => {
    res.json(articles)
})

app.get('/news/:newsSiteId', (req, res) => {
    const newsSiteId = req.params.newsSiteId

    const newsSiteAddress =  newsSites.filter(newsSites => newsSites.name == newsSiteId)[0].address
    const newsSiteBase = newsSites.filter(newsSite => newsSite.name == newsSiteId)[0].base

    axios.get(newsSiteAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []

            $('a:contains("climate")', html).each(function(){
                const title = $(this).text()
                const url = $(this).attr('href')

                specificArticles.push({
                    title,
                    url: newsSiteBase + url,
                    source: newsSiteId
                })
            })
            res.json(specificArticles)
        }).catch(err => console.log(err))
})


