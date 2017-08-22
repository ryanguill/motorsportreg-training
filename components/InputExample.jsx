/*
import React, { Component } from 'react';

export default class InputExample extends Component {
	constructor (props) {
		super(props);	
	}
	
	render () {
		return (
			<div className="form-wrapper">
				<form>
					<input value={this.props.value} 
						onChange={this.props.onChange} />
				</form>	
			</div>	
		)
	}

}
*/

import React from 'react';

export default function InputExample ({value, onChange}) {
	return (
		<div className="form-wrapper">
			<form>
				<input value={value} 
					onChange={onChange} />
			</form>	
		</div>	
	);
}