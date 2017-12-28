const { __ } = wp.i18n;
import { Component } from 'react';
import {
    Facebook,
    Twitter
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

        </div>
    )
};

