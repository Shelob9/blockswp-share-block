const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;
const BlockControls = wp.blocks.BlockControls;
import { Component } from 'react'

import { ShareView } from './components/ShareView';

import Checkbox from 'rc-checkbox';

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
            default: 0,
        },
        showIcon: {
            default: 1,
        },
        iconSize :{
            default: 32
        },
        showFacebook: {
            default: 1
        },
        showTwitter: {
            default: 1
        },
        showWhatsapp : {
            default: 1
        },
        showPinterest : {
            default: 1
        },
        showLinkedin : {
            default: 1
        },
        showReditt : {
            default: 1
        },
        showTumblr : {
            default: 1
        },
        showEmail : {
            default: 1
        }
    },
    edit({attributes, setAttributes, className, focus, id}) {
        const settingsClassName = 'blockswp-share-block-setting';
        return (
			<div className={ className }>
                {focus &&
                <BlockControls key="controls">
                    <div className="blockswp-share-block-settings">
                        <div className="blockswp-share-block-settings-section">
                        	<strong class="blockswp-share-block-settings-section-title">Social Networks</strong>
                            <div className={settingsClassName}>
                                <label>
                                    <span>{__( 'Facebook', 'text-domain')}</span>
                                    <Checkbox
	                                	checked={attributes.showFacebook}
	                                    onChange={() => setAttributes({showFacebook:!attributes.showFacebook})}
	                                />
                                </label>
                            </div>

                            <div className={settingsClassName}>
                                <label>
                                    <span>{__( 'Twitter', 'text-domain')}</span>
                                    <Checkbox
	                                    checked={attributes.showTwitter}
	                                    onChange={() => setAttributes({showTwitter:!attributes.showTwitter})}
	                                />
                                </label>
                            </div>

                            <div className={settingsClassName}>
                                <label>
                                    <span>{__( 'WhatsApp', 'text-domain')}</span>
                                    <Checkbox
	                                    checked={attributes.showWhatsapp}
	                                    onChange={() => setAttributes({showWhatsapp:!attributes.showWhatsapp})}
	                                />
                                </label>
                            </div>

                            <div className={settingsClassName}>
                                <label>
                                    <span>{__( 'Pintrest', 'text-domain')}</span>
                                    <Checkbox
	                                    checked={attributes.showPinterest}
	                                    onChange={() => setAttributes({showPinterest:!attributes.showPinterest})}
	                                />
                                </label>
                            </div>

                            <div className={settingsClassName}>
                                <label>
                                    <span>{__( 'LinkedIn', 'text-domain')}</span>
                                    <Checkbox
	                                    checked={attributes.showLinkedin}
	                                    onChange={() => setAttributes({showLinkedin:!attributes.showLinkedin})}
	                                />
                                </label>
                            </div>

                            <div className={settingsClassName}>
                                <label>
                                    <span>{__( 'Reddit', 'text-domain')}</span>
                                    <Checkbox
	                                    checked={attributes.showReditt}
	                                    onChange={() => setAttributes({showReditt:!attributes.showReditt})}
	                                />
                                </label>
                            </div>

                            <div className={settingsClassName}>
                                <label>
                                    <span>{__( 'Tumblr', 'text-domain')}</span>
                                    <Checkbox
	                                    checked={attributes.showTumblr}
	                                    onChange={() => setAttributes({showTumblr:!attributes.showTumblr})}
	                                />
                                </label>
                            </div>
                        </div>

                        <div className="blockswp-share-block-settings-section">
                        	<strong class="blockswp-share-block-settings-section-title">Options</strong>
                            <div className={settingsClassName}>
                                <label>
                                    <span>{__( 'Show Icons', 'text-domain')}</span>
                                    <Checkbox
	                                    checked={attributes.showIcon}
	                                    onChange={() => setAttributes({showIcon:!attributes.showIcon})}
	                                />
                                </label>
                            </div>

                            <div className={settingsClassName}>
                                <label>
                                    <span>{__( 'Show Counts', 'text-domain')}</span>
                                    <Checkbox
	                                    checked={attributes.showCounts}
	                                    onChange={() => setAttributes({showCounts:!attributes.showCounts})}
	                                />
                                </label>
                            </div>

                            <div className={settingsClassName}>
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
                </BlockControls>

                }

                <ShareView
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                    showFacebook={attributes.showFacebook}
                    showLinkedin={attributes.showLinkedin}
                    showReditt={attributes.showReditt}
                    showTwitter={attributes.showTwitter}
                    showTumblr={attributes.showTumblr}
                    showWhatsapp={attributes.showWhatsapp}
                    showEmail={attributes.showEmail}
                    showPinterest={attributes.showPinterest}
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
                showTwitter: getAttr( 'showFacebook', 1 ),
                showFacebook: getAttr( 'showTwitter', 1 ),
                showWhatsapp: getAttr( 'showWhatsapp', 1 ),
                showPinterest: getAttr( 'showPinterest', 1 ),
                showLinkedin: getAttr( 'showLinkedin', 1 ),
                showReditt: getAttr( 'showReditt', 1 ),
                showTumblr: getAttr( 'showTumblr', 1 ),
                iconSize:getAttr( 'iconSize', 32 ),
                showIcons: getAttr( 'showIcons', 1 ),
                showCounts: getAttr( 'showCounts', 0 ),
            }
        )
	},
} );
