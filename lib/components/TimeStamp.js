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
				{this.props.timestampDisplay}
			</div>
		);
	}

	componentWillUpdate() {
		console.log('Updating TimeStamp');
  }
}

function extraProps(store) {
	return {
		timestampDisplay: timeDisplay(store.getState().timestamp),
	};
}

export default storeProvider(extraProps)(TimeStamp);