import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import dataSingleton from './dataSingleton.js';
import Graph from './graph.js';
import Serializer from './Serializer.js';

export default class locationFloor extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			graphs: dataSingleton.getObj('graphs'),
			floor: false,
		};
	}

	componentDidUpdate() {
		dataSingleton.setObj('graphs', this.state.graphs);
		return;
	}



	addFloor(){
		var graphs = this.state.graphs;
		graphs.push(Graph());
		this.setState({'graphs': graphs});
		return;
	}

	setFloor(e, i, self){
		dataSingleton.setObj('currFloor', i);
		this.setState({floor: true});

	}

	render() {

		console.log(this.state.graphs);
		var self = this;

		console.log(Serializer.getData());

		if(this.state.floor){
			return <Redirect to="/floor" />
		}

		return (


			<div>
				{
					this.state.graphs.map((graph, i)=>(
						<div to="/floor" className="floorWidget" onClick={(e)=>{this.setFloor(e, i, self)}}  key={i} >Hello</div>
					)
					)
				}
				<div className="addButton btn btn-default" onClick={this.addFloor.bind(this)}>+</div>					
			</div>
		);
	}
}
