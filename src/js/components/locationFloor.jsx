import React from 'react';
import dataSingleton from './dataSingleton.js';

export default class locationFloor extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			graphs: [],
		};
	}


	render() {


		console.log(dataSingleton.getObj('hello'));

		return (
			<div>
					
			</div>
		);
	}
}
