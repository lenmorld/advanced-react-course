import React, { Component } from 'react';

import storeProvider from './storeProvider';

class TimeStamp extends Component {
	render() {
		return (
			<div>
				{this.props.timestamp.toString()}
			</div>
		);
	}
}

// export default TimeStamp;

function extraProps(store) {
	return {
		timestamp: store.getState().timestamp		// updates from global state
	};
}

export default storeProvider(extraProps)(TimeStamp);