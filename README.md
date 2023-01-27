# Hacker news app
A simply hacker news app that displays news item filtered by `top`, `best` and `new` stories, with also a simple search bar that lets you filter stories by title.

For a better user experience, I did not use the standard method of searching with a search button, but I introduced the concept of debouncing, which is a way of improving the search performance and experience.

# Project directory
```bash
src
 ┣ components
 ┃ ┣ navs
 ┃ ┃ ┗ AppBar.js
 ┃ ┣ Comment.js
 ┃ ┣ Comments.js
 ┃ ┣ ListNews.js
 ┃ ┣ NotFound.js
 ┃ ┣ Pagination.js
 ┃ ┗ Story.js
 ┣ constants
 ┃ ┗ api.constant.js
 ┣ context
 ┃ ┗ store.js
 ┣ Errors
 ┃ ┣ ErrorComponent.jsx
 ┃ ┗ ErrorFallback.jsx
 ┣ Hooks
 ┃ ┣ useDebounce.js
 ┃ ┣ useFetchNestedItems.js
 ┃ ┗ useFetchStories.js
 ┣ routes
 ┃ ┗ Routes.js
 ┣ styles
 ┃ ┣ App.css
 ┃ ┣ comments.styles.css
 ┃ ┣ index.css
 ┃ ┣ link.styles.css
 ┃ ┣ loading.css
 ┃ ┣ nav.styles.css
 ┃ ┣ pagination.css
 ┃ ┗ story.styles.css
 ┣ utils
 ┃ ┣ Link.js
 ┃ ┗ Loading.js
 ┣ App.js
 ┣ index.js
 ┣ reportWebVitals.js
 ┗ serviceWorker.js
 ```

## To run the app

In the project directory, you can run:

be sure to run the server first before start this app.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Features

- Filters stories by top, best and new stories


- Filters stories by search results
- Search input
- Navigate between top, best and new stories
- The `top` and `best` stories are displayed on the top and the `new` stories are displayed on the bottom of the page
- You can click on a story to display a link to it's story page
- Click on individual comments for each story to see all the comments associated to the story.
- Items are paginated 10 items per full page view at the the bottom right.

# Technology

- [React](https://www.reactjs.org/)

- javascript



## Please note:
this project uses proxy which allow the two different IP communicate in development only.
see `package.json` for implmentation

## about the developer
Emeka Okoli
[twitter](https://twitter.com/emyokoli)