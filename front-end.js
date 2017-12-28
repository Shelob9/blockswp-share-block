import  {ShareView} from "./components/ShareView";
import ReactDOM from 'react-dom';
HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

document.addEventListener("DOMContentLoaded", function(event) {
    const selections = document.getElementsByClassName('wp-block-blockswp-share-block');
    function ucFirst(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    selections.forEach( (element, i) =>{
        let attributes = {};
        Array.prototype.slice.call(element.attributes).forEach((item) => {
            let attrName = item.name;
            if( 0 === item.name.indexOf('show') ){
                let split = item.name.toLowerCase().split('show');
                attrName = `show${ucFirst(split[1])}`
                item.value = item.value.toString();
            }else if( 'class' === item.name ){
                 attrName = 'className';
            }else if ( 'iconsize' === item.name ){
                attrName = 'iconSize';
                if( 'true' === item.value ){
                    item.value = 32;
                }
                item.value = item.value.toString();
            }

            if( 'showIcons' === attrName ){
                attrName = 'showIcon';
            }
            attributes[attrName]=item.value;
        });

        attributes.shareUrl = BLOCKSWP_SHARE_FRONT.post.data.link;
        attributes.shareTitle = BLOCKSWP_SHARE_FRONT.post.data.title.rendered;

        BlocksWPShareBlockFront(attributes,element);

    });

});

let number = 1;
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