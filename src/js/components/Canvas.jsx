import React from 'react';

export default class Canvas extends React.Component {
	

	constructor(props) {
		super(props);
		this.prevX = null;
		this.prevY = null;
		this.state = {
			height: '600',
			width: '600',
			items: this.props.graph,
		}

	}


	updateCanvas(){
		const ctx = this.refs.canva.getContext('2d');
		this.ctx = ctx;
		const rect= this.refs.canva.getBoundingClientRect();
		this.rect =rect;
		ctx.fillStyle = 'blue';
		ctx.fillRect(0, 0, this.refs.canva.height, this.refs.canva.width);

		

	}


	putItem(img, x, y){
		//console.log('idhar');
		//console.log(img);

		var imgObj = new Image();

		imgObj.src = img;

		
//		console.log(imgObj);
		imgObj.height = '120px';
		imgObj.width = '120px';

		this.ctx.drawImage(imgObj, x-15,y-15,30, 30);
		//console.log(img);
	}


	componentDidMount() {
		this.updateCanvas();
		
	}

	componentDidUpdate(){
		this.ctx.clearRect(0,0,this.refs.canva.width,this.refs.canva.height);
		this.updateCanvas();
		this.drawAll()
	}

	preventDefault(ev){

		var x = ev.clientX-this.rect.left;
		var y = ev.clientY-this.rect.top;

		var tempArr = this.state.items;


		if(tempArr.length > 0){

			var ax = tempArr[tempArr.length-1];

			this.ctx.clearRect(0,0,this.refs.canva.width,this.refs.canva.height);
			this.updateCanvas();

			
			this.drawLine(ax.itemx, ax.itemy, x, y, 'black');

			this.drawAll();

		}
			


		

		ev.preventDefault();
	}


	test(){
		this.updateCanvas();
		this.drawAll();
	}

	drawAll(){

		var tempArr = this.state.items;



	//	console.log('idhar walal');
	//	console.log(tempArr);
		if(tempArr.length == 0) return;
		if(tempArr[0].isActive){
			
			this.ctx.fillStyle = 'white';
			this.ctx.fillRect(tempArr[0].itemx-20, tempArr[0].itemy-20,40, 40);

		}

		for(var i = 1;i<tempArr.length;i++){
			this.drawLine(tempArr[i-1].itemx, tempArr[i-1].itemy, tempArr[i].itemx, tempArr[i].itemy);
		}


		this.putItem(this.props.img[tempArr[0].item], tempArr[0].itemx, tempArr[0].itemy);
		for(var i = 1;i<tempArr.length; i++){
			
			if(tempArr[i].isActive){
			
			this.ctx.fillStyle = 'white';
			this.ctx.fillRect(tempArr[i].itemx-20, tempArr[i].itemy-20,40, 40);
			
			}
			this.putItem(this.props.img[tempArr[i].item], tempArr[i].itemx, tempArr[i].itemy);
			
							

		}



		return;
	}


	drawLine(x1,y1,x2,y2, color){
		const ctx = this.ctx;

		ctx.fillStyle = color;
		//console.log(color);
		ctx.beginPath();
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2, y2);
		ctx.lineWidth = '20px';
		ctx.stroke();
	}



	


	drop(ev){
		ev.preventDefault()
		const item = ev.dataTransfer.getData('text');
	//	console.log(ev.clientX);
	
		var itemObj = {'item': item, itemx: ev.clientX-this.rect.left, itemy: ev.clientY-this.rect.top, isActive: true}

		var tempArr = this.state.items;

		if(tempArr.length > 0){
			//console.log('here');
			tempArr[tempArr.length - 1].isActive = false;

		//	this.drawLine(ax.itemx, ax.itemy, itemObj.itemx, itemObj.itemy, 'black');
		}

		tempArr.push(itemObj);

		this.setState({'items': tempArr});
		this.props.updateGraph(tempArr);

		var x = ev.clientX-this.rect.left;
		var y = ev.clientY-this.rect.top;



		// this.ctx.fillStyle = 'white';
		// this.ctx.fillRect(x-20, y-20,40, 40);
		// this.putItem(this.props.img[item], ev.clientX-this.rect.left, ev.clientY-this.rect.top);
		


	}


	handleClick(ev){
		ev.preventDefault();

		var x = ev.clientX-this.rect.left;
		var y = ev.clientY-this.rect.top;

		//console.log(x);
		//console.log(y);

		var tempArr = this.state.items;

		for(var i = 0;i<tempArr.length;i++){
			var minx = tempArr[i].itemx-15;
			var maxx = tempArr[i].itemx+15;
			var miny = tempArr[i].itemy-15;
			var maxy =  tempArr[i].itemy+15;
			//console.log(minx + " " + maxx + " " + miny + " " + maxy );
			if(x >= minx && x <= maxx && y >= miny && y <= maxy){
			//	console.log('lsadflaslfd');
			
				for(var j = 0;j<tempArr.length;j++) tempArr[j].isActive = false;
				tempArr[i].isActive = true;
			}

		}

		this.props.detailFormEnable();

		this.setState({'items':tempArr});
	 
	}




	render() {

		console.log(this.props.moveEnable);

		return (
			<div>
				<canvas onDragOver={this.preventDefault.bind(this)} onDrop={this.drop.bind(this)} onClick={this.handleClick.bind(this)} ref="canva" className="view"  height={this.state.height}  width={this.state.width} >	
				</canvas>
			</div>
		);
	}
}
