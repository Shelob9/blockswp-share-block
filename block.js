

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;



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


const defaultAttributes = {
    shareTitle: 'Hi Roy',
    shareUrl: 'https://googgle.com',
    shareImage: 'https://via.placeholder.com/350x150',
	networks: {
		facebook: {},
		twitter: {}
	}

};

let blockAttributes = {
    shareTitle: {

    },
    shareUrl: {

    },
    shareImage : {

    },

};


Object.keys( defaultAttributes.networks ).forEach(  network => {
    defaultAttributes.networks[network] = {
		show: true,
		icon: true,
		count: false
	};

    blockAttributes[network] = {}
});

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.isChecked,
            label: props.label
        };
    }



    render(){
        const toggleCheckboxChange = () => {
            const { handleCheckboxChange, label } = this.props;
            this.setState(({ isChecked }) => (
                {
                    isChecked: !isChecked,
                }
            ));

            handleCheckboxChange(this.state.isChecked);
        };
        return(
            <div className="blockswp-share-block-setting">
                <label
                    for={this.props.idAttr}
                >
                    {this.props.label}
                </label>
                <input
                    id={this.props.idAttr}
                    type="checkbox"
                    value={this.props.checked}
                    checked={this.props.checked}
                    onClick={this.props.toggleCheckboxChange}
                    onChange={this.props.toggleCheckboxChange}
                />
            </div>
        )
    }
}

class SocialNetwork extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
			<div className="blockswp-share-block">
				<div className="blockswp-share-block-facebook">
					<FacebookShareButton
						url={this.props.shareUrl}
						quote={this.props.shareTitle}
						className="blockswp-share-block-facebook__share-button">
                        {'true' === this.props.showIcon &&
                            <FacebookIcon
                                size={this.props.iconSize}
                                round
                            />
                        }
                        {'false' === this.props.showIcon &&
                            __( 'Share On Facebook', 'text-domain')
                        }

					</FacebookShareButton>
                    {'true' === this.props.showCounts &&
                        <FacebookShareCount
                        url={this.props.shareUrl}
                        className="blockswp-share-block-facebook__share-count">
                        {count => count}
                        </FacebookShareCount>
                    }

				</div>
			</div>
        )
    }
}


registerBlockType( 'blockswp/share-block', {
	title: __( 'Social Share', 'text-domain' ),
	icon: 'networking',
	category: 'common',
	attributes: {
        shareUrl: {
        	default: exampleImage
        },
        shareTitle: {
            default: __( 'Post Title', 'gb')
        },
        showCounts: {
            default: 'true',
        },
        showIcon: {
            default: 'true'
        },
        iconSize :{
            default: 32
        },
        showFacebook: {
            default: 'true'
        }
    },
    edit({attributes, setAttributes, className, focus, id}) {

        return (
			<div className={ className }>
                {focus &&

                    <div className="blockswp-share-block-settings">
                        <div className="blockswp-share-block-settings-section">
                            <Checkbox
                                idAttr="blockswp-share-block-show-facebook"
                                label={__( 'Show Facebook', 'text-domain')}
                                checked={attributes.showFacebook}
                                toggleCheckboxChange={(event)=> setAttributes({showFacebook:event.target.checked.toString()})}
                            />
                        </div>
                        <div className="blockswp-share-block-settings-section">
                            <Checkbox
                                idAttr="blockswp-share-block-show-icon"
                                label={__( 'Show Icon', 'text-domain')}
                                checked={attributes.showIcon}
                                toggleCheckboxChange={(event)=> setAttributes({showIcon:event.target.checked.toString()})}
                            />

                            <Checkbox
                                idAttr="blockswp-share-block-show-counts"
                                label={__( 'Show Counts', 'text-domain')}
                                checked={attributes.showIcon}
                                toggleCheckboxChange={(event)=> setAttributes({showCounts:event.target.checked.toString()})}
                            />

                            <div className="blockswp-share-block-setting">
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


                }

                <div className="wp-block-blockswp-share-blocks">
                {'true' === attributes.showFacebook &&
                    <SocialNetwork
                        shareUrl={attributes.shareUrl}
                        shareTitle={attributes.shareTitle}
                        className="Demo__some-network__share-button"
                        showCounts={attributes.showCounts}
                        showIcon={attributes.showIcon}
                        iconSize={attributes.iconSize}
                    >
                    </SocialNetwork>
                }
                </div>

            </div>
		);

	},

    save({attributes, className}) {
		return (
			<p className={ className }>Social</p>
		);
	},
} );
