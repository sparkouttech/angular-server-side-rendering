
### Angular server side rendering


Setup project 

```
git clone https://github.com/sparkouttech/angular-server-side-rendering.git
cd angular-server-side-rendering
npm install 
npm start
```

Sample json data to provide meta data about the page

check ```data.js``` file for further details
```json
{
    "/" : {
        "app_title": "Home application title",
        "meta_title": "sample meta_title",
        "meta_description":"Home sample meta description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "meta_keywords":"sample meta_keywords",
        "meta_author":"sample meta_author",
        "og:locale":"sample og:locale",
        "og:type":"sample og:type",
        "og:title":"sample og:title",
        "og:description":"Home sample meta description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "og:url":"sample og:url",
        "og:site_name":"sample og:site_name",
        "og:image":"https://cdn.searchenginejournal.com/wp-content/uploads/2019/10/25-of-the-best-examples-of-home-pages-5dc504205de2e.png",
        "og:image:width":"sample og:image:width",
        "og:image:height":"sample og:image:height",
        "og:image:alt":"sample og:image:alt",
        "og:image:type":"sample og:image:type",
        "twitter:card": "sample twitter card",
        "twitter:site":"sample twitter site",
        "twitter:title":"Home application twitter title",
        "twitter:description":"Home sample meta description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "twitter:image":"https://cdn.searchenginejournal.com/wp-content/uploads/2019/10/25-of-the-best-examples-of-home-pages-5dc504205de2e.png",
    },
    "/about" : {
        "app_title": "about page app_title",
        "meta_title": "sample meta_title",
        "meta_description":"About sample meta description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "meta_keywords":"sample meta_keywords",
        "meta_author":"sample meta_author",
        "og:locale":"sample og:locale",
        "og:type":"sample og:type",
        "og:title":"sample og:title",
        "og:description":"About sample meta description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "og:url":"sample og:url",
        "og:site_name":"sample og:site_name",
        "og:image":"https://st2.depositphotos.com/3591429/10566/i/600/depositphotos_105666254-stock-photo-business-people-at-meeting-and.jpg",
        "og:image:width":"sample og:image:width",
        "og:image:height":"sample og:image:height",
        "og:image:alt":"sample og:image:alt",
        "og:image:type":"sample og:image:type",
        "twitter:card": "sample twitter card",
        "twitter:site":"sample twitter site",
        "twitter:title":"sample twitter title",
        "twitter:description":"sample twitter description",
        "twitter:image":"https://st2.depositphotos.com/3591429/10566/i/600/depositphotos_105666254-stock-photo-business-people-at-meeting-and.jpg",
    }
```

In html file update title and meta tages like below 

```html
<title>__APP_TITLE__</title>
<meta name="keywords" content="__META_KEYWORDS__"></meta>
<meta name="description" content="__META_DESCRIPTION__"></meta>
<meta property="og:type" content="__OG_TYPE__">
<meta property="og:title" content="__OG_TITLE__">
<meta property="og:description" content="__OG_DESCRIPTION__">
<meta property="og:url" content="__OG_URL__">
<meta property="og:image" content="__OG_IMAGE__">
<meta name="twitter:card" content="__TWITTER_CARD__">
<meta name="twitter:site" content="__TWITTER_SITE__">
<meta name="twitter:title" content="__TWITTER_TITLE__">
<meta name="twitter:description" content="__TWITTER_DESCRIPTION__">
<meta name="twitter:image" content="__TWITTER_IMAGE__">

```