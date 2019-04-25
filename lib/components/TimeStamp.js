import React, { Component } from 'react';

import storeProvider from './storeProvider';

const timeDisplay = timestamp => {
	return timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
};

// PureComponent doesnt help
class TimeStamp extends Component {
	render() {
		// this.props.timestamp.toString()
		return (
			<div>
				{timeDisplay(this.props.timestamp)}
			</div>
		);
	}

	shouldComponentUpdate(nextProps, nextState) {
		const currentTimeDisplay = timeDisplay(this.props.timestamp);
		const nextTimeDisplay = timeDisplay(nextProps.timestamp)

		return currentTimeDisplay !== nextTimeDisplay;
		// return true;
	}

	componentWillUpdate() {
		console.log('Updating TimeStamp');
  }
}

function extraProps(store) {
	return {
		timestamp: store.getState().timestamp		// updates from global state
	};
}

export default storeProvider(extraProps)(TimeStamp);