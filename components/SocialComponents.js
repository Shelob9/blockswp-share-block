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
};

export const Facebook = (props) => {
    return (
        <div className={classNames.outer}>
            <div className={`${classNames.inner}-facebook`}>
                <FacebookShareButton
                    url={props.shareUrl}
                    quote={props.shareTitle}
                >
                    {props.showIcon &&
                        <FacebookIcon
                            size={props.iconSize}
                            round
                            className={`${classNames.icon}-facebook`}
                        />
                    }

                    {! props.showIcon &&
                        __( 'Share On Facebook', 'social-block')
                    }

                </FacebookShareButton>

                {props.showCounts &&
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
                    {props.showIcon &&
                        <TwitterIcon
                            size={props.iconSize}
                            round
                        />
                    }

                    {! props.showIcon &&
                        __('Share On Twitter', 'social-block')
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
                    {props.showIcon &&
                        <WhatsappIcon
                            size={props.iconSize}
                            round
                        />
                    }
                    {! props.showIcon &&
                        __('Share On WhatsApp', 'social-block')
                    }
                </WhatsappShareButton>
            </div>
        </div>
    )
};


export const Email = (props) => {
    return(
        <div className={classNames.outer}>
            <div className={`${classNames.inner}-email`}>
                <EmailShareButton
                    url={props.shareUrl}
                    subject={props.shareTitle}
                    body="body"
                >
                    {props.showIcon &&
                        <EmailIcon
                            size={props.iconSize}
                            round
                        />
                    }
                    {! props.showIcon &&
                        __('Share Via Email', 'social-block')
                    }
                </EmailShareButton>
            </div>
        </div>
    )
};

export const LinkedIn = (props) => {
    return(
        <div className={classNames.outer}>
            <div className={`${classNames.inner}-linkedin`}>
                <LinkedinShareButton
                    url={props.shareUrl}
                    title={props.shareTitle}
                    windowWidth={750}
                    windowHeight={600}
                >
                    {props.showIcon &&
                        <LinkedinIcon
                            size={props.iconSize}
                            round
                        />
                    }
                    {! props.showIcon &&
                        __('Share Via LinkedIn', 'social-block')
                    }

                    { props.showCounts &&
                        <LinkedinShareCount
                            url={props.shareUrl}
                        >
                            {count => count}
                        </LinkedinShareCount>
                    }
                </LinkedinShareButton>
            </div>
        </div>
    )
};

export const Reddit = (props) => {
    return(
        <div className={classNames.outer}>
            <div className={`${classNames.inner}-reddit`}>
                <RedditShareButton
                    url={props.shareUrl}
                    title={props.shareTitle}
                    windowWidth={750}
                    windowHeight={600}
                >
                    {props.showIcon &&
                        <RedditIcon
                            size={props.iconSize}
                            round
                        />
                    }
                    {! props.showIcon &&
                        __('Share Via Redit', 'social-block')
                    }

                    {props.showCounts &&
                        <RedditShareCount
                            url={props.shareUrl}
                        >
                            {count => count}
                        </RedditShareCount>
                    }
                </RedditShareButton>
            </div>
        </div>
    )
};

export const Tumblr = (props) => {
    return(
        <div className={classNames.outer}>
            <div className={`${classNames.inner}-tumblr`}>
                <TumblrShareButton
                    url={props.shareUrl}
                    title={props.shareTitle}
                    windowWidth={750}
                    windowHeight={600}
                >
                    {props.showIcon &&
                        <TumblrIcon
                            size={props.iconSize}
                            round
                        />
                    }
                    {! props.showIcon &&
                        __('Share Via Tumblr', 'social-block')
                    }

                    { props.showCounts &&
                        <TumblrShareCount
                            url={props.shareUrl}
                        >
                            {count => count}
                        </TumblrShareCount>
                    }
                </TumblrShareButton>
            </div>
        </div>
    )
};

export const Pintrest = (props) => {
    return(
        <div className={classNames.outer}>
            <div className={`${classNames.inner}-pintrest`}>
                <PinterestShareButton
                    url={props.shareUrl}
                    windowWidth={750}
                    windowHeight={600}
                >
                    { props.showIcon &&
                        <PinterestIcon
                            size={props.iconSize}
                            round
                        />
                    }
                    {! props.showIcon &&
                        __('Share Via Pintrest', 'social-block')
                    }

                    {props.showCounts &&
                        <PinterestShareCount
                            url={props.shareUrl}
                        >
                            {count => count}
                        </PinterestShareCount>
                    }
                </PinterestShareButton>
            </div>
        </div>
    )
};