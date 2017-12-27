import { Component } from 'react';

export default class Checkbox extends Component {
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

