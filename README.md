# 3DStreet Website and Docs

This is the repo for https://3dstreet.org website and https://3dstreet.org/docs Documentation site.

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Contributing

Want to contribute changes to these docs? The simplest way to is to visit an actual doc page such as https://www.3dstreet.org/docs/ and click on "✎ Edit this page" to see the markdown source file on GitHub. Click the pencil icon ✎ again in GitHub to make your suggested changes.

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

Updates to main github branch will automatically build and push into a static `gh-pages` branch that is served at https://3dstreet.org using GitHub pages.

### 3DStreet model directory json / schema workflow:
* google sheet export csv https://docs.google.com/spreadsheets/d/1mZgccnGkEagTjLBs-0z6cDUDkPhKWNwA27HOGBlwjbk/edit#gid=0
* csv to json via https://csvjson.com/csv2json
* helpful editor https://jsoneditoronline.org/
* validate against schema here: https://github.com/3DStreet/3dstreet-docs/blob/main/static/schema/3dstreet-model-schema-0.0.1.json
