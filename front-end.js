import  {ShareView} from "./components/ShareView";
import ReactDOM from 'react-dom';
HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

/** When DOM is ready, find the empty div that Gutenberg saved, and mount React component on it. **/
document.addEventListener( 'DOMContentLoaded', function(event) {
    const selections = document.getElementsByClassName('wp-block-blockswp-share-block');
    function ucFirst(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if ( 'object' === typeof  BLOCKSWP_SHARE_FRONT && selections.length) {
        selections.forEach((element, i) => {
            let attributes = JSON.parse(BLOCKSWP_SHARE_FRONT.post.data.blockswp_share);
            attributes.shareUrl = BLOCKSWP_SHARE_FRONT.post.data.link;
            attributes.shareTitle = BLOCKSWP_SHARE_FRONT.post.data.title.rendered;
            new BlocksWPShareBlockFront(attributes, element);
        });
    }

});

/**
 * Track number of components loaded so they can have unique IDs
 *
 * @todo remove this
 *
 * @since 1.0.0
 *
 * @type {number}
 */
let number = 1;

/**
 * Given a set of attributes and an HTML DOM node, put ShareView component on it using React DOM
 *
 * @since 1.0.0
 *
 * @param {*} attributes Attributes to pass to ShareView component
 * @param parentEl DOM node to mount component on.
 * @constructor
 */
function BlocksWPShareBlockFront(attributes,parentEl) {
    let Component = ShareView(attributes);
    let newElement = document.createElement('div');
    newElement.id = `wp-block-blockswp-share-block-${number}`;
    number++;
    parentEl.appendChild(newElement);
    ReactDOM.render(
        Component,
        newElement
    );

}