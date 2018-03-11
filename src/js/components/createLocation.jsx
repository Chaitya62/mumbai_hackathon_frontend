import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Canvas from './Canvas.jsx';
import imageT from '../../images/images.jpg';
import bigBazaar from '../../images/bigbazaarfinal.png';
import croma from '../../images/cromafinal.png';
import escalatorDown from '../../images/escalatordownfinal.png';
import escalatorUp from '../../images/escalatorupfinal.png';
import foodcourt from '../../images/foodcourtfinal.png';
import gamezone from '../../images/gamefinal.png';
import mcd from '../../images/mcdonaldsfinal.png';
import loo from '../../images/loofinal.png';
import pizzahut from '../../images/pizzahutfinal.png';
import shopper from '../../images/shoppersstopfinal.png';
import stairsdown from '../../images/stairsdownfinal.png';
import stairsup from '../../images/stairsupfinal.png';
import starbucks from '../../images/starbucksfinal.png';
import DetailForm from './DetailForm.jsx';
import Graph from './graph.js';
import dataSingleton from './dataSingleton.js';


var img = {
	'test1': imageT,
	'test2': imageT,
	'test3': imageT,
	'bigBazaar': bigBazaar,
	'croma': croma,
	'escalatorup': escalatorUp,
	'escalatorDown': escalatorDown,
	'foodcourt': foodcourt,
	'gamezone':gamezone,
	'mcd': mcd,
	'washroom': loo,
	'pizzahut': pizzahut,
	'shopper': shopper,
	'stairsdown': stairsdown,
	'stairs': stairsup,
	'starbucks': starbucks
};

export default class createLocation extends Component {
	
	constructor(props) {
		super(props);


		var currFloor = dataSingleton.getObj('currFloor');
		var graphs = dataSingleton.getObj('graphs');

		this.state={

			'items': [
				'bigBazaar','croma',
				'foodcourt',
				'gamezone',
				'mcd',
				'washroom',
				'pizzahut',
				'shopper',
				'stairs',
			],
			'join': false,
			'graph': graphs[currFloor],
			'detailForm': false,
			moveEnable: false,
			'detailsOf': null,
			'currdetails': null,
			'currFloor': currFloor,

		};
	}

	

	dragStart(ev, item){
		console.log('yes');
		ev.dataTransfer.setData('text', item);
	}

	detailFormEnable(idx){

		console.log('idahrse hais ');
		console.log(idx);
		var fx = this.detailForm;
		var graph = this.state.graph;
		this.setState({'detailForm':  true , 'detailsOf': idx, 'currdetails': graph.vals[idx]});
	}

	moveEnable(ev){
		var fx = this.moveEnable;
		this.setState({moveEnable: true});
	}

	updateGraph(graph){
		
		var currFloor = dataSingleton.getObj('currFloor');
		var graphs = dataSingleton.getObj('graphs');
		graphs[currFloor] = graph;
		dataSingleton.setObj('graphs', graphs);
		this.setState({'graph' : graph });
		return;

	}

	clearGraph(){
		var graph = Graph();
		this.updateGraph(graph);
	}

	updateName(idx, name){
		var graph = this.state.graph;

		graph.vals[idx].name = name;

		this.setState({'graph':graph});
	}

	joinTool(){
		console.log('here it is asdfbicasf');
		var fx = this.state.join;

		console.log("hello " + this.state.join);

		this.setState({join: !fx});
		return;

	}

	render() {


		var detailForm = (this.state.detailForm ? <DetailForm  updateName={this.updateName.bind(this)} vals={this.state.currdetails} idx={this.state.detailsOf} /> :  "" );

		

		return (
    <div className="create-location">
    	<div className="header">
    		<Link to="/"  className="btn-back" >Back</Link>
    		<p className="floorNumber">{this.state.currFloor+1}F</p>
    	</div>
    	<br />
    	<br />
	  <div className="row">
	  	<div className="col-lg-3 lists">
	  		
	  			{
	  			this.state.items.map((item, j)=>{
	  				return (
	  					<div key={j} >
	  					<img className="item"  draggable="true" onDragStart={ (e)=>{this.dragStart(e, item)} } src={img[item]} />
	  					<p className="text lead" >{item}</p>
	  					</div>)
	  			})
	  		}
	  		
	  		
	  	</div>
	  	<div className="col-lg-7" >

	  			<Canvas img={img}  detailFormEnable={this.detailFormEnable.bind(this)} updateGraph={this.updateGraph.bind(this)} graph={this.state.graph}  join={this.state.join} />
	  	</div>
	  	<div className="col-lg-2">
	  		
	  		{
	  			detailForm
	  		}

	  	</div>
	  </div>
    </div>
  );
	}
}
