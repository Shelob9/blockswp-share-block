const { __ } = wp.i18n;

export const blockAttributes = {
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
        default: false,
        type:   'integer',
        source: 'meta',
        meta:   'blockswp_share_showCounts'
    },
    showIcon: {
        default: true,
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
        default: true,
        type:   'integer',
        source: 'meta',
        meta:   'blockswp_share_showFacebook'
    },
    showTwitter: {
        default: true,
        type:   'integer',
        source: 'meta',
        meta:   'blockswp_share_showTwitter'
    },
    showWhatsapp : {
        default: true,
        type:   'integer',
        source: 'meta',
        meta:   'blockswp_share_showWhatsapp'
    },
    showPinterest : {
        default: true,
        type:   'integer',
        source: 'meta',
        meta:   'blockswp_share_showPinterest'
    },
    showLinkedin : {
        default: true,
        type:   'integer',
        source: 'meta',
        meta:   'blockswp_share_showLinkedin'
    },
    showReditt : {
        default: true,
        type:   'integer',
        source: 'meta',
        meta:   'blockswp_share_showReditt'
    },
    showTumblr : {
        default: true,
        type:   'integer',
        source: 'meta',
        meta:   'blockswp_share_showTumblr'
    },
    showEmail : {
        default: true,
        type:   'integer',
        source: 'meta',
        meta:   'blockswp_share_showEmail'
    }
};

export const getDefaults = function () {
    let newState = {};
    Object.keys(blockAttributes).forEach( (attr) => {
        newState[attr] = blockAttributes[attr].default;
    });
    return newState;
};
