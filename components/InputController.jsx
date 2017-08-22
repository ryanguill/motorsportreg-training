import React, { Component } from 'react';
import InputExample from './InputExample.jsx';
import componentLogger from './ComponentLogger.jsx';

class HelloController extends Component {
	constructor (props) {
		super(props);

		this.state = {
			value: props.name
		};

		this.onChange = this.onChange.bind(this);
	}

	displayName: 'HelloController'

	onChange (event) {
		console.log({value: event.currentTarget.value});
		this.setState({
			value: event.currentTarget.value
		});
	}

	render () {
		return (
			<InputExample value={this.state.value} onChange={this.onChange} />
		);
	}
}

export default componentLogger(HelloController);