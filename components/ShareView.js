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

export const ShareView = (attributes) => {
    return(
        <div className="wp-block-blockswp-share-blocks">
            {1 == attributes.showFacebook &&
                <Facebook
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Facebook>
            }

            {1 == attributes.showTwitter &&
                <Twitter
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Twitter>

            }

            {1 == attributes.showWhatsapp &&
                <WhatsApp
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </WhatsApp>
            }


            {1 == attributes.showLinkedin &&
                <LinkedIn
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </LinkedIn>
            }

            {1 == attributes.showReditt &&
                <Reddit
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Reddit>
            }

            {1 == attributes.showTumblr &&
                <Tumblr
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Tumblr>
            }

            {1 == attributes.showPinterest &&
                <Pintrest
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Pintrest>
            }

            {1 == attributes.showEmail &&
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

