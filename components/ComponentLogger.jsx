import React, { Component } from 'react';

export default function componentLogger ( WrappedComponent ) {
	return class extends Component {
		constructor (props) {
			super(props);
		}

		componentDidMount () {
			console.log(`component ${WrappedComponent.name}/${WrappedComponent.displayName} mounted.`);
		}

		render () {
			return (<WrappedComponent {...this.props} />);
		}
	};
}