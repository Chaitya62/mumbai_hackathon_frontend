var Graph = function(){


	var noOfVertices = 0;

	var adj = new Map();
	var vals = [];




	function addNode(gobj){
		noOfVertices+=1;
		adj.set(noOfVertices-1, new Array());
		vals.push(gobj);
		//console.log(noOfVertices);
	}


	function addEdge(n1, n2){
		adj.get(n1).push(n2);
		adj.get(n2).push(n1);
	}

	function getVertices(){
		return noOfVertices;
	}



	return {
		addEdge: addEdge,
		addNode: addNode,
		getVertices: getVertices,
		'adj': adj,
		'vals': vals
	};


};

export default Graph;