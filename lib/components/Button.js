import React, {
	Component,
	PropTypes
} from "react";
import {
	View,
	TouchableWithoutFeedback,
	requireNativeComponent
} from "react-native";

const RNAKButton = requireNativeComponent("ButtonAndroid", Button, {});

export default class Button extends Component {
	static displayName = "ButtonAndroid";
	static propTypes = {
		...View.propTypes,
		...TouchableWithoutFeedback.propTypes,
		backgroundColor: PropTypes.string,
		textColor: PropTypes.string,
		text: PropTypes.string,
		textSize: PropTypes.number
	};
	static defaultProps = {
		textSize: 15,
		textColor: "black",
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableWithoutFeedback {...this.props}>
				<RNAKButton
					style={this.props.style}
					backgroundColor={this.props.backgroundColor}
					textColor={this.props.textColor}
					textSize={this.props.textSize}
					text={this.props.text}/>
			</TouchableWithoutFeedback>
		);
	}
}
