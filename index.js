const prompt = require('prompt-sync')();
const scraper = require("website-scraper");
const websiteUrl = String(prompt("Enter website url to scrape: "));

scraper( {
    urls: [websiteUrl],
    urlFilter: function (url) {
        return url.indexOf(websiteUrl) === 0;
    },
    recursive: true,
    maxDepth: 50,
    perttifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    directory: './Downloaded-Site'
}).then((data) => {
    console.log("Entire website have been downloaded successfully.");
}).catch((error) => {
    console.log("An error occured: ", error);
})

