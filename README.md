# Build an Image Search App with: VanillaJS

## Link to the finished app
[Image Search APP (VANILLAJS)](https://ps-vanillajs.now.sh)

![example-site](ps-vanillajs-site.gif)

## Vanilla JS

All apps will contact the unsplash Image Search API.

> Image search API like [Unsplash](https://unsplash.com/developers)

`https://api.unsplash.com/search/photos/`

> You will need an access key from unsplash.com. After signing up, create an application here:https://unsplash.com/oauth/applications

All apps will use the skeleton CSS framework:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
```

And use this body style:

```css
body {
  width: 80%;
  margin: 2em auto 0 auto;
}
```

#### This app demonstrates:

* User Input
* DOM Events
* API Requests
* Conditional Rendering
* Rendering Lists of Data

## Vanilla JS
---

* [x] Add search form to page
* [x] Make API Request with search term when form is submitted
* [x] Show loading images
* [x] Append Results to the page
* [x] Hide loading image


### Deployment

  * We will deploy this little app with [Quick Deployment with now.sh](https://zeit.co/now)

  * Steps:
    * create an account on [now sign up](https://zeit.co/signup)

  * install `now/cli`: 
      ```bash
        npm i -g now
      ```


