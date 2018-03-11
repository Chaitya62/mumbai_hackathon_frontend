import React from 'react';

export default class DetailForm extends React.Component {
	
	constructor(props) {
		super(props);

	}

	Save(){
		var name = this.refs.name.value;
		console.log('here : '+" "+this.props.idx);
		this.props.updateName(this.props.idx, name);
	}


	

	render() {
		console.log('test');
		console.log(this.props);

		return (
			<div className="details">
			<h2> Details </h2>

				<input ref="name" className="form-control" type="text" placeholder="name"   />
				<input ref="save" onClick={this.Save.bind(this)} className="btn btn-success" type="submit" value="save" />
			</div>
		);
	}
}
