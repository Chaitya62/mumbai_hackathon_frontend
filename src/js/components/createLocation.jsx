import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import Canvas from './Canvas.jsx';
import imageT from '../../images/images.jpg';
import DetailForm from './DetailForm.jsx';


var img = {
	'test1': imageT,
	'test2': imageT,
	'test3': imageT
};

export default class createLocation extends Component {
	
	constructor(props) {
		super(props);

		this.state={

			'items': [
			'test1', 'test2','test3'
			],
			'graph':[],
			'detailForm': false,
			moveEnable: false,

		};
	}

	

	dragStart(ev, item){

		console.log("Hello");
		ev.dataTransfer.setData('text', item);
	}

	detailFormEnable(ev){
		var fx = this.detailForm;
		this.setState({'detailForm':  true });
	}

	moveEnable(ev){
		var fx = this.moveEnable;
		this.setState({moveEnable: true});
	}

	updateGraph(graph){
		this.setState({'graph' : graph });

	}

	render() {


		var detailForm = (this.state.detailForm ? <DetailForm moveEnable ={this.moveEnable.bind(this)} /> :  "" );

		console.log(detailForm);

		return (
    <div>
	  <div className="row">
	  	<div className="col-lg-3">
	  		{
	  			this.state.items.map((item, j)=>{
	  				return (<img className="item"  draggable="true" onDragStart={ (e)=>{this.dragStart(e, item)} } key={j} src={img[item]} />)
	  			})
	  		}
	  	</div>
	  	<div className="col-lg-6" >
	  			<Canvas img={img}  detailFormEnable={this.detailFormEnable.bind(this)} updateGraph={this.updateGraph.bind(this)} graph={this.state.graph} moveEnable={this.state.moveEnable} />
	  	</div>
	  	<div className="col-lg-3">
	  		
	  		{
	  			detailForm
	  		}

	  	</div>
	  </div>
    </div>
  );
	}
}
