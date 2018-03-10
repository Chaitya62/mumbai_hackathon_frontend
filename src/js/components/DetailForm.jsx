import React from 'react';

export default class DetailForm extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<h2> Details </h2>
				<form className="form">
					
					<input className="form-control" type="text" placeholder="name" />
					<input className="form-control" type="text" placeholder="details" />
					<button onClick={this.props.moveEnable}>Move</button>
				</form>
			</div>
		);
	}
}
