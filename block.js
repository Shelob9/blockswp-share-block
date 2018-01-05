const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;
const BlockControls = wp.blocks.BlockControls;
import { Component } from 'react'

import { ShareView } from './components/ShareView';

import Checkbox from './components/Checkbox';

registerBlockType( 'blockswp/share-block', {
	title: __( 'Social Share', 'social-block' ),
	icon: 'networking',
	category: 'common',
	attributes: {
        shareUrl: {
        	default: 'https://via.placeholder.com/35',
            type:   'string',
            source: 'meta',
            meta:   'blockswp_share_shareUrl'
        },
        shareTitle: {
            default: __( 'Post Title', 'social-block' ),
            type:   'string',
            source: 'meta',
            meta:   'blockswp_share_shareTitle'
        },
        showCounts: {
            default: 0,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showCounts'
        },
        showIcon: {
            default: 1,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showIcon'
        },
        iconSize :{
            default: 32,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_iconSize'
        },
        showFacebook: {
            default: 1,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showFacebook'
        },
        showTwitter: {
            default: 1,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showTwitter'
        },
        showWhatsapp : {
            default: 1,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showWhatsapp'
        },
        showPinterest : {
            default: 1,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showPinterest'
        },
        showLinkedin : {
            default: 1,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showLinkedin'
        },
        showReditt : {
            default: 1,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showReditt'
        },
        showTumblr : {
            default: 1,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showTumblr'
        },
        showEmail : {
            default: 1,
            type:   'integer',
            source: 'meta',
            meta:   'blockswp_share_showEmail'
        }
    },
    edit({attributes, setAttributes, className, focus, id}) {
        const createChangeHandler = (attr) => {
              return function (event) {
                  let newValue = {};
                  if( 1 === attributes[attr]){
                      newValue[attr] = 0;
                  }else{
                      newValue[attr] = 1;
                  }

                  setAttributes(newValue)
              }
        };
        return (
			<div className={ className }>
                {focus &&
                <BlockControls key="controls">
                    <div className="blockswp-share-block-settings">
                        <div className="blockswp-share-block-settings-section">
                        	<strong class="blockswp-share-block-settings-section-title">Social Networks</strong>
                            <Checkbox
                                idAttr={`${id}-showFacebook`}
                                label={__( 'Facebook', 'social-block') }
                                change={createChangeHandler('showFacebook')}
                                checked={attributes.showFacebook}

                            />

                            <Checkbox
                                idAttr={`${id}-showTwitter`}
                                label={__( 'Twitter', 'social-block') }
                                change={createChangeHandler('showTwitter')}
                                checked={attributes.showTwitter}
                            />

                            <Checkbox
                                idAttr={`${id}-showWhatsapp`}
                                label={__( 'WhatsApp', 'social-block') }
                                change={createChangeHandler('showWhatsapp')}
                                checked={attributes.showWhatsapp}
                            />

                            <Checkbox
                                idAttr={`${id}-showLinkedin`}
                                label={__( 'LinkedIn', 'social-block') }
                                change={createChangeHandler('showLinkedin')}
                                checked={attributes.showLinkedin}
                            />

                            <Checkbox
                                idAttr={`${id}-showReditt`}
                                label={__( 'Reddit', 'social-block') }
                                change={createChangeHandler('showReditt')}
                                checked={attributes.showReditt}
                            />

                            <Checkbox
                                idAttr={`${id}-showTumblr`}
                                label={__( 'Tumblr', 'social-block') }
                                change={createChangeHandler('showTumblr')}
                                checked={attributes.showTumblr}
                            />

                            <Checkbox
                                idAttr={`${id}-showPinterest`}
                                label={__( 'Pintrest', 'social-block') }
                                change={createChangeHandler('showPinterest')}
                                checked={attributes.showPinterest}
                            />

                            <Checkbox
                                idAttr={`${id}-showEmail`}
                                label={__( 'Email', 'social-block') }
                                change={createChangeHandler('showEmail')}
                                checked={attributes.showEmail}
                            />
                        </div>

                        <div className="blockswp-share-block-settings-section">
                        	<strong class="blockswp-share-block-settings-section-title">
                                { __( 'Options', 'social-block')}
                            </strong>
                            <Checkbox
                                idAttr={`${id}-showIcons`}
                                label={__( 'Show Icons', 'social-block') }
                                change={createChangeHandler('showIcon')}
                                checked={attributes.showIcon}
                            />

                            <Checkbox
                                idAttr={`${id}-showCounts`}
                                label={__( 'Show Counts', 'social-block') }
                                change={createChangeHandler('showCounts')}
                                checked={attributes.showCounts}
                            />


                            <div className="blockswp-share-block-setting">
                                <label
                                    htmlFor="blockswp-share-block-show-icon-size"
                                >
                                    {__('Icon Size', 'social-block')}
                                </label>
                                <input
                                    id="blockswp-share-block-show-icon-size"
                                    type="number"
                                    value={attributes.iconSize ? attributes.iconSize : 32 }
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
	    return (
	        <div
                className={className}
            />
        );
	},
} );
