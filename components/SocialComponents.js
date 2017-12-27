const { __ } = wp.i18n;

import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    EmailShareButton,
} = ShareButtons;


const {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const TumblrIcon = generateShareIcon('tumblr');
const MailruIcon = generateShareIcon('mailru');
const EmailIcon = generateShareIcon('email');
const LivejournalIcon = generateShareIcon('livejournal');

const exampleImage = 'https://via.placeholder.com/350x150';

import { Component } from 'react'

export const Facebook = (props) => {
    return (
        <div className="blockswp-share-block">
            <div className="blockswp-share-block-facebook">
                <FacebookShareButton
                    url={props.shareUrl}
                    quote={props.shareTitle}
                    className="blockswp-share-block-facebook__share-button">
                    {'true' === props.showIcon &&
                    <FacebookIcon
                        size={props.iconSize}
                        round
                    />
                    }
                    {'false' === props.showIcon &&
                    __( 'Share On Facebook', 'text-domain')
                    }
                </FacebookShareButton>
                {'true' === props.showCounts &&
                <FacebookShareCount
                    url={props.shareUrl}
                    className="blockswp-share-block-facebook__share-count">
                    {count => count}
                </FacebookShareCount>
                }

            </div>
        </div>
    )
};

export const Twitter = (props) => {
    return(
        <div className="blockswp-share-block">
            <div className="blockswp-share-block-twitter">
                <TwitterShareButton
                    url={props.shareUrl}
                    title={props.shareTitle}
                    className="blockswp-share-block-twitter__share-button">
                    {'true' === props.showIcon &&
                        <TwitterIcon
                            size={props.iconSize}
                            round
                        />
                    }
                    {'false' === props.showIcon &&
                        __('Share On Facebook', 'text-domain')
                    }
                </TwitterShareButton>
            </div>
        </div>
    )
};


