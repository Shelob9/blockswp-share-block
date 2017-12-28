const { __ } = wp.i18n;
import { Component } from 'react';
import {
    Facebook,
    Twitter,
    WhatsApp,
    Email,
    LinkedIn,
    Reddit,
    Tumblr
} from "./SocialComponents";

export const ShareView = (attributes) => {
    return(
        <div className="wp-block-blockswp-share-blocks">
            {'true' === attributes.showFacebook &&
                <Facebook
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Facebook>
            }

            {'true' === attributes.showTwitter &&
                <Twitter
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Twitter>

            }

            {'true' === attributes.showWhatsapp &&
                <WhatsApp
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </WhatsApp>
            }

            {'true' === attributes.showEmail &&
                <Email
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Email>
            }

            {'true' === attributes.showLinkedin &&
                <LinkedIn
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </LinkedIn>
            }

            {'true' === attributes.showReditt &&
                <Reddit
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Reddit>
            }

                <Tumblr
                    shareUrl={attributes.shareUrl}
                    shareTitle={attributes.shareTitle}
                    showCounts={attributes.showCounts}
                    showIcon={attributes.showIcon}
                    iconSize={attributes.iconSize}
                >
                </Tumblr>



        </div>
    )
};

