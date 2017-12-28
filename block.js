const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

import { Component } from 'react'

import { ShareView } from './components/ShareView';


import Checkbox from './components/Checkbox';

registerBlockType( 'blockswp/share-block', {
	title: __( 'Social Share', 'text-domain' ),
	icon: 'networking',
	category: 'common',
	attributes: {
        shareUrl: {
        	default: 'https://via.placeholder.com/35'
        },
        shareTitle: {
            default: __( 'Post Title', 'gb')
        },
        showCounts: {
            default: 'false',
        },
        showIcon: {
            default: 'true'
        },
        iconSize :{
            default: 32
        },
        showFacebook: {
            default: 'true'
        },
        showTwitter: {
            default: 'true'
        },
        showWhatsapp : {
            default: 'true'
        },
        showPinterest : {
            default: 'true'
        },
        showLinkedin : {
            default: 'true'
        },
        showReditt : {
            default: 'true'
        },
        showTumblr : {
            default: 'true'
        },
        showEmail : {
            default: 'true'
        }
    },
    edit({attributes, setAttributes, className, focus, id}) {

        return (
			<div className={ className }>
                {focus &&
                    <div className="blockswp-share-block-settings">
                        <div className="blockswp-share-block-settings-section">
                            <Checkbox
                                idAttr="blockswp-share-block-show-facebook"
                                label={__( 'Facebook', 'text-domain')}
                                checked={attributes.showFacebook}
                                toggleCheckboxChange={(event)=> setAttributes({showFacebook:event.target.checked.toString()})}
                            />
                            <Checkbox
                                idAttr="blockswp-share-block-show-twitter"
                                label={__( 'Twitter', 'text-domain')}
                                checked={attributes.showTwitter}
                                toggleCheckboxChange={(event)=> setAttributes({showTwitter:event.target.checked.toString()})}
                            />
                            <Checkbox
                                idAttr="blockswp-share-block-show-whatsapp"
                                label={__( 'WhatsApp', 'text-domain')}
                                checked={attributes.showWhatsapp}
                                toggleCheckboxChange={(event)=> setAttributes({showWhatsapp:event.target.checked.toString()})}
                            />
                            <Checkbox
                                idAttr="blockswp-share-block-show-pintrest"
                                label={__( 'Pintrest', 'text-domain')}
                                checked={attributes.showPinterest}
                                toggleCheckboxChange={(event)=> setAttributes({showPinterest:event.target.checked.toString()})}
                            />
                            <Checkbox
                                idAttr="blockswp-share-block-show-linkedin"
                                label={__( 'LinkedIn', 'text-domain')}
                                checked={attributes.showLinkedin}
                                toggleCheckboxChange={(event)=> setAttributes({showLinkedin:event.target.checked.toString()})}
                            />
                            <Checkbox
                                idAttr="blockswp-share-block-show-reddit"
                                label={__( 'Reddit', 'text-domain')}
                                checked={attributes.showReditt}
                                toggleCheckboxChange={(event)=> {
                                    let newValue = event.target.checked.toString();
                                    setAttributes({showReditt:newValue})
                                }}
                            />
                            <Checkbox
                                idAttr="blockswp-share-block-show-tumblr"
                                label={__( 'Tumblr', 'text-domain')}
                                checked={attributes.showTumblr}
                                toggleCheckboxChange={(event)=> setAttributes({showTumblr:event.target.checked.toString()})}
                            />
                            <Checkbox
                                idAttr="blockswp-share-block-show-email"
                                label={__( 'Email', 'text-domain')}
                                checked={attributes.showTumblr}
                                toggleCheckboxChange={(event)=> setAttributes({showEmail:event.target.checked.toString()})}
                            />
                        </div>
                        <div className="blockswp-share-block-settings-section">
                            <Checkbox
                                idAttr="blockswp-share-block-show-icon"
                                label={__( 'Show Icon', 'text-domain')}
                                checked={attributes.showIcon}
                                toggleCheckboxChange={(event)=> setAttributes({showIcon:event.target.checked.toString()})}
                            />

                            <Checkbox
                                idAttr="blockswp-share-block-show-counts"
                                label={__( 'Show Counts', 'text-domain')}
                                checked={attributes.showIcon}
                                toggleCheckboxChange={(event)=> setAttributes({showCounts:event.target.checked.toString()})}
                            />

                            <div className="blockswp-share-block-setting">
                                <label
                                    for="blockswp-share-block-show-icon-size"
                                >
                                    {__('Icon Size', 'text-domain')}
                                </label>
                                <input
                                    id="blockswp-share-block-show-icon-size"
                                    type="number"
                                    value={attributes.iconSize}
                                    min="32"
                                    max="96"
                                    step="32"
                                    onChange={(event) => {
                                        setAttributes({iconSize: event.target.value})
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                }

                <ShareView
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                    showFacebook={attributes.showFacebook}
                    showTwitter={attributes.showTwitter}
                />

            </div>
		);

	},

    save({attributes, className}) {
	    const getAttr = ( attr, defaultValue ) => {
            return attributes.hasOwnProperty( attr )
                ? attributes[attr]
                : defaultValue
        };

		return el(
		    'div',
            {
                className: className,
                showTwitter: getAttr( 'showFacebook', 'true' ),
                showFacebook: getAttr( 'showTwitter', 'true' ),
                showWhatsapp: getAttr( 'showWhatsapp', 'true' ),
                showPinterest: getAttr( 'showPinterest', 'true' ),
                showLinkedin: getAttr( 'showLinkedin', 'true' ),
                showReditt: getAttr( 'showReditt', 'true' ),
                showTumblr: getAttr( 'showTumblr', 'true' ),
                iconSize:getAttr( 'iconSize', 32 ),
                showIcons: getAttr( 'showIcons', 'true' ),
                showCounts: getAttr( 'showCounts', 'true' ),
            }
        )
	},
} );
