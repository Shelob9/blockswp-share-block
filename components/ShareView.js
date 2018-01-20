const { __ } = wp.i18n;
import {
    Facebook,
    Twitter,
    WhatsApp,
    Email,
    LinkedIn,
    Reddit,
    Tumblr,
    Pintrest
} from "./SocialComponents";
import {getDefaults} from "./blockAttributes";

export const ShareView = (attributes) => {
    if( ! attributes.iconSize ){
        attributes = getDefaults();
    }
    return(
        <div className="wp-block-blockswp-share-blocks">
            {attributes.showFacebook &&
                <Facebook
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Facebook>
            }

            {attributes.showTwitter &&
                <Twitter
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Twitter>

            }

            {attributes.showWhatsapp &&
                <WhatsApp
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </WhatsApp>
            }


            {attributes.showLinkedin &&
                <LinkedIn
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </LinkedIn>
            }

            {attributes.showReditt &&
                <Reddit
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Reddit>
            }

            {attributes.showTumblr &&
                <Tumblr
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Tumblr>
            }

            {attributes.showPinterest &&
                <Pintrest
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Pintrest>
            }

            {attributes.showEmail &&
                <Email
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Email>
            }

        </div>
    )
};

