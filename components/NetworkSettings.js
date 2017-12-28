const { __ } = wp.i18n;
import { Component } from 'react';
import Checkbox from 'rc-checkbox';

class NetworkSettings extends Component {
    constructor(props){
        super(props);
        this.setter = props.setter;
        this.state = {

            showFacebook: + props.showFacebook,
            showTwitter: + props.showTwitter,
            showWhatsapp: + props.showFacebook,
            showPinterest: + props.showPinterest,
            showReditt: + props.showReditt,
            showTumblr: + props.showTumblr,
            showEmail: + props.showEmail,
        };

        this.facebookHandler = this.changeHandlerFactory('showFacebook');
        this.twitterHandler = this.changeHandlerFactory( 'showTwitter');
    }
    changeHandlerFactory(attributeName){
        return () => {
            let v = this.props[attributeName];
            v = ! v;
            v = + v;
            let update = {};
            update[attributeName] = v;
            this.setter({update});

        };
    }
    render(){

        return(
            <div>
                <label>
                    {__('Facebook', 'social-block')}
                </label>
                <Checkbox
                    checked={this.props.showFacebook}
                    onChange={this.facebookHandler}
                />
                <label>
                    {__('Twitter', 'social-block')}
                </label>
                <Checkbox
                    checked={this.props.showTwitter}
                    onChange={this.twitterHandler}
                />
            </div>
        )
    }
}

export default NetworkSettings;