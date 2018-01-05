import { Component } from 'react';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div className="blockswp-share-block-setting">
                <label
                    htmlFor={this.props.idAttr}
                >
                    {this.props.label}
                </label>
                <input
                    id={this.props.idAttr}
                    type="checkbox"
                    value={this.props.checked}
                    checked={this.props.checked}
                    onClick={this.props.change}
                    />
            </div>
        )
    }
}

