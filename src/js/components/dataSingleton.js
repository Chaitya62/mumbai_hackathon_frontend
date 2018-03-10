
var dataSingleton = (function(){

	var data = new Map();

	function setObj(key, value){
		data.set(key, value);
	}

	function getObj(key){
		return data.get(key);
	}


	return {
		setObj: setObj,
		getObj: getObj
	};


})();

export default dataSingleton;