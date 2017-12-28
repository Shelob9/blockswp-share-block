# ShareBlock
Gutenberg social share block. Beta AF.

_If you need a working copy use [the releases](/releases/blockswp-share-block.zip)_ 
## Development

* `npm install`
* `npm run dev`

Also, [read this](https://github.com/nygardk/react-share/blob/master/demos/demo0/Demo.jsx)

### Files
* block.js is for the block itself.
* components/ShareView.js is a React component used to render share buttons in front-end and in block preview.
* components/SocialComponents.js has one React component per network.
* components/Checkbox.js is a checkbox component.
* front-end.js is used to mount the front-end React app. 
* editor.css is used for editor and front-end CSS
* style.css is used for front-end CSS
* blockswp-share-block.php enqueues JavaScript and CSS.
* release.js is used to make the release ZIP. I probably should have used Webpack for this.

In the editor the generated file block.build.js is loaded. In the front-end front-end.js is loaded.

### Build for release
* `npm run release`
    * NOTE: This deletes the old release build.