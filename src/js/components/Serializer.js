import dataSingleton from './dataSingleton.js';

var Serializer = (function(){


	function getData(){
		var graphs = dataSingleton.getObj('graphs');

	var graphsObj = [];

	for(var i = 0;i<graphs.length;i++){
		var graph = {'adj':[], 'vals':[]};

		var adj = graphs[i].adj;

		graph.vals = graphs[i].vals;

		var n = graphs[i].getVertices();


		for(var j = 0;j<n;j++){
			graph.adj.push(adj.get(j));
		}

		graphsObj.push(graph);

		var data = {'data':''};

		data.data = graphsObj;
		
	}
		
		//var graphString = JSON.stringify(data);

		return data;
	}


	return {
		getData: getData
	}



})();

export default Serializer;