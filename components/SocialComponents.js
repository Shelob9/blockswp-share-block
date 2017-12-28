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

const classNames = {
    outer: 'blockswp-share-block',
    inner: 'blockswp-share-block-',
}
import { Component } from 'react'

export const Facebook = (props) => {
    return (
        <div className={classNames.outer}>
            <div className={`${classNames.inner}-facebook`}>
                <FacebookShareButton
                    url={props.shareUrl}
                    quote={props.shareTitle}
                >
                    {'true' === props.showIcon &&
                        <FacebookIcon
                            size={props.iconSize}
                            round
                            className={`${classNames.icon}-facebook`}
                        />
                    }
                    {'false' === props.showIcon &&
                        __( 'Share On Facebook', 'text-domain')
                    }

                </FacebookShareButton>
                {'true' === props.showCounts &&
                    <FacebookShareCount
                        url={props.shareUrl}
                    >
                        {count => count}
                    </FacebookShareCount>
                }


            </div>
        </div>
    )
};

export const Twitter = (props) => {
    return(
        <div className={classNames.outer}>
            <div className={`${classNames.inner}-twitter`}>
                <TwitterShareButton
                    url={props.shareUrl}
                    title={props.shareTitle}
                >
                    {'true' === props.showIcon &&
                        <TwitterIcon
                            size={props.iconSize}
                            round
                        />
                    }
                    {'false' === props.showIcon &&
                        __('Share On Twitter', 'text-domain')
                    }
                </TwitterShareButton>
            </div>
        </div>
    )
};

export const WhatsApp = (props) => {
    return(
        <div className={classNames.outer}>
            <div className={`${classNames.inner}-whatsapp`}>
                <WhatsappShareButton
                    url={props.shareUrl}
                    title={props.shareTitle}
                    separator=":: "
                >
                    {'true' === props.showIcon &&
                        <WhatsappIcon
                            size={props.iconSize}
                            round
                        />
                    }
                    {'false' === props.showIcon &&
                    __('Share On WhatsApp', 'text-domain')
                    }
                </WhatsappShareButton>
            </div>
        </div>
    )
};




