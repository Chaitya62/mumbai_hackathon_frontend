import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import dataSingleton from './dataSingleton.js';
import Graph from './graph.js';
import Serializer from './Serializer.js';
import getRequestPromise from './network.js';

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

	deleteFloor(e, i, self){
		var graphs = this.state.graphs;

		graphs.splice(i, 1);

		this.setState({'graphs': graphs});


	}

	onClick(e){
		e.preventDefault();
		var data = Serializer.getData();

		var url = "https://sleepy-plains-68877.herokuapp.com/saveGraph";
		console.log(data);
		getRequestPromise(url , data);


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
				<h2 className="header">Floors</h2>

				<div className="container-fluid floors">
				{
					this.state.graphs.map((graph, i)=>(
						<div  className=" effect5  floorWidget card"   key={i} >
						<div className="card-body">
							
							<h5 className="card-title">{i+1}F</h5>
							<div className="card-text">
								<span className="edit" onClick={(e)=>{this.setFloor(e, i, self)}}>edit</span> 
								<span className="delete" onClick={(e)=>{this.deleteFloor(e, i, self)}} >delete</span>
							</div>
						</div>
						</div>
					)
					)
				}
				<div className="addButton card" onClick={this.addFloor.bind(this)}>
					<div className="card-body">
						<h5 className="card-title">+</h5>
						<div className="card-text">Add floor</div>
					</div>

				</div>
				</div>

				<div className="footer">
					<button className="btn btn-default center savebutton" onClick={this.onClick.bind(this)}>
						Save
					</button>
				</div>

			</div>
		);
	}
}
