# 3DStreet Website and Docs

This is the repo for https://3dstreet.com website and https://3dstreet.com/docs Documentation site.

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Contributing

Want to contribute changes to these docs? The simplest way to is to visit an actual doc page such as https://www.3dstreet.com/docs/ and click on "✎ Edit this page" to see the markdown source file on GitHub. Click the pencil icon ✎ again in GitHub to make your suggested changes.

## Developer Instructions

If you want to develop locally, clone this repo and use npm build tools.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Updates to main github branch will automatically build and push into a static `gh-pages` branch that is served at https://3dstreet.com using GitHub pages.
