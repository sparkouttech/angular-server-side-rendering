

const express = require('express');
const path = require('path');
const fs = require("fs"); 
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');

const { DEFAULT_META_DATA, META_DATA } = require('./data');

const env = dotenv.config().parsed || {};
const app = express();

app.disable('x-powered-by');
app.use(cors());

let htmlData = null;

app.use((req, res, next) => {
    if (req.url.includes(".")) {
        next();
    } else {
        console.log('page');
        const url = req.url.split('?')[0];
        console.log(url);
        // load meta data based on route
        const metaData = META_DATA[url] || DEFAULT_META_DATA;
        // set content-type header on response
        res.set('Content-Type', 'text/html');
        // inject meta tags
        prepareHtml(metaData).then((response) => {
            return res.send(response);
        });
    }
});

if (env.PUBLIC_PATH) {
    // static resources should just be served as they are
    app.use(express.static(path.resolve(env.PUBLIC_PATH), {
        maxAge: '2h' // 86400000 1 day // uses milliseconds per docs
    }));
}

const prepareHtml = (metaData) => {
    return new Promise((resolve, reject) => {
        const renderData = htmlData.replace('__APP_TITLE__',metaData['app_title'])
        .replace('__META_TITLE__',metaData['meta_title'])
        .replace('__META_AUTHOR__',metaData['meta_author'])
        .replace('__META_DESCRIPTION__',metaData['meta_description'])
        .replace('__META_KEYWORDS__',metaData['meta_keywords'])
        .replace('__OG_LOCALE__',metaData['og:locale'])
        .replace('__OG_TYPE__',metaData['og:type'])
        .replace('__OG_TITLE__',metaData['og:title'])
        .replace('__OG_DESCRIPTION__',metaData['og:description'])
        .replace('__OG_URL__',metaData['og:url'])
        .replace('__OG_NAME__',metaData['og:site_name'])
        .replace('__OG_IMAGE__',metaData['og:image'])
        .replace('__OG_IMAGE_WIDTH__',metaData['og:image:width'])
        .replace('__OG_IMAGE_HEIGHT__',metaData['og:image:height'])
        .replace('__OG_IMAGE_ALT__',metaData['og:image:alt'])
        .replace('__OG_IMAGE_TYPE__',metaData['og:image:type'])
        .replace('__TWITTER_CARD__',metaData['twitter:card'])
        .replace('__TWITTER_SITE__',metaData['twitter:site'])
        .replace('__TWITTER_TITLE__',metaData['twitter:title'])
        .replace('__TWITTER_DESCRIPTION__',metaData['twitter:description'])
        .replace('__TWITTER_IMAGE__',metaData['twitter:image']);
        resolve(renderData);
    });
}

// here we serve the index.html page
// app.get('/*', async (req, res) => {
//     const url = req.url.split('?')[0];
//     console.log(url);
//     // load meta data based on route
//     const metaData = META_DATA[url] || DEFAULT_META_DATA;
//     // set content-type header on response
//     res.set('Content-Type', 'text/html');
//     // inject meta tags
//     prepareHtml(metaData).then((response) => {
//         return res.send(response);
//     });
// });


const server = http.createServer(app);

// For https
// const privateKey  = fs.readFileSync(env.SSL_KEY_FILE_PATH, 'utf8');
// const certificate = fs.readFileSync(env.SSL_CERT_FILE_PATH, 'utf8');
// const credentials = {key: privateKey, cert: certificate};
// server = https.createServer(credentials, app);

fs.readFile(env.PUBLIC_HTML_PATH || './index.html', 'utf8', (err, fileData) => {
    if (err) {
        console.error('Error during file reading', err);process.exit();
    } else {
        console.log('index.html file loaded successfully');
        htmlData = fileData;
    }
    // For http
    server.listen(env.PORT || 5000, () => { console.log("listening on " + env.PORT || 5000 + "..."); });
});

