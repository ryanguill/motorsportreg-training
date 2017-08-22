import React, { Component } from 'react';

export class Hello extends Component {
	constructor (props) {
		super(props);

		this.name = 'Ryan';
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick (event) {
		alert(`Hi ${this.name}`);
	}

	render () {
		return (
			<div className="app-wrapper">
				<h1>Hello {this.props.name}</h1>
				<button onClick={this.handleButtonClick.bind(this)}>Click</button>
			</div>	
		);
	}
}



